// ssn-integration.js
// Only define if not already defined, to prevent redeclaration errors if script is loaded multiple times.
if (typeof window.PUBLIC_KEY === 'undefined') {
    window.PUBLIC_KEY = "-----BEGIN PUBLIC KEY-----\n"
        + "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzfRQ7jRR5l8Dc0Wi5jEc\n"
        + "xMB08UG/Rgi/r9CcRM3I7AnCuWHG+I1cEpDQWt+rHDamZ/k7serlCNAwzjprmBfU\n"
        + "RlK/VJMGjgKE/JScIMqCrKWSNwlPck1XS0dUSFGZxNSAuMG7kFN5eXKgYnz7df6M\n"
        + "3cTK0SkpshuJgBkEENQzDKasNJsLnAeRDdQn1ng0g4qXYTfEeWEf0826fC77if5N\n"
        + "ItAeFesOrQs0Mg4JZaqt+UO/tgdOnFZ53SPV/cjwlkp6X4EhwY4lExQG4nqyCFDS\n"
        + "b9MxcB5tGbjmCdULjx5RdEePr6dZKV5O4JUZ2w2NEoFiVoWbUeThAnWT4x281Ge2\n"
        + "kwIDAQAB\n"
        + "-----END PUBLIC KEY-----";
}

if (typeof window.SSN_API_URL === 'undefined') {
    window.SSN_API_URL = "https://rxfl727df9.execute-api.us-east-2.amazonaws.com/submit-s-data";
}

if (typeof window.encryptSSNWithPublicKey === 'undefined') {
    window.encryptSSNWithPublicKey = function encryptSSNWithPublicKey(ssn) {
        console.log('[encryptSSNWithPublicKey] Attempting to encrypt SSN using node-forge directly:', typeof ssn === 'string' ? ssn.substring(0, 3) + '...' : ssn);
        
        if (typeof forge === 'undefined') {
            console.error('[encryptSSNWithPublicKey] node-forge (forge) is not loaded. JSEncrypt might not be loaded or not expose forge globally.');
            alert('A required security library (node-forge) is not available. Please refresh or contact support.');
            return null;
        }

        let publicKey;
        try {
            publicKey = forge.pki.publicKeyFromPem(window.PUBLIC_KEY);
            console.log('[encryptSSNWithPublicKey] Public key parsed successfully by node-forge.');
        } catch (e) {
            console.error('[encryptSSNWithPublicKey] Error parsing public key with node-forge:', e);
            return null;
        }

        const dataToEncryptJson = JSON.stringify({
            ssn: ssn,
            timestamp: new Date().toISOString()
        });
        console.log('[encryptSSNWithPublicKey] Data to encrypt (JSON string):', dataToEncryptJson);

        const dataToEncryptUtf8 = forge.util.encodeUtf8(dataToEncryptJson);
        console.log('[encryptSSNWithPublicKey] Data to encrypt (UTF-8 encoded, first 30 chars):', dataToEncryptUtf8.substring(0, 30) + '...');

        const oaepParams = {
            md: forge.md.sha256.create(),
            mgf1: {
                md: forge.md.sha256.create()
            }
            //ps: forge.util.binary.raw.decode([]) // Optional label, not typically needed unless server expects it.
        };
        console.log('[encryptSSNWithPublicKey] Attempting node-forge encryption with scheme: RSA-OAEP, options:', { md: 'SHA256', mgf1_md: 'SHA256' });

        let encryptedBytes;
        try {
            encryptedBytes = publicKey.encrypt(dataToEncryptUtf8, 'RSA-OAEP', oaepParams);
            console.log('[encryptSSNWithPublicKey] node-forge encrypt method called. Raw result (first 10 bytes as hex):', encryptedBytes ? forge.util.bytesToHex(encryptedBytes.substring(0,10))+'...' : 'FAIL_OR_EMPTY');
        } catch (e) {
            console.error('[encryptSSNWithPublicKey] Error during node-forge encrypt method call:', e);
            encryptedBytes = null; 
        }
        
        if (!encryptedBytes) {
            console.error(`[encryptSSNWithPublicKey] SSN Encryption failed with node-forge using RSA-OAEP SHA256/SHA256.`);
            return null;
        }
        
        const encryptedBase64 = forge.util.encode64(encryptedBytes);
        console.log('[encryptSSNWithPublicKey] Encrypted successfully with node-forge (RSA-OAEP SHA256/SHA256).');
        console.log('[encryptSSNWithPublicKey] Encrypted data (Base64, first 10 chars):', typeof encryptedBase64 === 'string' ? encryptedBase64.substring(0, 10) + '...' : '[NON-STRING_RESULT]');
        return encryptedBase64;
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