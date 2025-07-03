/**
 * Pricing Calculator
 * Calculates service cost based on benefit amount and 529 investment requirements
 */

class PricingCalculator {
    constructor() {
        this.INTEREST_RATE = 0.04; // 4% APY
        this.INTEREST_PERIOD_DAYS = 30; // 30 days
        this.DAYS_IN_YEAR = 365;
        this.BENEFIT_PERCENTAGE = 0.15; // 20% of benefit
    }

    /**
     * Calculate the total service cost
     * @param {string} state - State abbreviation
     * @param {number} income - Annual income
     * @param {Array} enrolledMonths - Array of enrolled months
     * @param {Array} housingEntries - Housing information
     * @param {number} monthlyGrocery - Monthly grocery spending
     * @returns {Object} Pricing breakdown
     */
    calculatePricing(state, income, enrolledMonths, housingEntries, monthlyGrocery = 200) {
        try {
            // First, calculate the benefit using existing logic
            const benefitDetails = this.calculateBenefit(state, income, enrolledMonths, housingEntries, monthlyGrocery);
            
            // Calculate the amount that needs to go into 529
            const amount529Investment = this.calculate529InvestmentAmount(state, income, benefitDetails.qualifiedSpend);
            
            // Calculate interest cost on the 529 investment
            const interestCost = this.calculateInterestCost(amount529Investment);
            
            // Calculate base service cost (20% of benefit)
            const baseCost = benefitDetails.benefit * this.BENEFIT_PERCENTAGE;
            
            // Total cost
            const totalCost = baseCost + interestCost;
            
            return {
                benefit: benefitDetails.benefit,
                qualifiedSpend: benefitDetails.qualifiedSpend,
                amount529Investment: amount529Investment,
                baseCost: Math.round(baseCost * 100) / 100, // Round to 2 decimal places
                interestCost: Math.round(interestCost * 100) / 100,
                totalCost: Math.round(totalCost * 100) / 100,
                savingsAfterCost: Math.round((benefitDetails.benefit - totalCost) * 100) / 100
            };
        } catch (error) {
            console.error('Error calculating pricing:', error);
            return {
                benefit: 0,
                qualifiedSpend: 0,
                amount529Investment: 0,
                baseCost: 0,
                interestCost: 0,
                totalCost: 0,
                savingsAfterCost: 0,
                error: error.message
            };
        }
    }

    /**
     * Calculate the amount that needs to be invested in 529
     * This is the minimum of: qualified expenses, state deduction limit, taxable income
     */
    calculate529InvestmentAmount(state, income, qualifiedSpend) {
        // Get state-specific information
        const stateTaxDeduction = (typeof statePersonalExemptionDB !== 'undefined' && statePersonalExemptionDB[state]) 
            ? statePersonalExemptionDB[state].amount : 0;
        const stateDeduction = (typeof state529DB !== 'undefined' && state529DB[state]) 
            ? state529DB[state].deduction : 0;
        
        const taxableStateIncome = Math.max(0, income - stateTaxDeduction);
        
        // The 529 investment amount is the minimum of these three
        return Math.min(qualifiedSpend, stateDeduction, taxableStateIncome);
    }

    /**
     * Calculate interest cost on 529 investment for 30 days at 4% APY
     */
    calculateInterestCost(investmentAmount) {
        if (investmentAmount <= 0) return 0;
        
        // Calculate daily interest rate from APY
        const dailyRate = this.INTEREST_RATE / this.DAYS_IN_YEAR;
        
        // Calculate interest for 30 days
        const interestCost = investmentAmount * dailyRate * this.INTEREST_PERIOD_DAYS;
        
        return interestCost;
    }

    /**
     * Calculate benefit using the same logic as the existing system
     * This mirrors the calculateBenefitWithMultipleHousingCustomGrocery function
     */
    calculateBenefit(state, income, enrolledMonths, housingEntries, monthlyGrocery = 200) {
        const currentYear = new Date().getFullYear();
        
        // Ensure inputs are properly typed
        income = Number(income) || 0;
        monthlyGrocery = Number(monthlyGrocery) || 200;
        
        if (!Array.isArray(enrolledMonths)) {
            enrolledMonths = [];
        }
        
        if (!Array.isArray(housingEntries)) {
            housingEntries = [];
        }
        
        let totalQualifiedExpenses = 0;
        
        // Calculate qualified expenses for each enrolled month
        for (let month = 1; month <= 12; month++) {
            if (!enrolledMonths.includes(month)) continue;
            
            // Add grocery expense
            totalQualifiedExpenses += Number(monthlyGrocery);
            
            // Find applicable housing entry for this month
            const applicableEntry = housingEntries.find(entry => {
                const startDate = new Date(entry.startYear, entry.startMonth - 1, 1);
                const endDate = new Date(entry.endYear, entry.endMonth - 1, 1);
                const thisMonth = new Date(currentYear, month - 1, 1);
                return thisMonth >= startDate && thisMonth <= endDate;
            });
            
            if (applicableEntry) {
                const rent = Number(applicableEntry.rent) || 0;
                const utilities = Number(applicableEntry.utilities) || 0;
                const wifi = Number(applicableEntry.wifi) || 0;
                
                totalQualifiedExpenses += rent;
                if (!applicableEntry.utilitiesIncluded) {
                    totalQualifiedExpenses += utilities;
                }
                totalQualifiedExpenses += wifi;
            }
        }
        
        // Get state tax information
        const stateTaxDeduction = (typeof statePersonalExemptionDB !== 'undefined' && statePersonalExemptionDB[state]) 
            ? statePersonalExemptionDB[state].amount : 0;
        const stateDeduction = (typeof state529DB !== 'undefined' && state529DB[state]) 
            ? state529DB[state].deduction : 0;
        
        const taxableStateIncome = Number(income) - stateTaxDeduction;
        const taxRate = this.calculateStateTaxRate(taxableStateIncome, state);
        const deductibleAmount = Math.min(
            totalQualifiedExpenses,
            stateDeduction,
            taxableStateIncome
        );
        const taxesPaid = taxRate * taxableStateIncome;
        
        // Calculate benefit based on state-specific rules
        let benefit;
        if (state === 'IN') {
            const contributionCredit = deductibleAmount * 0.20;
            benefit = Math.min(contributionCredit, 1500, taxesPaid);
        } else if (state === 'OR') {
            benefit = 180;
        } else if (state === 'MN') {
            if (income < 88810) {
                benefit = Math.min(500, taxesPaid, 0.5 * totalQualifiedExpenses);
            } else {
                benefit = 0;
            }
        } else {
            benefit = Math.min(deductibleAmount * taxRate, taxesPaid);
        }
        
        return { 
            benefit: Number(benefit) || 0, 
            qualifiedSpend: Number(totalQualifiedExpenses) || 0 
        };
    }

    /**
     * Calculate state tax rate (mirrors existing function)
     */
    calculateStateTaxRate(income, state) {
        if (income < 0) income = 0;
        
        // Check if stateTaxDB is available
        if (typeof stateTaxDB === 'undefined' || !stateTaxDB[state]) {
            console.warn(`No tax bracket information found for state: ${state}`);
            return 0;
        }
        
        const stateTaxInfo = stateTaxDB[state];
        if (!stateTaxInfo.brackets || stateTaxInfo.brackets.length === 0) {
            console.warn(`No tax bracket information found for state: ${state}`);
            return 0;
        }
        
        let totalTax = 0;
        let remainingIncome = income;
        let previousThreshold = 0;

        // Sort brackets by threshold
        const sortedBrackets = [...stateTaxInfo.brackets].sort((a, b) => a.threshold - b.threshold);
        
        // Calculate tax for each bracket
        for (let i = 0; i < sortedBrackets.length; i++) {
            const bracket = sortedBrackets[i];
            const nextThreshold = bracket.threshold;
            
            const taxableInThisBracket = Math.min(
                remainingIncome,
                nextThreshold - previousThreshold
            );
            
            if (taxableInThisBracket <= 0) break;
            
            totalTax += (taxableInThisBracket * (bracket.rate / 100));
            remainingIncome -= taxableInThisBracket;
            previousThreshold = nextThreshold;
            
            if (remainingIncome <= 0) break;
        }
        
        return totalTax / income;
    }

    /**
     * Format currency for display
     */
    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(amount);
    }

    /**
     * Get a detailed pricing breakdown as formatted text
     */
    getPricingBreakdown(state, income, enrolledMonths, housingEntries, monthlyGrocery = 200) {
        const pricing = this.calculatePricing(state, income, enrolledMonths, housingEntries, monthlyGrocery);
        
        if (pricing.error) {
            return `Error calculating pricing: ${pricing.error}`;
        }
        
        return {
            benefit: this.formatCurrency(pricing.benefit),
            amount529Investment: this.formatCurrency(pricing.amount529Investment),
            baseCost: this.formatCurrency(pricing.baseCost),
            interestCost: this.formatCurrency(pricing.interestCost),
            totalCost: this.formatCurrency(pricing.totalCost),
            savingsAfterCost: this.formatCurrency(pricing.savingsAfterCost),
            raw: pricing
        };
    }
}

// Create global instance
window.pricingCalculator = new PricingCalculator();

// Export for use in other modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PricingCalculator;
} 