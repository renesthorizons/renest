// Array to store housing entries
let housingEntries = [];

// Housing Information Modal
function openHousingModal(entryToEdit = null) {
    // If entryToEdit is provided, we're in edit mode
    const isEditMode = entryToEdit !== null;
    
    // Set modal title based on mode
    document.getElementById('housingModalTitle').textContent = isEditMode ? 'Edit Housing Information' : 'Add Housing Information';
    
    // Reset or populate form fields based on mode
    if (isEditMode) {
        // Populate with existing entry data
        document.getElementById('leaseStartMonth').value = entryToEdit.startMonth;
        document.getElementById('leaseStartYear').value = entryToEdit.startYear;
        document.getElementById('leaseEndMonth').value = entryToEdit.endMonth;
        document.getElementById('leaseEndYear').value = entryToEdit.endYear;
        document.getElementById('monthlyRent').value = '$' + entryToEdit.rent.toLocaleString('en-US');
        document.getElementById('utilities').value = entryToEdit.utilities > 0 ? '$' + entryToEdit.utilities.toLocaleString('en-US') : '';
        document.getElementById('wifi').value = entryToEdit.wifi > 0 ? '$' + entryToEdit.wifi.toLocaleString('en-US') : '';
        document.getElementById('utilitiesIncluded').checked = entryToEdit.utilitiesIncluded;
        
        // Store the ID of the entry being edited
        document.getElementById('housingModal').dataset.editEntryId = entryToEdit.id;
        
        // Change save button text
        document.getElementById('saveHousingBtn').textContent = 'Update Housing Info';
    } else {
        // Default values for new entry
        document.getElementById('leaseStartMonth').value = new Date().getMonth() + 1;
        document.getElementById('leaseStartYear').value = new Date().getFullYear();
        document.getElementById('leaseEndMonth').value = new Date().getMonth() + 1;
        document.getElementById('leaseEndYear').value = new Date().getFullYear() + 1;
        document.getElementById('monthlyRent').value = '';
        document.getElementById('utilities').value = '';
        document.getElementById('wifi').value = '';
        document.getElementById('utilitiesIncluded').checked = false;
        
        // Clear any stored entry ID
        delete document.getElementById('housingModal').dataset.editEntryId;
        
        // Reset save button text
        document.getElementById('saveHousingBtn').textContent = 'Save Housing Info';
    }
    
    // Show the modal
    document.getElementById('housingModal').classList.remove('hidden');
}

function closeHousingModal() {
    document.getElementById('housingModal').classList.add('hidden');
}

function saveHousingInfo() {
    const startMonth = parseInt(document.getElementById('leaseStartMonth').value);
    const startYear = parseInt(document.getElementById('leaseStartYear').value);
    const endMonth = parseInt(document.getElementById('leaseEndMonth').value);
    const endYear = parseInt(document.getElementById('leaseEndYear').value);
    const rent = document.getElementById('monthlyRent').value.replace(/[^\d]/g, '') || '0';
    const utilities = document.getElementById('utilities').value.replace(/[^\d]/g, '') || '0';
    const wifi = document.getElementById('wifi').value.replace(/[^\d]/g, '') || '0';
    const utilitiesIncluded = document.getElementById('utilitiesIncluded').checked;
    
    // Validate
    if (parseInt(rent) === 0) {
        showError('Please enter a valid rent amount');
        return;
    }
    
    // Validate dates - end date must be after start date
    const startDate = new Date(startYear, startMonth - 1, 1);
    const endDate = new Date(endYear, endMonth - 1, 1);
    
    if (endDate <= startDate) {
        showError('Lease end date must be after start date');
        return;
    }
    
    // Check if we're in edit mode
    const modal = document.getElementById('housingModal');
    const editEntryId = modal.dataset.editEntryId;
    const isEditMode = editEntryId !== undefined;
    
    // If editing, don't check for overlap with the entry being edited
    if (!isEditMode && hasOverlappingPeriods(startMonth, startYear, endMonth, endYear)) {
        showError('This housing period overlaps with an existing entry');
        return;
    }
    
    // Create or update housing entry
    const housingEntry = {
        id: isEditMode ? parseInt(editEntryId) : Date.now(), // Use existing ID or create new one
        startMonth,
        startYear,
        endMonth,
        endYear,
        rent: parseFloat(rent),
        utilities: parseFloat(utilities),
        wifi: parseFloat(wifi),
        utilitiesIncluded
    };
    
    if (isEditMode) {
        // Find and update the existing entry
        const entryIndex = housingEntries.findIndex(entry => entry.id === parseInt(editEntryId));
        if (entryIndex !== -1) {
            // Check if the updated entry would overlap with others
            const otherEntries = housingEntries.filter((_, index) => index !== entryIndex);
            if (hasOverlappingPeriodsWithEntries(startMonth, startYear, endMonth, endYear, otherEntries)) {
                showError('This edited housing period would overlap with another entry');
                return;
            }
            
            housingEntries[entryIndex] = housingEntry;
        }
    } else {
        // Add as new entry
        housingEntries.push(housingEntry);
    }
    
    // Update UI
    updateHousingEntriesList();
    
    // Close modal
    closeHousingModal();
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = isEditMode ? 'Housing information updated!' : 'Housing information added!';
    document.body.appendChild(successMessage);
    setTimeout(() => successMessage.remove(), 3000);
}

function hasOverlappingPeriods(startMonth, startYear, endMonth, endYear) {
    return hasOverlappingPeriodsWithEntries(startMonth, startYear, endMonth, endYear, housingEntries);
}

function hasOverlappingPeriodsWithEntries(startMonth, startYear, endMonth, endYear, entries) {
    // Convert to date objects for easier comparison
    const newStartDate = new Date(startYear, startMonth - 1, 1);
    const newEndDate = new Date(endYear, endMonth - 1, 1);
    
    return entries.some(entry => {
        const existingStartDate = new Date(entry.startYear, entry.startMonth - 1, 1);
        const existingEndDate = new Date(entry.endYear, entry.endMonth - 1, 1);
        
        // Check if periods overlap
        return (newStartDate < existingEndDate && newEndDate > existingStartDate);
    });
}

function editHousingEntry(id) {
    const entry = housingEntries.find(entry => entry.id === id);
    if (entry) {
        openHousingModal(entry);
    }
}

function updateHousingEntriesList() {
    const container = document.getElementById('housingEntriesContainer');
    
    // Clear existing entries
    container.innerHTML = '';
    
    // Sort entries by start date
    housingEntries.sort((a, b) => {
        const dateA = new Date(a.startYear, a.startMonth - 1, 1);
        const dateB = new Date(b.startYear, b.startMonth - 1, 1);
        return dateA - dateB;
    });
    
    // Create entry elements
    housingEntries.forEach(entry => {
        const entryElement = document.createElement('div');
        entryElement.className = 'housing-entry';
        entryElement.style.border = '1px solid var(--border)';
        entryElement.style.borderRadius = '0.5rem';
        entryElement.style.padding = '1rem';
        entryElement.style.marginBottom = '1rem';
        entryElement.style.position = 'relative';
        
        // Format months as names
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const startMonthName = monthNames[entry.startMonth - 1];
        const endMonthName = monthNames[entry.endMonth - 1];
        
        // Format currency
        const formatCurrencyValue = value => '$' + value.toLocaleString('en-US');
        
        entryElement.innerHTML = `
            <div style="margin-bottom: 0.5rem; font-weight: 600; color: var(--primary);">
                ${startMonthName} ${entry.startYear} - ${endMonthName} ${entry.endYear}
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                <span>Rent:</span>
                <span>${formatCurrencyValue(entry.rent)}/month</span>
            </div>
            ${!entry.utilitiesIncluded && entry.utilities > 0 ? `
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                    <span>Utilities:</span>
                    <span>${formatCurrencyValue(entry.utilities)}/month</span>
                </div>
            ` : ''}
            ${entry.wifi > 0 ? `
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                    <span>WiFi:</span>
                    <span>${formatCurrencyValue(entry.wifi)}/month</span>
                </div>
            ` : ''}
            <div style="position: absolute; top: 0.5rem; right: 0.5rem; display: flex; gap: 0.5rem;">
                <button class="edit-entry-button" onclick="editHousingEntry(${entry.id})" style="background: none; border: none; cursor: pointer; color: var(--primary); font-size: 1rem;">Edit</button>
                <button class="remove-entry-button" onclick="removeHousingEntry(${entry.id})" style="background: none; border: none; cursor: pointer; color: #666; font-size: 1.2rem;">×</button>
            </div>
        `;
        
        container.appendChild(entryElement);
    });
    
    // Check if there's coverage for all months in the current year
    const currentYear = new Date().getFullYear();
    const uncoveredMonths = getUncoveredMonths(currentYear);
    
    if (uncoveredMonths.length > 0) {
        const missingMonthsElement = document.createElement('div');
        missingMonthsElement.className = 'missing-months-alert';
        missingMonthsElement.style.marginTop = '1rem';
        missingMonthsElement.style.padding = '0.75rem';
        missingMonthsElement.style.backgroundColor = 'rgba(255, 237, 213, 0.5)';
        missingMonthsElement.style.borderLeft = '4px solid #F97316';
        missingMonthsElement.style.borderRadius = '0.25rem';
        
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const missingMonthsText = uncoveredMonths.map(month => monthNames[month - 1]).join(', ');
        
        missingMonthsElement.innerHTML = `
            <p style="margin: 0; color: #7C2D12; font-size: 0.9rem;">
                <strong>Note:</strong> The following months have no housing information: ${missingMonthsText}.
            </p>
        `;
        
        container.appendChild(missingMonthsElement);
    }
}

// Get months that aren't covered by any housing entry for a specific year
function getUncoveredMonths(year) {
    const uncoveredMonths = [];
    
    // Check each month
    for (let month = 1; month <= 12; month++) {
        const thisMonth = new Date(year, month - 1, 1);
        
        // Check if this month is covered by any housing entry
        const isCovered = housingEntries.some(entry => {
            const startDate = new Date(entry.startYear, entry.startMonth - 1, 1);
            const endDate = new Date(entry.endYear, entry.endMonth - 1, 1);
            return thisMonth >= startDate && thisMonth < endDate;
        });
        
        if (!isCovered) {
            uncoveredMonths.push(month);
        }
    }
    
    return uncoveredMonths;
}

function removeHousingEntry(id) {
    housingEntries = housingEntries.filter(entry => entry.id !== id);
    updateHousingEntriesList();
    
    // Show removal message
    const message = document.createElement('div');
    message.className = 'success-message';
    message.textContent = 'Housing entry removed';
    document.body.appendChild(message);
    setTimeout(() => message.remove(), 3000);
}

// Modify form validation to check for housing entries
function validateHousingStep3() {
    const enrolledMonths = Array.from(document.querySelectorAll('input[name="enrolledMonths"]:checked'))
        .map(checkbox => parseInt(checkbox.value));

    if (enrolledMonths.length === 0) {
        showError('Please select at least one enrolled month');
        return false;
    }
    
    if (housingEntries.length === 0) {
        showError('Please add at least one housing entry');
        return false;
    }

    return true;
}

// Function to add expenses from housing entries
async function addHousingEntryExpenses(housingEntries, enrolledMonths) {
    console.log('===== ADDING HOUSING EXPENSES =====');
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
                
                return thisMonth >= startDate && thisMonth < endDate;
            });
            
            // Skip if no housing entry covers this month
            if (!applicableEntry) {
                continue;
            }
            
            // Create expenses based on the applicable housing entry
            if (applicableEntry.rent > 0) {
                console.log(`Creating rent expense for month ${month}`);
                const rentExpenseData = {
                    date: new Date(currentYear, month - 1, 1),
                    category: 'Rent',
                    amount: applicableEntry.rent,
                    notes: baseNotes,
                    isQualified: isQualified
                };
                console.log('Rent expense data:', rentExpenseData);
                await createExpense(rentExpenseData);
            }

            // Create utilities expense if not included in rent and amount is not 0
            if (!applicableEntry.utilitiesIncluded && applicableEntry.utilities > 0) {
                console.log(`Creating utilities expense for month ${month}`);
                const utilitiesExpenseData = {
                    date: new Date(currentYear, month - 1, 1),
                    category: 'Utilities',
                    amount: applicableEntry.utilities,
                    notes: baseNotes,
                    isQualified: isQualified
                };
                console.log('Utilities expense data:', utilitiesExpenseData);
                await createExpense(utilitiesExpenseData);
            }

            // Create WiFi expense if amount is not 0
            if (applicableEntry.wifi > 0) {
                console.log(`Creating WiFi expense for month ${month}`);
                const wifiExpenseData = {
                    date: new Date(currentYear, month - 1, 1),
                    category: 'WiFi',
                    amount: applicableEntry.wifi,
                    notes: baseNotes,
                    isQualified: isQualified
                };
                console.log('WiFi expense data:', wifiExpenseData);
                await createExpense(wifiExpenseData);
            }
        }
    } catch (error) {
        console.error('Error in addHousingEntryExpenses:', error);
        console.error('Error stack:', error.stack);
        throw error;
    }
}

// Function to calculate benefit with multiple housing entries
function calculateBenefitWithMultipleHousing(state, income, enrolledMonths, housingEntries) {
    const currentYear = new Date().getFullYear();
    
    // Calculate total qualified expenses for the year
    let totalQualifiedExpenses = 0;
    const monthlyGrocery = 325; // Fixed amount for groceries
    
    // For each month, check if it's enrolled and has housing
    for (let month = 1; month <= 12; month++) {
        // Skip if not enrolled this month
        if (!enrolledMonths.includes(month)) {
            continue;
        }
        
        // Add grocery expense for enrolled months
        totalQualifiedExpenses += monthlyGrocery;
        
        // Find applicable housing entry for this month
        const applicableEntry = housingEntries.find(entry => {
            const startDate = new Date(entry.startYear, entry.startMonth - 1, 1);
            const endDate = new Date(entry.endYear, entry.endMonth - 1, 1);
            const thisMonth = new Date(currentYear, month - 1, 1);
            
            return thisMonth >= startDate && thisMonth < endDate;
        });
        
        // If housing applies for this month, add those expenses
        if (applicableEntry) {
            totalQualifiedExpenses += applicableEntry.rent;
            
            if (!applicableEntry.utilitiesIncluded) {
                totalQualifiedExpenses += applicableEntry.utilities;
            }
            
            totalQualifiedExpenses += applicableEntry.wifi;
        }
    }
    
    // Get state-specific deductions and tax info
    const stateTaxDeduction = statePersonalExemptionDB[state]?.amount || 0;
    const stateDeduction = state529DB[state]?.deduction || 0;
    const taxableStateIncome = Number(income) - stateTaxDeduction;
    const taxRate = calculateStateTaxRate(taxableStateIncome, state);
    
    // Calculate deductible amount
    const deductibleAmount = Math.min(
        totalQualifiedExpenses,  // Actual expenses during enrolled months
        stateDeduction,  // State's max deduction
        taxableStateIncome  // Limit to income if it's less than the deduction
    );
    const taxespaid = taxRate * taxableStateIncome;
    
    // Calculate benefit based on state rules
    let benefit;
    if (state === 'IN') {
        const contributionCredit = deductibleAmount * 0.20;
        benefit = Math.min(contributionCredit, 1500, taxespaid);
    } else if (state === 'OR') {
        benefit = 180;
    } else if (state === 'MN') {
        if (income < 88810) {
            benefit = Math.min(500, taxespaid, .5*totalQualifiedExpenses);
        } else {
            benefit = 0;
        }
    } else {
        benefit = Math.min(deductibleAmount * taxRate, taxespaid);
    }
    return benefit;
}

// Initialize the housing functionality when DOM is ready
function initializeHousingSystem() {
    // Make sure the year dropdowns for housing info are populated
    populateHousingYearDropdowns();
    
    // Add event listener for the Add Housing Information button
    document.getElementById('addHousingButton').addEventListener('click', openHousingModal);
    
    // Initialize the housing entries list
    updateHousingEntriesList();
    
    // Add currency formatting to housing input fields
    const housingRentInput = document.getElementById('monthlyRent');
    const housingUtilitiesInput = document.getElementById('utilities');
    const housingWifiInput = document.getElementById('wifi');
    
    if (housingRentInput) {
        housingRentInput.addEventListener('input', function() {
            formatCurrency(this);
        });
    }
    
    if (housingUtilitiesInput) {
        housingUtilitiesInput.addEventListener('input', function() {
            formatCurrency(this);
        });
    }
    
    if (housingWifiInput) {
        housingWifiInput.addEventListener('input', function() {
            formatCurrency(this);
        });
    }
}

// Populate the year dropdowns for the housing form
function populateHousingYearDropdowns() {
    const currentYear = new Date().getFullYear();
    const yearRange = 10; // Allow 10 years before and after current year
    
    // Create options for a range of years
    let yearOptions = '';
    for (let year = currentYear - yearRange; year <= currentYear + yearRange; year++) {
        yearOptions += `<option value="${year}">${year}</option>`;
    }
    
    // Populate lease start year dropdown
    const leaseStartYearSelect = document.getElementById('leaseStartYear');
    if (leaseStartYearSelect) {
        leaseStartYearSelect.innerHTML = yearOptions;
        leaseStartYearSelect.value = currentYear; // Default to current year
    }
    
    // Populate lease end year dropdown
    const leaseEndYearSelect = document.getElementById('leaseEndYear');
    if (leaseEndYearSelect) {
        leaseEndYearSelect.innerHTML = yearOptions;
        leaseEndYearSelect.value = currentYear + 1; // Default to next year
    }
}

// Show error message
function showError(message) {
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.textContent = message;
    document.body.appendChild(errorMessage);
    setTimeout(() => errorMessage.remove(), 3000);
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initializeHousingSystem); 