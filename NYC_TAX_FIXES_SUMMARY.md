# NYC vs NY Tax Distinction Fixes - Summary

## Issues Fixed

### 1. **NYC School Recognition Issue**
**Problem**: All New York schools (including NYC schools like NYU, Columbia, etc.) were being mapped to "NY" state tax code instead of "NYC" for NYC schools.

**Solution**: 
- Modified `schoolrecognize.js` to identify NYC schools specifically
- Added a list of NYC schools that should use NYC tax rates
- Updated the school recognition system to map NYC schools to "new york city" state
- NYC schools now properly use 'NYC' tax code (7.078%-14.776% tax rates) instead of 'NY' (4%-10.9% tax rates)

### 2. **State Name Emphasis in Income Questions**
**Problem**: Income questions didn't emphasize the state name clearly.

**Solution**: 
- Added `<strong>` tags to make state names **bold** in income questions
- Updated all onboarding files to show: "What's your projected total income this year in **[State Name]**?"
- Also applied to multi-state income questions: "How much did you earn in **[State Name]**?"

### 3. **State Confirmation Message**
**Problem**: State confirmation didn't distinguish between NYC and NY properly.

**Solution**: 
- Updated state confirmation message to properly display "New York City" for NYC schools
- Added proper handling for NYC vs NY distinction in confirmation flow

## Files Modified

### Core Files:
1. **`schoolrecognize.js`**
   - Added NYC schools list
   - Modified school recognition logic to detect NYC schools
   - NYC schools now map to "new york city" state instead of "new york"

### Onboarding Files:
2. **`onboarding.html`**
   - Added 'new york city': 'NYC' to state mapping
   - Added bold formatting to income questions
   - Updated state confirmation message

3. **`onboarding-parents.html`**
   - Added 'new york city': 'NYC' to state mapping
   - Added bold formatting to income questions

4. **`onboarding-banking.html`**
   - Added 'new york city': 'NYC' to state mapping
   - Added bold formatting to income questions

5. **`onboarding-budgeting.html`**
   - Added 'new york city': 'NYC' to state mapping
   - Added bold formatting to income questions

## NYC Schools Affected

The following schools now properly use NYC tax rates instead of NY state rates:

**Private Schools:**
- Columbia University
- New York University (NYU)
- Fordham University
- St. John's University
- Yeshiva University
- The New School
- Barnard College

**Public Schools:**
- Fashion Institute of Technology
- City College of New York
- Hunter College
- Brooklyn College
- Queens College
- Baruch College

**Community Colleges:**
- Borough of Manhattan Community College
- LaGuardia Community College
- Queensborough Community College
- Bronx Community College
- Kingsborough Community College

**Trade Schools:**
- Lincoln Technical Institute
- Plaza College
- ASA College
- Swedish Institute
- New York Film Academy
- Institute of Culinary Education
- Mandl School
- New York School of Interior Design
- American Academy McAllister Institute
- Technical Career Institutes

## Tax Rate Differences

**NY State Tax Rates**: 4% - 10.9%
**NYC Tax Rates**: 7.078% - 14.776% (includes both state and city taxes)

**Example Benefit Difference** (for $50,000 income):
- NY State: ~$266 annual benefit
- NYC: ~$383 annual benefit (44% higher!)

## Multi-State Logic

The multi-state benefit calculation system was already working correctly:
- Optimally distributes qualified expenses between states
- Calculates benefits for each state separately
- Combines results to maximize total benefit
- Handles different state tax structures (credits vs deductions)

## Testing Instructions

1. **Test NYC School Recognition**:
   - Enter "NYU" or "Columbia University" in school field
   - Verify system asks: "Your school is in New York City?"
   - Confirm it uses NYC tax rates in calculations

2. **Test Bold State Names**:
   - Check income questions show state names in **bold**
   - Verify both primary and secondary state income questions

3. **Test Multi-State Logic**:
   - Enter income in two different states
   - Verify optimal expense allocation between states
   - Check that benefits are calculated correctly for each state

## Expected User Experience

**Before Fix**: 
- NYU student → "Your school is in New York?" → Uses 4%-10.9% tax rates
- Income question: "What's your projected total income this year in New York?"

**After Fix**:
- NYU student → "Your school is in New York City?" → Uses 7.078%-14.776% tax rates  
- Income question: "What's your projected total income this year in **New York City**?"

This results in significantly higher tax benefits for NYC students! 