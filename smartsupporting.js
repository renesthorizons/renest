// Tracking.js - Universal tracking script for Renest pages

function getPageIdentifier() {
    // Extract page identifier from URL path
    const path = window.location.pathname;
    const filename = path.split('/').pop(); // Get the last part of the path
    return filename.replace('.html', ''); // Remove .html extension
}

function getDeviceType() {
    const userAgent = navigator.userAgent;
    const screenWidth = screen.width;
    
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        if (/iPad/i.test(userAgent) || (screenWidth >= 768 && screenWidth <= 1024)) {
            return 'tablet';
        }
        return 'mobile';
    }
    return 'desktop';
}

function getBrowser() {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Chrome')) return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari')) return 'Safari';
    if (userAgent.includes('Edge')) return 'Edge';
    if (userAgent.includes('Opera')) return 'Opera';
    return 'Other';
}

function getOperatingSystem() {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Windows')) return 'Windows';
    if (userAgent.includes('Mac')) return 'macOS';
    if (userAgent.includes('Linux')) return 'Linux';
    if (userAgent.includes('Android')) return 'Android';
    if (userAgent.includes('iOS') || userAgent.includes('iPhone') || userAgent.includes('iPad')) return 'iOS';
    return 'Other';
}

function getUTMParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        utm_source: urlParams.get('utm_source') || null,
        utm_medium: urlParams.get('utm_medium') || null,
        utm_campaign: urlParams.get('utm_campaign') || null,
        utm_term: urlParams.get('utm_term') || null,
        utm_content: urlParams.get('utm_content') || null
    };
}

function getApproximateLocation() {
    // Get rough location from IP address (no user permission needed)
    console.log('Attempting to get location...'); // Add debug logging
    return fetch('https://ipapi.co/json/')
        .then(response => {
            console.log('Location API response status:', response.status); // Add debug logging
            return response.json();
        })
        .then(data => {
            console.log('Location data received:', data); // Add debug logging
            return {
                city: data.city || null,
                region: data.region || null,
                country: data.country_name || null,
                postal: data.postal || null,
                latitude: data.latitude || null,
                longitude: data.longitude || null
            };
        })
        .catch(error => {
            console.log('Location lookup failed:', error);
            return {
                city: null,
                region: null,
                country: null,
                postal: null,
                latitude: null,
                longitude: null
            };
        });
}

function isReturnVisitor() {
    const visited = localStorage.getItem('qr_visited');
    if (!visited) {
        localStorage.setItem('qr_visited', 'true');
        return false;
    }
    return true;
}

function trackScrollDepth() {
    let maxScroll = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = Math.round((scrollTop / documentHeight) * 100);
        
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            console.log('New max scroll depth:', maxScroll + '%'); // Add debug logging
        }
    });
    
    return () => maxScroll;
}

function trackTimeOnPage() {
    const startTime = Date.now();
    
    return () => {
        return Math.round((Date.now() - startTime) / 1000); // seconds
    };
}

function trackClicks() {
    let clickCount = 0;
    let clickEvents = []; // Store detailed click data
    
    document.addEventListener('click', (e) => {
        clickCount++;
        
        // Calculate current scroll position
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = Math.round((scrollTop / documentHeight) * 100);
        
        // Get text content from the element
        let elementText = e.target.textContent?.trim() || null;
        
        // If no direct text, try to get meaningful identifier
        if (!elementText && e.target.value) {
            elementText = e.target.value; // For input buttons
        }
        if (!elementText && e.target.alt) {
            elementText = e.target.alt; // For images
        }
        if (!elementText && e.target.title) {
            elementText = e.target.title; // For elements with title
        }
        
        // Get href for links
        const href = e.target.href || null;
        
        // Get data attributes that might be useful
        const dataAttributes = {};
        for (let attr of e.target.attributes) {
            if (attr.name.startsWith('data-')) {
                dataAttributes[attr.name] = attr.value;
            }
        }
        
        // Store click with context
        const clickData = {
            click_number: clickCount,
            scroll_position: scrollPercent,
            timestamp: Date.now(),
            element_tag: e.target.tagName.toLowerCase(),
            element_class: e.target.className || null,
            element_id: e.target.id || null,
            element_text: elementText,
            element_href: href,
            data_attributes: Object.keys(dataAttributes).length > 0 ? dataAttributes : null
        };
        
        clickEvents.push(clickData);
        console.log('Click detected:', clickData); // Add debug logging
    });
    
    return {
        getClickCount: () => clickCount,
        getClickEvents: () => clickEvents
    };
}

// Function to send tracking data
function sendTrackingData(data) {
    console.log('Sending tracking data:', data); // Add debug logging
    fetch('https://gesw5yp192.execute-api.us-east-2.amazonaws.com/prod/track', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        console.log('Tracking response:', response.status); // Add success logging
        return response;
    })
    .catch(error => {
        console.log('Tracking error:', error);
    });
}

// Function to track calculator interactions
function trackCalculatorInteraction(type, oldValue, newValue) {
    const interactionData = {
        session_id: sessionId,
        qr_code: currentPageId,
        interaction_type: 'calculator_change',
        field_changed: type, // 'state' or 'income'
        old_value: oldValue,
        new_value: newValue,
        timestamp: Date.now(),
        page_url: window.location.href
    };
    
    console.log('Calculator interaction:', interactionData);
    sendTrackingData(interactionData);
}

// Initialize tracking
console.log('Initializing tracking for page:', getPageIdentifier()); // Add debug logging
const getScrollDepth = trackScrollDepth();
const getTimeOnPage = trackTimeOnPage();
const clickTracker = trackClicks();

// Generate a unique session ID for this visit
const sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);

// Get the current page identifier automatically
const currentPageId = getPageIdentifier();

// Track initial page load
window.addEventListener('load', function() {
    // Get location data first, then send tracking data
    getApproximateLocation().then(locationData => {
        const pageData = {
            // Session linking
            session_id: sessionId,
            
            // Page info - automatically detected from URL
            qr_code: currentPageId,
            page_url: window.location.href,
            page_title: document.title,
            
            // Device info
            device_type: getDeviceType(),
            browser: getBrowser(),
            operating_system: getOperatingSystem(),
            
            // Time info
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            day_of_week: new Date().toLocaleDateString('en-US', {weekday: 'long'}),
            hour_of_day: new Date().getHours(),
            
            // Navigation info
            referrer: document.referrer || 'direct',
            language: navigator.language,
            is_return_visitor: isReturnVisitor(),
            
            // Location info (rough, IP-based)
            ...locationData,
            
            // Marketing info
            ...getUTMParameters(),
            
            // Initial interaction data
            initial_load: true
        };
        
        // Send initial tracking data
        sendTrackingData(pageData);
    });
});

// Track when user leaves the page
window.addEventListener('beforeunload', function() {
    const finalData = {
        // Session linking
        session_id: sessionId,
        
        qr_code: currentPageId, // automatically detected from URL
        time_on_page: getTimeOnPage(),
        scroll_depth: getScrollDepth(),
        click_count: clickTracker.getClickCount(),
        click_events: clickTracker.getClickEvents(), // Detailed click data with scroll positions
        session_end: true
    };
    
    console.log('Page unloading - final tracking data:', finalData); // Add debug logging
    
    // Use sendBeacon for reliable delivery when page is closing
    if (navigator.sendBeacon) {
        navigator.sendBeacon('https://gesw5yp192.execute-api.us-east-2.amazonaws.com/prod/track', JSON.stringify(finalData));
    }
}); 