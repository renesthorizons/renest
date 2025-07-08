// Profile Submission Script
// Handles user profile data submission to the profile API

// API URLs
const PROFILE_UPDATE_URL = 'https://jmqfabgm02.execute-api.us-east-2.amazonaws.com/update-profile';

// Submit user profile data
async function submitUserProfile(formData, calculatedBenefit) {
    console.log('=== PROFILE SUBMISSION: Starting ===');
    
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
        throw new Error('No authentication token found');
    }

    // Prepare profile data based on available housing data
    let rentForProfile = '0';
    
    // Try to get rent from housing entries (dashboard format)
    if (window.housingEntries && window.housingEntries[0]) {
        rentForProfile = window.housingEntries[0].rent.toString();
    } 
    // Try to get rent from monthly housing costs (onboarding format)
    else if (window.monthlyHousingCosts) {
        // Calculate average rent from monthly costs
        const months = Object.keys(window.monthlyHousingCosts);
        if (months.length > 0) {
            let totalRent = 0;
            months.forEach(month => {
                totalRent += Number(window.monthlyHousingCosts[month].rent) || 0;
            });
            const avgRent = Math.round(totalRent / months.length);
            rentForProfile = avgRent.toString();
        }
    }
    // Try to get from stored onboarding data
    else {
        const storedHousingCosts = localStorage.getItem('onboardingMonthlyHousingCosts');
        if (storedHousingCosts) {
            const housingCosts = JSON.parse(storedHousingCosts);
            const months = Object.keys(housingCosts);
            if (months.length > 0) {
                let totalRent = 0;
                months.forEach(month => {
                    totalRent += Number(housingCosts[month].rent) || 0;
                });
                const avgRent = Math.round(totalRent / months.length);
                rentForProfile = avgRent.toString();
            }
        }
    }

    const profileData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        dateOfBirth: formData.dateOfBirth,
        school: formData.school,
        state: formData.state, // Student's school state
        income: formData.income,
        monthlyRent: rentForProfile, // From first housing entry
        progressPercentage: 70, // Completion up to "Open 529"
        totalPotentialBenefit: calculatedBenefit ? calculatedBenefit.benefit : 0,
        accountStatus: 'ACTIVE',  
        residency_status: formData.residency_status || 'citizen',
        country_of_origin: formData.country_of_origin || '',
        // Note: SSN and detailed address are NOT sent to this endpoint
        // They are sent to the separate sensitive data API
    };

    console.log('Profile data to submit:', JSON.parse(JSON.stringify(profileData)));

    try {
        const response = await fetch(PROFILE_UPDATE_URL, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profileData)
        });

        console.log('Profile update API response status:', response.status);
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error('Profile update failed:', errorText);
            throw new Error(`Failed to update profile: ${errorText}`);
        }
        
        const result = await response.json();
        console.log('=== PROFILE SUBMISSION: Success ===', result);
        
        // Store key items in localStorage
        localStorage.setItem('monthlyRent', rentForProfile);
        localStorage.setItem('state', formData.state);
        localStorage.setItem('income', formData.income);
        localStorage.setItem('accountStatus', 'ACTIVE');
        localStorage.setItem('progressPercentage', '75');
        
        return result;
    } catch (error) {
        console.error('=== PROFILE SUBMISSION: Error ===', error);
        throw error;
    }
}

// Update profile progress only
async function updateProfileProgress(progressPercentage) {
    console.log(`Updating profile progress to ${progressPercentage}%`);
    
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
        throw new Error('No authentication token found');
    }

    try {
        const response = await fetch(PROFILE_UPDATE_URL, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                progressPercentage: progressPercentage
            })
        });

        if (!response.ok) {
            throw new Error('Failed to update progress');
        }

        console.log('Profile progress updated successfully');
        return await response.json();
    } catch (error) {
        console.error('Error updating profile progress:', error);
        throw error;
    }
}

// Export functions for global access
window.profileSubmission = {
    submitUserProfile,
    updateProfileProgress
}; 