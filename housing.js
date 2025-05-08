// Array to store housing entries
// Check if housingEntries is already defined to avoid redeclaration
if (typeof housingEntries === 'undefined') {
    var housingEntries = [];
}

// Debug function to help diagnose housing modal issues
window.debugHousingSystem = function() {
    console.log('==== HOUSING SYSTEM DEBUG ====');
    
    // Check if housing.js functions are accessible
    console.log('Function check:');
    console.log('- openHousingModal exists:', typeof openHousingModal === 'function');
    console.log('- closeHousingModal exists:', typeof closeHousingModal === 'function');
    console.log('- initializeHousingSystem exists:', typeof initializeHousingSystem === 'function');
    
    // Check Add Housing Information button
    const addHousingButton = document.getElementById('addHousingButton');
    console.log('Add Housing Button:', addHousingButton ? 'Found' : 'Not found');
    
    if (addHousingButton) {
        // Check if it has event listeners
        console.log('Button has onclick attribute:', addHousingButton.hasAttribute('onclick'));
        console.log('Button onclick value:', addHousingButton.getAttribute('onclick'));
        
        // Try attaching a debug listener
        console.log('Attaching debug click handler to button');
        addHousingButton.addEventListener('click', function() {
            console.log('Button clicked (debug handler)');
            
            // Try manually opening the modal
            if (typeof openHousingModal === 'function') {
                console.log('Calling openHousingModal directly');
                openHousingModal();
            } else {
                console.error('openHousingModal function not found');
            }
        });
    }
    
    // Check housing modal
    const housingModal = document.getElementById('housingModal');
    console.log('Housing Modal:', housingModal ? 'Found' : 'Not found');
    
    if (housingModal) {
        console.log('Modal visible:', !housingModal.classList.contains('hidden'));
    }
    
    // Manually try to initialize system
    console.log('Manually calling initializeHousingSystem');
    initializeHousingSystem();
    
    return "Debug complete - check console for results";
};

// Housing Information Modal
function openHousingModal(entryToEdit = null) {
    console.log('Opening housing modal with entryToEdit:', entryToEdit);
    
    // Get modal elements
    const modal = document.getElementById('housingModal');
    const modalTitle = document.getElementById('housingModalTitle');
    const saveButton = document.getElementById('saveHousingBtn');
    
    // Get form elements
    const leaseStartMonth = document.getElementById('leaseStartMonth');
    const leaseStartYear = document.getElementById('leaseStartYear');
    const leaseEndMonth = document.getElementById('leaseEndMonth');
    const leaseEndYear = document.getElementById('leaseEndYear');
    const monthlyRent = document.getElementById('monthlyRent');
    const utilities = document.getElementById('utilities');
    const wifi = document.getElementById('wifi');
    const utilitiesIncluded = document.getElementById('utilitiesIncluded');
    
    // Check if all elements exist
    if (!modal || !modalTitle || !saveButton || !leaseStartMonth || !leaseStartYear || 
        !leaseEndMonth || !leaseEndYear || !monthlyRent || !utilities || 
        !wifi || !utilitiesIncluded) {
        console.error('Modal elements not found', {
            modal, modalTitle, saveButton, leaseStartMonth, leaseStartYear,
            leaseEndMonth, leaseEndYear, monthlyRent, utilities,
            wifi, utilitiesIncluded
        });
        return;
    }
    
    console.log('Form elements before setting values:', {
        leaseStartMonth: leaseStartMonth.value,
        leaseStartYear: leaseStartYear.value,
        leaseEndMonth: leaseEndMonth.value,
        leaseEndYear: leaseEndYear.value
    });
    
    // Always populate year dropdowns first, regardless of edit mode
    populateHousingYearDropdowns();
    
    console.log('Start year options after populating:', leaseStartYear.options.length);
    console.log('End year options after populating:', leaseEndYear.options.length);
    
    // If entryToEdit is provided, we're in edit mode
    const isEditMode = entryToEdit !== null;
    
    // Set modal title based on mode
    modalTitle.textContent = isEditMode ? 'Edit Housing Information' : 'Add Housing Information';
    
    // Reset or populate form fields based on mode
    if (isEditMode) {
        console.log('Populating edit form with entry:', entryToEdit);
        // Populate with existing entry data
        leaseStartMonth.value = entryToEdit.startMonth;
        
        // Ensure the value exists in the options
        if (Array.from(leaseStartYear.options).some(option => parseInt(option.value) === entryToEdit.startYear)) {
            leaseStartYear.value = entryToEdit.startYear;
        } else {
            console.warn('Start year value not found in options:', entryToEdit.startYear);
            // Add the option if it doesn't exist
            const option = document.createElement('option');
            option.value = entryToEdit.startYear;
            option.textContent = entryToEdit.startYear;
            leaseStartYear.appendChild(option);
            leaseStartYear.value = entryToEdit.startYear;
        }
        
        leaseEndMonth.value = entryToEdit.endMonth;
        
        // Ensure the value exists in the options
        if (Array.from(leaseEndYear.options).some(option => parseInt(option.value) === entryToEdit.endYear)) {
            leaseEndYear.value = entryToEdit.endYear;
        } else {
            console.warn('End year value not found in options:', entryToEdit.endYear);
            // Add the option if it doesn't exist
            const option = document.createElement('option');
            option.value = entryToEdit.endYear;
            option.textContent = entryToEdit.endYear;
            leaseEndYear.appendChild(option);
            leaseEndYear.value = entryToEdit.endYear;
        }
        
        monthlyRent.value = '$' + entryToEdit.rent.toLocaleString('en-US');
        utilities.value = entryToEdit.utilities > 0 ? '$' + entryToEdit.utilities.toLocaleString('en-US') : '';
        wifi.value = entryToEdit.wifi > 0 ? '$' + entryToEdit.wifi.toLocaleString('en-US') : '';
        utilitiesIncluded.checked = entryToEdit.utilitiesIncluded;
        
        // Store the ID of the entry being edited
        modal.dataset.editEntryId = entryToEdit.id;
        
        // Change save button text
        saveButton.textContent = 'Update Housing Info';
    } else {
        // Default values for new entry
        leaseStartMonth.value = new Date().getMonth() + 1;
        
        // Set default years - current year for start and next year for end
        const currentYear = new Date().getFullYear();
        leaseStartYear.value = currentYear;
        leaseEndYear.value = currentYear + 1;
        
        // Continue with other defaults
        monthlyRent.value = '';
        utilities.value = '';
        wifi.value = '';
        utilitiesIncluded.checked = false;
        
        // Clear any stored entry ID
        delete modal.dataset.editEntryId;
        
        // Reset save button text
        saveButton.textContent = 'Save Housing Info';
    }
    
    console.log('Form elements after setting values:', {
        leaseStartMonth: leaseStartMonth.value,
        leaseStartYear: leaseStartYear.value,
        leaseEndMonth: leaseEndMonth.value,
        leaseEndYear: leaseEndYear.value
    });
    
    // Show the modal
    modal.classList.remove('hidden');
}

function closeHousingModal() {
    document.getElementById('housingModal').classList.add('hidden');
}

function saveHousingInfo() {
    console.log('Saving housing info...');
    const startMonth = parseInt(document.getElementById('leaseStartMonth').value);
    const startYear = parseInt(document.getElementById('leaseStartYear').value);
    const endMonth = parseInt(document.getElementById('leaseEndMonth').value);
    const endYear = parseInt(document.getElementById('leaseEndYear').value);
    
    console.log('Housing dates before validation:', {
        startMonth,
        startYear,
        endMonth,
        endYear
    });
    
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
    
    console.log('Saving housing entry:', housingEntry);
    
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
    
    // Exit if container is not found
    if (!container) {
        console.error('Housing entries container not found');
        return;
    }
    
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

// Function to set up mutation observer for monitoring dropdowns
function monitorHousingDropdowns() {
    console.log('Setting up dropdown monitors');
    
    // Get the select elements
    const leaseStartYear = document.getElementById('leaseStartYear');
    const leaseEndYear = document.getElementById('leaseEndYear');
    
    if (!leaseStartYear || !leaseEndYear) {
        console.error('Cannot monitor dropdowns - elements not found');
        return;
    }
    
    // Create a direct change event handler for leaseStartYear to debug
    leaseStartYear.onchange = function() {
        console.log('START YEAR CHANGED via onchange to:', this.value);
    };
    
    leaseStartYear.addEventListener('change', function() {
        console.log('START YEAR CHANGED via addEventListener to:', this.value);
    }, true);
    
    // Also monitor for click events on the options
    leaseStartYear.addEventListener('click', function() {
        console.log('Lease start year clicked');
        
        // Force refresh options after a slight delay
        setTimeout(() => {
            console.log('Current value:', this.value);
        }, 100);
    });
    
    // Try mousedown event
    leaseStartYear.addEventListener('mousedown', function() {
        console.log('Lease start year mousedown');
    });
    
    // Monitor for any attribute changes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            console.log('Dropdown mutation detected:', mutation.type, mutation.target.id);
            
            // Check if it's a value change
            if (mutation.type === 'attributes' && mutation.attributeName === 'value') {
                console.log('Value changed to:', mutation.target.value);
            }
        });
    });
    
    // Start observing the dropdowns
    observer.observe(leaseStartYear, { attributes: true, childList: true });
    observer.observe(leaseEndYear, { attributes: true, childList: true });
    
    console.log('Dropdown monitors set up');
    
    // Return observer to stop it later if needed
    return observer;
}

// Update the initializeHousingSystem function
function initializeHousingSystem() {
    console.log('Initializing housing system');
    
    // Make sure the year dropdowns for housing info are populated
    populateHousingYearDropdowns();
    
    // Set up dropdown monitors
    monitorHousingDropdowns();
    
    // Add event listener for the Add Housing Information button
    const addHousingButton = document.getElementById('addHousingButton');
    if (addHousingButton) {
        console.log('Setting up add housing button event listener');
        addHousingButton.addEventListener('click', function() { 
            openHousingModal();
        });
    } else {
        console.error('Add housing button not found');
    }
    
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
    
    // Manually initialize lease date dropdowns in case they were already rendered
    const leaseStartYear = document.getElementById('leaseStartYear');
    const leaseEndYear = document.getElementById('leaseEndYear');
    
    if (leaseStartYear && leaseEndYear) {
        console.log('Checking dropdown initialization status');
        
        // If the dropdowns don't have enough options, repopulate them
        if (leaseStartYear.options.length < 5 || leaseEndYear.options.length < 5) {
            console.log('Dropdowns not properly initialized, repopulating');
            populateHousingYearDropdowns();
        } else {
            console.log('Dropdowns already have options:', { 
                startYearOptions: leaseStartYear.options.length,
                endYearOptions: leaseEndYear.options.length
            });
        }
    }
}

// Populate the year dropdowns for the housing form
function populateHousingYearDropdowns() {
    const currentYear = new Date().getFullYear();
    const yearRange = 10; // Allow 10 years before and after current year
    
    console.log('Populating year dropdowns with range:', currentYear - yearRange, 'to', currentYear + yearRange);
    
    // Get the select elements
    const leaseStartYearSelect = document.getElementById('leaseStartYear');
    const leaseEndYearSelect = document.getElementById('leaseEndYear');
    
    // Exit if elements aren't found
    if (!leaseStartYearSelect || !leaseEndYearSelect) {
        console.error('Year select elements not found', { leaseStartYearSelect, leaseEndYearSelect });
        return;
    }
    
    console.log('Before clearing: startYear options:', leaseStartYearSelect.options.length, 'endYear options:', leaseEndYearSelect.options.length);
    
    // Clear existing options
    leaseStartYearSelect.innerHTML = '';
    leaseEndYearSelect.innerHTML = '';
    
    // Create options for a range of years
    for (let year = currentYear - yearRange; year <= currentYear + yearRange; year++) {
        // Create option for start year
        const startOption = document.createElement('option');
        startOption.value = year;
        startOption.textContent = year;
        leaseStartYearSelect.appendChild(startOption);
        
        // Create option for end year
        const endOption = document.createElement('option');
        endOption.value = year;
        endOption.textContent = year;
        leaseEndYearSelect.appendChild(endOption);
    }
    
    console.log('After populating: startYear options:', leaseStartYearSelect.options.length, 'endYear options:', leaseEndYearSelect.options.length);
    
    // Set default values
    leaseStartYearSelect.value = currentYear;
    leaseEndYearSelect.value = currentYear + 1;
    
    console.log('Default values set - startYear:', leaseStartYearSelect.value, 'endYear:', leaseEndYearSelect.value);
    
    // Add event listeners to detect changes
    leaseStartYearSelect.addEventListener('change', function() {
        console.log('Start year changed to:', this.value);
        
        // Ensure end date is not before start date
        const startYear = parseInt(this.value);
        const endYear = parseInt(leaseEndYearSelect.value);
        const startMonth = parseInt(document.getElementById('leaseStartMonth').value);
        const endMonth = parseInt(document.getElementById('leaseEndMonth').value);
        
        if (endYear < startYear || (endYear === startYear && endMonth < startMonth)) {
            // Set end date to be at least a month after start date
            if (startMonth === 12) {
                leaseEndMonth.value = 1;
                leaseEndYearSelect.value = startYear + 1;
            } else {
                leaseEndMonth.value = startMonth + 1;
                leaseEndYearSelect.value = startYear;
            }
            console.log('Adjusted end date to prevent invalid date range');
        }
    });
    
    leaseEndYearSelect.addEventListener('change', function() {
        console.log('End year changed to:', this.value);
        
        // Ensure end date is not before start date
        const startYear = parseInt(leaseStartYearSelect.value);
        const endYear = parseInt(this.value);
        const startMonth = parseInt(document.getElementById('leaseStartMonth').value);
        const endMonth = parseInt(document.getElementById('leaseEndMonth').value);
        
        if (endYear < startYear || (endYear === startYear && endMonth < startMonth)) {
            // Either adjust end month or fallback to previous value
            if (endYear === startYear) {
                document.getElementById('leaseEndMonth').value = startMonth + 1 > 12 ? 12 : startMonth + 1;
                console.log('Adjusted end month to prevent invalid date range');
            } else {
                this.value = startYear;
                console.log('Reset end year to prevent invalid date range');
            }
        }
    });
    
    // Also add event listeners to the month selects
    const leaseStartMonth = document.getElementById('leaseStartMonth');
    const leaseEndMonth = document.getElementById('leaseEndMonth');
    
    if (leaseStartMonth && leaseEndMonth) {
        leaseStartMonth.addEventListener('change', function() {
            console.log('Start month changed to:', this.value);
            
            // Ensure end date is not before start date
            const startYear = parseInt(leaseStartYearSelect.value);
            const endYear = parseInt(leaseEndYearSelect.value);
            const startMonth = parseInt(this.value);
            const endMonth = parseInt(leaseEndMonth.value);
            
            if (endYear === startYear && endMonth < startMonth) {
                leaseEndMonth.value = startMonth;
                console.log('Adjusted end month to prevent invalid date range');
            }
        });
        
        leaseEndMonth.addEventListener('change', function() {
            console.log('End month changed to:', this.value);
            
            // Ensure end date is not before start date
            const startYear = parseInt(leaseStartYearSelect.value);
            const endYear = parseInt(leaseEndYearSelect.value);
            const startMonth = parseInt(leaseStartMonth.value);
            const endMonth = parseInt(this.value);
            
            if (endYear === startYear && endMonth < startMonth) {
                this.value = startMonth;
                console.log('Reset end month to prevent invalid date range');
            }
        });
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

// Also call initialization now in case the DOM is already loaded
// This helps ensure everything works even if the script loads late
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    console.log('DOM already loaded, initializing housing system immediately');
    initializeHousingSystem();
} 