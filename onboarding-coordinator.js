// Onboarding Coordinator Script
// Orchestrates the complete onboarding flow: account creation + data submission

// Main function to handle complete onboarding submission
async function submitCompleteOnboarding(formData, housingEntries, calculatedBenefit) {
    console.log('=== ONBOARDING COORDINATOR: Starting complete submission ===');
    console.log('Form data:', JSON.parse(JSON.stringify(formData)));
    console.log('Housing entries:', JSON.parse(JSON.stringify(housingEntries)));
    console.log('Calculated benefit:', calculatedBenefit);

    let submissionResults = {
        accountCreated: false,
        profileSubmitted: false,
        sensitiveDataSubmitted: false,
        expensesSubmitted: false,
        errors: []
    };

    try {
        // Verify we have an auth token (account should be created by this point)
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
            throw new Error('No authentication token found. Account must be created first.');
        }
        submissionResults.accountCreated = true;

        // Step 1: Submit profile data
        console.log('=== COORDINATOR: Step 1 - Submitting profile data ===');
        try {
            await window.profileSubmission.submitUserProfile(formData, calculatedBenefit);
            submissionResults.profileSubmitted = true;
            console.log('=== COORDINATOR: Profile submission successful ===');
        } catch (error) {
            console.error('=== COORDINATOR: Profile submission failed ===', error);
            submissionResults.errors.push(`Profile submission failed: ${error.message}`);
            // Continue with other submissions even if profile fails
        }

        // Step 2: Submit sensitive data (SSN, address, etc.)
        console.log('=== COORDINATOR: Step 2 - Submitting sensitive data ===');
        try {
            const sensitiveDataPayload = {
                ssn: formData.ssn,
                firstName: formData.firstName,
                lastName: formData.lastName,
                dateOfBirth: formData.dateOfBirth,
                phoneNumber: formData.phoneNumber,
                streetAddress: formData.streetAddress,
                address2: formData.address2,
                city: formData.city,
                state: formData.state,
                zipCode: formData.zipCode,
                school: formData.school
            };
            
            // Use the SSN integration script
            if (window.submitSensitiveData) {
                await window.submitSensitiveData(sensitiveDataPayload);
                submissionResults.sensitiveDataSubmitted = true;
                console.log('=== COORDINATOR: Sensitive data submission successful ===');
            } else {
                throw new Error('SSN integration script not loaded');
            }
        } catch (error) {
            console.error('=== COORDINATOR: Sensitive data submission failed ===', error);
            submissionResults.errors.push(`Sensitive data submission failed: ${error.message}`);
            // Continue with expense submission
        }

        // Step 3: Submit all expenses (housing + groceries)
        console.log('=== COORDINATOR: Step 3 - Checking expense creation status ===');
        try {
            // Check if expenses were already created during onboarding
            const expensesAlreadyCreated = localStorage.getItem('onboardingExpensesCreated');
            console.log('=== COORDINATOR: onboardingExpensesCreated flag value:', expensesAlreadyCreated);
            
            if (expensesAlreadyCreated === 'true') {
                console.log('=== COORDINATOR: Expenses already created during onboarding, skipping legacy creation ===');
                submissionResults.expensesSubmitted = true;
            } else {
                console.log('=== COORDINATOR: Flag not set, expenses were not created during onboarding ===');
                console.log('=== COORDINATOR: WARNING - This should not happen with new onboarding flow ===');
                
                // This should NOT happen with the new onboarding flow
                // Log detailed information for debugging
                console.log('=== COORDINATOR: Debugging info ===');
                console.log('localStorage contents:', Object.keys(localStorage));
                console.log('onboardingExpensesCreated:', localStorage.getItem('onboardingExpensesCreated'));
                console.log('formData:', formData);
                console.log('housingEntries:', housingEntries);
                
                // Don't create expenses in the legacy way to avoid duplicates
                // Instead, mark as failed so we can investigate
                submissionResults.expensesSubmitted = false;
                submissionResults.errors.push('Expenses were not created during onboarding - investigation needed');
                console.log('=== COORDINATOR: Skipping legacy expense creation to avoid duplicates ===');
            }
        } catch (error) {
            console.error('=== COORDINATOR: Expenses status check failed ===', error);
            submissionResults.errors.push(`Expenses status check failed: ${error.message}`);
            submissionResults.expensesSubmitted = false;
        }

        // Store additional data in localStorage
        localStorage.setItem('onboardingData', JSON.stringify(formData));
        localStorage.setItem('housingEntries', JSON.stringify(housingEntries));
        localStorage.setItem('calculatedBenefit', JSON.stringify(calculatedBenefit));

        console.log('=== ONBOARDING COORDINATOR: Submission completed ===');
        console.log('Results:', submissionResults);
        
        return submissionResults;

    } catch (error) {
        console.error('=== ONBOARDING COORDINATOR: Critical error ===', error);
        submissionResults.errors.push(`Critical error: ${error.message}`);
        throw error;
    }
}

// Function to handle account creation and then data submission
async function createAccountAndSubmitData(email, password, isGoogleAuth = false, googleCredential = null) {
    console.log('=== ONBOARDING COORDINATOR: Account creation and data submission ===');
    
    try {
        let accountResult;
        
        if (isGoogleAuth && googleCredential) {
            // Create account with Google
            accountResult = await window.accountCreation.createAccountWithGoogle(googleCredential);
        } else {
            // Try to create account with email/password first
            try {
                accountResult = await window.accountCreation.createAccountWithEmailPassword(email, password);
            } catch (createError) {
                console.log('Account creation failed, attempting sign-in:', createError.message);
                // If creation fails, try signing in (account might already exist)
                if (createError.message.includes('already exists') || createError.message.includes('duplicate')) {
                    accountResult = await window.accountCreation.signInWithEmailPassword(email, password);
                } else {
                    throw createError;
                }
            }
        }

        if (accountResult.success) {
            console.log('Account creation/sign-in successful');
            
            // Get the stored data for submission
            const storedData = localStorage.getItem('onboardingFormData');
            const storedHousing = localStorage.getItem('onboardingHousingEntries');
            const storedBenefit = localStorage.getItem('onboardingCalculatedBenefit');
            
            if (storedData && storedHousing) {
                const formData = JSON.parse(storedData);
                const housingEntries = JSON.parse(storedHousing);
                const calculatedBenefit = storedBenefit ? JSON.parse(storedBenefit) : null;
                
                // Now submit all the collected data
                const submissionResults = await submitCompleteOnboarding(formData, housingEntries, calculatedBenefit);
                
                return {
                    accountCreated: true,
                    dataSubmitted: true,
                    submissionResults: submissionResults,
                    token: accountResult.token
                };
            } else {
                throw new Error('No onboarding data found in storage');
            }
        } else {
            throw new Error('Account creation failed');
        }
        
    } catch (error) {
        console.error('=== COORDINATOR: Account creation and data submission failed ===', error);
        throw error;
    }
}

// Google Sign-In callback handler
async function handleGoogleSignInCallback(response) {
    try {
        console.log('Handling Google Sign-In callback');
        return await createAccountAndSubmitData(null, null, true, response.credential);
    } catch (error) {
        console.error('Google Sign-In callback error:', error);
        throw error;
    }
}

// Export functions for global access
window.onboardingCoordinator = {
    submitCompleteOnboarding,
    createAccountAndSubmitData,
    handleGoogleSignInCallback
}; 