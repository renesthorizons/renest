// ssn-integration.js
const PUBLIC_KEY = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0TIl1XiMA/ZwQT1Op/D2c3loXCkiOU7qRl0WvnRx1YTzdZr12hNAVh7lIxaRqSNstGIIrmkNjtMJ8U3z+Kcuceq0QBIRRSrvXM9wkD3EbKdqUIQk9CXxxuJLGYGrlo/Xvb+cQJjRn5tLWztK16rhEFAwIcfaKlQyImQz42yQq+QPR7tBwnrM7ijxY9GL3ZnnGTBXbvH68yZKm99Ydy8gJ0vxhWKDhFlb0ze6FyrNZJHpFIH5/AuwZ+BoJhN2vJx/gdW4sU2kBg8EAqdUrdmNANriax2I+mb3WtmNNCI2DohS+8t0JDgGUrakKNF/lp6F0o+2WZfG+UKt4RJGnZn3dwIDAQAB";
const SSN_API_URL = "https://rxfl727df9.execute-api.us-east-2.amazonaws.com/submit-s-data";

function encryptSSNWithPublicKey(ssn) {
    if (typeof JSEncrypt === 'undefined') {
        console.error('JSEncrypt library is not loaded.');
        // It's better to ensure JSEncrypt is loaded before calling this.
        // Throwing an error or returning null can help identify the issue.
        alert('A required security library (JSEncrypt) is not loaded. Please refresh or contact support.');
        return null;
    }
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(PUBLIC_KEY);
    // The timestamp is good practice for preventing replay attacks on the encrypted payload,
    // though the API receiving this would need to validate it.
    const dataToEncrypt = JSON.stringify({
        ssn: ssn,
        timestamp: new Date().toISOString()
    });
    const encrypted = encrypt.encrypt(dataToEncrypt);
    if (encrypted === false) {
        console.error("SSN Encryption failed. This might be due to an invalid public key or an issue with the JSEncrypt library.");
        return null;
    }
    return encrypted;
}

async function submitSensitiveData(formDataBundle) {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
        // This error should ideally be caught and result in guiding the user to log in again.
        throw new Error('Authentication token not found. Please sign in.');
    }

    const encryptedClientSSN = encryptSSNWithPublicKey(formDataBundle.ssn);
    if (!encryptedClientSSN) {
        // The user should be informed about this failure.
        throw new Error('Failed to encrypt sensitive information. Please try again or contact support.');
    }

    // Construct the address string carefully
    let addressParts = [formDataBundle.streetAddress];
    if (formDataBundle.address2 && formDataBundle.address2.trim() !== '') {
        addressParts.push(formDataBundle.address2.trim());
    }
    addressParts.push(formDataBundle.city, `${formDataBundle.state} ${formDataBundle.zipCode}`);
    const fullAddress = addressParts.join(', ').trim();

    const payload = {
        encryptedSSN: encryptedClientSSN,
        firstName: formDataBundle.firstName,
        lastName: formDataBundle.lastName,
        dateOfBirth: formDataBundle.dateOfBirth,
        phoneNumber: formDataBundle.phoneNumber,
        address: fullAddress, // Combined address
        state: formDataBundle.state, 
        school: formDataBundle.school
    };

    console.log('Submitting sensitive data to SSN API. Payload (excluding encryptedSSN for brevity):', { ...payload, encryptedSSN: '[ENCRYPTED]' });

    const response = await fetch(SSN_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(payload)
    });

    let responseData;
    try {
        responseData = await response.json();
    } catch (e) {
        // If response is not JSON, read as text.
        constresponseText = await response.text();
        console.error('SSN API response was not JSON:', responseText);
        throw new Error(`Received non-JSON response from server (status ${response.status}): ${responseText.substring(0,100)}`);
    }
    

    if (!response.ok) {
        console.error('SSN API submission failed:', responseData);
        // Provide a user-friendly error message.
        throw new Error(responseData.message || responseData.error || `Failed to submit sensitive information (status ${response.status}). Please try again.`);
    }

    console.log('SSN API submission successful:', responseData);
    return responseData;
} 