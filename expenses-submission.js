// Expenses Submission Script
// Handles housing entries and expense data submission to the expenses API

// API URLs
const EXPENSES_API_URL = 'https://wb2pd4d6gg.execute-api.us-east-2.amazonaws.com';

// Submit a single expense
async function createExpense(expenseData) {
    console.log('=== EXPENSES API: Creating single expense ===');
    console.log('Expense data:', JSON.parse(JSON.stringify(expenseData)));
    
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
        throw new Error('No authentication token found');
    }

    // Format the expense data to match Lambda expectations
    const formattedExpense = {
        category: expenseData.category,
        amount: expenseData.amount,
        date: expenseData.date,
        notes: expenseData.notes || 'Onboarding expense',
        isQualified: expenseData.isQualified
    };

    try {
        const response = await fetch(`${EXPENSES_API_URL}/expenses`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formattedExpense)
        });

        console.log('Create expense API response status:', response.status);
        const data = await response.json();
        
        if (!response.ok) {
            console.error('Expense creation failed:', data);
            throw new Error(data.error || 'Failed to create expense');
        }

        console.log('=== EXPENSES API: Expense created successfully ===', data);
        return data;
    } catch (error) {
        console.error('Error creating expense:', error);
        throw error;
    }
}

// Submit all housing expenses based on housing entries and enrolled months
async function submitHousingExpenses(housingEntries, enrolledMonths) {
    console.log('=== EXPENSES SUBMISSION: Starting housing expenses ===');
    console.log('Housing entries:', JSON.parse(JSON.stringify(housingEntries)));
    console.log('Enrolled months:', enrolledMonths);
    
    const currentYear = new Date().getFullYear();
    
    try {
        // Create expenses for all months based on housing entries
        for (let month = 1; month <= 12; month++) {
            // Check if this month is enrolled
            const isEnrolled = enrolledMonths.includes(month);
            const isQualified = isEnrolled;
            const baseNotes = isEnrolled ? 'Onboarding expense' : 'Not qualified expense because not enrolled as a student';
            
            // Find which housing entry covers this month
            const applicableEntry = housingEntries.find(entry => {
                const startDate = new Date(entry.startYear, entry.startMonth - 1, 1);
                const endDate = new Date(entry.endYear, entry.endMonth - 1, 1);
                const thisMonth = new Date(currentYear, month - 1, 1);
                
                return thisMonth >= startDate && thisMonth <= endDate;
            });
            
            // Skip if no housing entry covers this month
            if (!applicableEntry) {
                continue;
            }
            
            console.log(`Month ${month}: Processing expenses with housing entry ID ${applicableEntry.id}. Enrolled: ${isEnrolled}`);
            
            // Create rent expense
            if (applicableEntry.rent > 0) {
                const rentExpenseData = {
                    date: new Date(currentYear, month - 1, 1),
                    category: 'Rent',
                    amount: applicableEntry.rent,
                    notes: baseNotes,
                    isQualified: isQualified
                };
                await createExpense(rentExpenseData);
            }

            // Create utilities expense if not included in rent and amount is not 0
            if (!applicableEntry.utilitiesIncluded && applicableEntry.utilities > 0) {
                const utilitiesExpenseData = {
                    date: new Date(currentYear, month - 1, 1),
                    category: 'Utilities',
                    amount: applicableEntry.utilities,
                    notes: baseNotes,
                    isQualified: isQualified
                };
                await createExpense(utilitiesExpenseData);
            }

            // Create WiFi expense if amount is not 0
            if (applicableEntry.wifi > 0) {
                const wifiExpenseData = {
                    date: new Date(currentYear, month - 1, 1),
                    category: 'WiFi',
                    amount: applicableEntry.wifi,
                    notes: baseNotes,
                    isQualified: isQualified
                };
                await createExpense(wifiExpenseData);
            }
        }
        
        console.log('=== EXPENSES SUBMISSION: All housing expenses created successfully ===');
    } catch (error) {
        console.error('=== EXPENSES SUBMISSION: Error ===', error);
        throw error;
    }
}

// Submit grocery expenses for enrolled months
async function submitGroceryExpenses(enrolledMonths, monthlyGrocery = 200) {
    console.log('=== EXPENSES SUBMISSION: Starting grocery expenses ===');
    console.log('Enrolled months:', enrolledMonths);
    console.log('Monthly grocery amount:', monthlyGrocery);
    
    const currentYear = new Date().getFullYear();
    
    try {
        for (let month = 1; month <= 12; month++) {
            const isEnrolled = enrolledMonths.includes(month);
            
            if (isEnrolled && monthlyGrocery > 0) {
                const groceryExpenseData = {
                    date: new Date(currentYear, month - 1, 1),
                    category: 'Groceries',
                    amount: monthlyGrocery,
                    notes: 'Onboarding expense',
                    isQualified: true
                };
                await createExpense(groceryExpenseData);
            }
        }
        
        console.log('=== EXPENSES SUBMISSION: All grocery expenses created successfully ===');
    } catch (error) {
        console.error('=== EXPENSES SUBMISSION: Error creating grocery expenses ===', error);
        throw error;
    }
}

// Submit all onboarding expenses (housing + groceries)
async function submitAllOnboardingExpenses(housingEntries, enrolledMonths, monthlyGrocery = 200) {
    console.log('=== EXPENSES SUBMISSION: Starting all onboarding expenses ===');
    
    try {
        // Submit housing expenses
        await submitHousingExpenses(housingEntries, enrolledMonths);
        
        // Submit grocery expenses
        await submitGroceryExpenses(enrolledMonths, monthlyGrocery);
        
        console.log('=== EXPENSES SUBMISSION: All onboarding expenses completed successfully ===');
    } catch (error) {
        console.error('=== EXPENSES SUBMISSION: Error in onboarding expenses ===', error);
        throw error;
    }
}

// Export functions for global access
window.expensesSubmission = {
    createExpense,
    submitHousingExpenses,
    submitGroceryExpenses,
    submitAllOnboardingExpenses
}; 