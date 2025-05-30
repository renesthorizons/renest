// ssn-integration.js
// Only define if not already defined, to prevent redeclaration errors if script is loaded multiple times.
if (typeof window.PUBLIC_KEY === 'undefined') {
    window.PUBLIC_KEY = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0TIl1XiMA/ZwQT1Op/D2c3loXCkiOU7qRl0WvnRx1YTzdZr12hNAVh7lIxaRqSNstGIIrmkNjtMJ8U3z+Kcuceq0QBIRRSrvXM9wkD3EbKdqUIQk9CXxxuJLGYGrlo/Xvb+cQJjRn5tLWztK16rhEFAwIcfaKlQyImQz42yQq+QPR7tBwnrM7ijxY9GL3ZnnGTBXbvH68yZKm99Ydy8gJ0vxhWKDhFlb0ze6FyrNZJHpFIH5/AuwZ+BoJhN2vJx/gdW4sU2kBg8EAqdUrdmNANriax2I+mb3WtmNNCI2DohS+8t0JDgGUrakKNF/lp6F0o+2WZfG+UKt4RJGnZn3dwIDAQAB";
}

if (typeof window.SSN_API_URL === 'undefined') {
    window.SSN_API_URL = "https://rxfl727df9.execute-api.us-east-2.amazonaws.com/submit-s-data";
}

if (typeof window.encryptSSNWithPublicKey === 'undefined') {
    window.encryptSSNWithPublicKey = function encryptSSNWithPublicKey(ssn) {
        console.log('[encryptSSNWithPublicKey] Attempting to encrypt SSN:', typeof ssn === 'string' ? ssn.substring(0, 3) + '...' : ssn); // Log input SSN carefully
        if (typeof JSEncrypt === 'undefined') {
            console.error('[encryptSSNWithPublicKey] JSEncrypt library is not loaded.');
            // It's better to ensure JSEncrypt is loaded before calling this.
            // Throwing an error or returning null can help identify the issue.
            alert('A required security library (JSEncrypt) is not loaded. Please refresh or contact support.');
            return null;
        }
        const encrypt = new JSEncrypt();
        encrypt.setPublicKey(window.PUBLIC_KEY);
        // The timestamp is good practice for preventing replay attacks on the encrypted payload,
        // though the API receiving this would need to validate it.
        const dataToEncrypt = JSON.stringify({
            ssn: ssn,
            timestamp: new Date().toISOString()
        });
        console.log('[encryptSSNWithPublicKey] Data to encrypt (before encryption):', dataToEncrypt);
        const encrypted = encrypt.encrypt(dataToEncrypt, false, 'RSAES-OAEP', 'SHA-256');
        if (encrypted === false) {
            console.error("[encryptSSNWithPublicKey] SSN Encryption failed. This might be due to an invalid public key or an issue with the JSEncrypt library.");
            return null;
        }
        console.log('[encryptSSNWithPublicKey] Encrypted data (first 10 chars):', encrypted ? encrypted.substring(0, 10) + '...' : null);
        return encrypted;
    }
}

if (typeof window.submitSensitiveData === 'undefined') {
    window.submitSensitiveData = async function submitSensitiveData(formDataBundle) {
        console.log('[submitSensitiveData] Received formDataBundle:', formDataBundle);
        const authToken = localStorage.getItem('authToken');
        console.log('[submitSensitiveData] Retrieved authToken:', authToken ? authToken.substring(0, 10) + '...' : null);
        if (!authToken) {
            console.error('[submitSensitiveData] Authentication token not found.');
            throw new Error('Authentication token not found. Please sign in.');
        }

        const encryptedClientSSN = window.encryptSSNWithPublicKey(formDataBundle.ssn);
        console.log('[submitSensitiveData] Encrypted Client SSN (first 10 chars):', encryptedClientSSN ? encryptedClientSSN.substring(0, 10) + '...' : null);
        if (!encryptedClientSSN) {
            console.error('[submitSensitiveData] Failed to encrypt sensitive information.');
            throw new Error('Failed to encrypt sensitive information. Please try again or contact support.');
        }

        // Replicate address construction from testssnintegration.html
        let streetPart = formDataBundle.streetAddress;
        let address2Part = formDataBundle.address2 && formDataBundle.address2.trim() !== '' ? ' ' + formDataBundle.address2.trim() : '';
        let cityPart = formDataBundle.city;
        let stateZipPart = `${formDataBundle.state} ${formDataBundle.zipCode}`;

        const fullAddress = `${streetPart}${address2Part}, ${cityPart}, ${stateZipPart}`.trim();
        console.log('[submitSensitiveData] Constructed fullAddress (test-style):', fullAddress);

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

        console.log('[submitSensitiveData] Submitting sensitive data to SSN API. Payload (excluding encryptedSSN for brevity):', { ...payload, encryptedSSN: '[ENCRYPTED]' });

        let response;
        try {
            response = await fetch(window.SSN_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify(payload)
            });
            console.log('[submitSensitiveData] Raw API response status:', response.status);
            console.log('[submitSensitiveData] Raw API response headers:', Object.fromEntries(response.headers.entries()));
        } catch (fetchError) {
            console.error('[submitSensitiveData] Fetch error during API submission:', fetchError);
            throw new Error(`Network error or issue during API call: ${fetchError.message}`);
        }
        

        let responseData;
        try {
            const responseText = await response.text(); // Read as text first for robust logging
            console.log('[submitSensitiveData] Raw API response text:', responseText.substring(0, 500) + (responseText.length > 500 ? '...' : '')); // Log a snippet or full if short
            if (response.headers.get('content-type')?.includes('application/json')) {
                responseData = JSON.parse(responseText); // Then parse if JSON
            } else {
                console.warn('[submitSensitiveData] SSN API response was not JSON. Content-Type:', response.headers.get('content-type'));
                // For non-JSON, decide how to handle: maybe throw an error or return the text itself if that's expected.
                // For now, let's assume an error if it's not JSON and we expected it.
                if (!response.ok) { // If not ok and not JSON, it's definitely an issue to report as such.
                     throw new Error(`Received non-JSON error response from server (status ${response.status}): ${responseText.substring(0,100)}`);
                }
                // If it IS ok, but not JSON, it might be an unexpected success response type.
                // We'll let it proceed to the !response.ok check, which might still catch it if status is bad.
                // Or, if it's a 2xx non-JSON, it might pass through if not handled specifically.
                // For this example, let's stick to expecting JSON for success.
                 if (response.ok && !responseData) { // If it was ok, but we couldn't parse JSON (or it wasn't JSON)
                    console.warn('[submitSensitiveData] Response was OK but not processable as JSON.');
                    // Depending on requirements, this might be an error or just a different kind of success.
                    // For now, let's assume this API *must* return JSON on success.
                     throw new Error(`Server returned a non-JSON success response (status ${response.status}).`);
                }
            }
        } catch (e) {
            console.error('[submitSensitiveData] Error processing API response (e.g., JSON parsing or reading text):', e);
            // The response object might not be available here if response.text() itself failed,
            // but we have the status from above if fetch succeeded.
            // The original code's error was: `Received non-JSON response from server (status ${response.status}): ${responseText.substring(0,100)}`
            // We try to provide a similar message but acknowledge the error could be during .text() or .json()
            throw new Error(`Error processing server response (status ${response?.status}): ${e.message}. Check console for raw response text.`);
        }
        

        if (!response.ok) {
            console.error('[submitSensitiveData] SSN API submission failed. Status:', response.status, 'Response Data:', responseData);
            // Provide a user-friendly error message.
            throw new Error(responseData?.message || responseData?.error || `Failed to submit sensitive information (status ${response.status}). Please try again.`);
        }

        console.log('[submitSensitiveData] SSN API submission successful. Response Data:', responseData);
        return responseData;
    }
} 