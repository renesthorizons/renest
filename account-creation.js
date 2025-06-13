// Account Creation Script
// Handles both Google Sign-In and email/password account creation

// API URLs from existing files
const GOOGLE_AUTH_URL = 'https://i3tylsqn7i.execute-api.us-east-2.amazonaws.com';
const EMAIL_AUTH_URL = 'https://ff0u1oofme.execute-api.us-east-2.amazonaws.com/';
const SIGNUP_API_URL = 'https://l3p0kf0zgd.execute-api.us-east-2.amazonaws.com';

// Account creation with Google Sign-In
async function createAccountWithGoogle(credential) {
    console.log('Creating account with Google credential...');
    try {
        const result = await fetch(`${GOOGLE_AUTH_URL}/auth/google`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                credential: credential
            })
        });

        const data = await result.json();
        if (data.token) {
            localStorage.setItem('authToken', data.token);
            console.log('Google account creation successful');
            return { success: true, token: data.token };
        } else {
            throw new Error(data.error || 'Google authentication failed');
        }
    } catch (error) {
        console.error('Google account creation error:', error);
        throw new Error(`Google account creation failed: ${error.message}`);
    }
}

// Account creation with email/password
async function createAccountWithEmailPassword(email, password) {
    console.log('Creating account with email/password...');
    
    // Clean the inputs
    email = email.trim().toLowerCase();
    password = password.trim();

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        throw new Error('Please enter a valid email address.');
    }

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,}$/;
    if (!passwordRegex.test(password)) {
        throw new Error('Password must be at least 5 characters long and contain at least one capital letter, one number, and one special character.');
    }

    try {
        const response = await fetch(`${SIGNUP_API_URL}/renest-signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        if (data.token) {
            localStorage.setItem('authToken', data.token);
            console.log('Email/password account creation successful');
            return { success: true, token: data.token };
        } else {
            throw new Error(data.error || 'Account creation failed');
        }
    } catch (error) {
        console.error('Email/password account creation error:', error);
        throw new Error(`Account creation failed: ${error.message}`);
    }
}

// Sign in with existing email/password (fallback)
async function signInWithEmailPassword(email, password) {
    console.log('Signing in with email/password...');
    
    // Clean the inputs
    email = email.trim().toLowerCase();
    password = password.trim();

    try {
        const response = await fetch(`${EMAIL_AUTH_URL}/renestsignin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        if (response.ok && data.token) {
            localStorage.setItem('authToken', data.token);
            console.log('Email/password sign-in successful');
            return { success: true, token: data.token };
        } else {
            throw new Error(data.error || 'Invalid credentials');
        }
    } catch (error) {
        console.error('Email/password sign-in error:', error);
        throw new Error(`Sign-in failed: ${error.message}`);
    }
}

// Handle Google credential response
function handleGoogleCredentialResponse(response) {
    return createAccountWithGoogle(response.credential);
}

// Initialize Google Sign-In
function initializeGoogleSignIn() {
    // The Google Sign-In is initialized via the HTML script tags and div elements
    // This function can be called to ensure it's ready
    console.log('Google Sign-In initialized');
}

// Export functions for global access
window.accountCreation = {
    createAccountWithGoogle,
    createAccountWithEmailPassword,
    signInWithEmailPassword,
    handleGoogleCredentialResponse,
    initializeGoogleSignIn
}; 