const stateTaxDB = {
    'AK': {
        hasStateCapGains: false,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: Infinity, rate: 0 }
        ],
        notes: 'Alaska has no state income tax.'
    },
    'AL': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: 3000, rate: 2 },
            { threshold: 6000, rate: 4 },
            { threshold: 12000, rate: 5 },
            { threshold: Infinity, rate: 5.5 }
        ],
        notes: 'Alabama taxes capital gains as ordinary income with progressive rates.'
    },
    'AR': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: 4300, rate: 2 },
            { threshold: 8500, rate: 3 },
            { threshold: 12700, rate: 4.4 },
            { threshold: 21300, rate: 4.6 },
            { threshold: 26500, rate: 4.9 },
            { threshold: Infinity, rate: 5.5 }
        ],
        notes: 'Arkansas taxes capital gains as ordinary income with multiple tax brackets.'
    },
    'AZ': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: 27272, rate: 2.55 },
            { threshold: 54544, rate: 2.98 },
            { threshold: 163692, rate: 4.50 },
            { threshold: Infinity, rate: 4.80 }
        ],
        notes: 'Arizona taxes capital gains as ordinary income with progressive rates.'
    },
    'CA': {
        hasStateCapGains: true,
        taxesWithZeroIncome: true,
        brackets: [
            { threshold: 10099, rate: 1 },
            { threshold: 23942, rate: 2 },
            { threshold: 37788, rate: 4 },
            { threshold: 52455, rate: 6 },
            { threshold: 66295, rate: 8 },
            { threshold: 338639, rate: 9.3 },
            { threshold: 406364, rate: 10.3 },
            { threshold: 677275, rate: 11.3 },
            { threshold: 1000000, rate: 12.3 },
            { threshold: Infinity, rate: 13.3 }
        ],
        notes: 'California taxes capital gains as ordinary income with progressive rates from 1% to 13.3%. Capital gains are taxed even with $0 in other income.'
    },
    'CO': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: Infinity, rate: 4.4 }
        ],
        notes: 'Colorado has a flat tax rate of 4.4% for all income including capital gains.'
    },
    'CT': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: 10000, rate: 3 },
            { threshold: 50000, rate: 5 },
            { threshold: 100000, rate: 5.5 },
            { threshold: 200000, rate: 6 },
            { threshold: 250000, rate: 6.5 },
            { threshold: 500000, rate: 6.9 },
            { threshold: Infinity, rate: 6.99 }
        ],
        notes: 'Connecticut taxes capital gains as ordinary income with progressive rates.'
    },
    'DE': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: 2000, rate: 0 },
            { threshold: 5000, rate: 2.2 },
            { threshold: 10000, rate: 3.9 },
            { threshold: 20000, rate: 4.8 },
            { threshold: 25000, rate: 5.2 },
            { threshold: 60000, rate: 5.55 },
            { threshold: Infinity, rate: 6.6 }
        ],
        notes: 'Delaware taxes capital gains as ordinary income with progressive rates.'
    },
    'FL': {
        hasStateCapGains: false,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: Infinity, rate: 0 }
        ],
        notes: 'Florida has no state income tax or capital gains tax.'
    },
    'GA': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: 750, rate: 1 },
            { threshold: 2250, rate: 2 },
            { threshold: 3750, rate: 3 },
            { threshold: 5250, rate: 4 },
            { threshold: 7000, rate: 5 },
            { threshold: Infinity, rate: 5.75 }
        ],
        notes: 'Georgia taxes capital gains as ordinary income with progressive rates.'
    },
    'HI': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: 2400, rate: 1.4 },
            { threshold: 4800, rate: 3.2 },
            { threshold: 9600, rate: 5.5 },
            { threshold: 14400, rate: 6.4 },
            { threshold: 19200, rate: 6.8 },
            { threshold: 24000, rate: 7.2 },
            { threshold: 36000, rate: 7.6 },
            { threshold: 48000, rate: 7.9 },
            { threshold: 150000, rate: 8.25 },
            { threshold: 175000, rate: 9 },
            { threshold: 200000, rate: 10 },
            { threshold: Infinity, rate: 11 }
        ],
        notes: 'Hawaii has one of the highest state tax rates with multiple brackets.'
    },
    'IA': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: Infinity, rate: 3.90 }
        ],
        notes: 'Iowa has implemented a flat tax rate of 3.90% for 2024.'
    },
    'ID': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: Infinity, rate: 5.8 }
        ],
        notes: 'Idaho has a flat tax rate of 5.8% as of 2024.'
    },
    'IL': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: Infinity, rate: 4.95 }
        ],
        notes: 'Illinois taxes capital gains at a flat 4.95% rate.'
    },
    'IN': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: Infinity, rate: 3.15 }
        ],
        notes: 'Indiana has a flat tax rate and taxes capital gains as ordinary income.'
    },
    'KS': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: 15000, rate: 3.1 },
            { threshold: 30000, rate: 5.25 },
            { threshold: Infinity, rate: 5.7 }
        ],
        notes: 'Kansas taxes capital gains as ordinary income with progressive rates.'
    },
    'KY': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: Infinity, rate: 4.5 }
        ],
        notes: 'Kentucky has a flat tax rate of 4.5% for all income including capital gains.'
    },
    'LA': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: 12500, rate: 1.85 },
            { threshold: 50000, rate: 3.5 },
            { threshold: Infinity, rate: 4.25 }
        ],
        notes: 'Louisiana taxes capital gains as ordinary income with progressive rates.'
    },
    'MA': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: Infinity, rate: 5 }
        ],
        notes: 'Massachusetts has a renters credit allowing a deduction up to $4,000 spent on rent.'
    },
    'MD': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: 1000, rate: 2 },
            { threshold: 2000, rate: 3 },
            { threshold: 3000, rate: 4 },
            { threshold: 100000, rate: 4.75 },
            { threshold: 125000, rate: 5 },
            { threshold: 150000, rate: 5.25 },
            { threshold: 250000, rate: 5.5 },
            { threshold: Infinity, rate: 5.75 }
        ],
        notes: 'Maryland taxes capital gains as ordinary income with progressive rates.'
    },
    'ME': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: 24500, rate: 5.8 },
            { threshold: 58050, rate: 6.75 },
            { threshold: Infinity, rate: 7.15 }
        ],
        notes: 'Maine taxes capital gains as ordinary income with progressive rates.'
    },
    'MI': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: Infinity, rate: 4.25 }
        ],
        notes: 'Michigan taxes capital gains at a flat 4.25% rate.'
    },
    'MN': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: 30070, rate: 5.35 },
            { threshold: 98760, rate: 6.8 },
            { threshold: 164400, rate: 7.85 },
            { threshold: Infinity, rate: 9.85 }
        ],
        notes: 'Minnesota taxes capital gains as ordinary income with progressive rates.'
    },
    'MO': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: 1121, rate: 1.5 },
            { threshold: 2242, rate: 2 },
            { threshold: 3363, rate: 2.5 },
            { threshold: 4484, rate: 3 },
            { threshold: 5605, rate: 3.5 },
            { threshold: 6726, rate: 4 },
            { threshold: 7847, rate: 4.5 },
            { threshold: 8968, rate: 5 },
            { threshold: Infinity, rate: 5.3 }
        ],
        notes: 'Missouri taxes capital gains as ordinary income with progressive rates.'
    },
    'MS': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: 10000, rate: 4.4 },
            { threshold: Infinity, rate: 4.4 }
        ],
        notes: 'Mississippi taxes capital gains as ordinary income with progressive rates.'
    },
    'MT': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: 3300, rate: 1 },
            { threshold: 5800, rate: 2 },
            { threshold: 8900, rate: 3 },
            { threshold: 12000, rate: 4 },
            { threshold: 15400, rate: 5 },
            { threshold: 19800, rate: 6 },
            { threshold: Infinity, rate: 6.75 }
        ],
        notes: 'Montana taxes capital gains as ordinary income with progressive rates.'
    },
    'NC': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: Infinity, rate: 4.75 }
        ],
        notes: 'North Carolina has a flat income tax rate of 4.75% for 2024.'
    },
    'ND': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: 41775, rate: 1.1 },
            { threshold: 100450, rate: 2.04 },
            { threshold: 221050, rate: 2.64 },
            { threshold: Infinity, rate: 2.90 }
        ],
        notes: 'North Dakota taxes capital gains as ordinary income with progressive rates.'
    },
    'NE': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: 3700, rate: 2.46 },
            { threshold: 22170, rate: 3.51 },
            { threshold: 35730, rate: 5.01 },
            { threshold: Infinity, rate: 6.84 }
        ],
        notes: 'Nebraska taxes capital gains as ordinary income with progressive rates.'
    },
    'NH': {
        hasStateCapGains: false,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: Infinity, rate: 0 }
        ],
        notes: 'New Hampshire has no general income tax or capital gains tax.'
    },
    'NJ': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: 20000, rate: 1.4 },
            { threshold: 35000, rate: 1.75 },
            { threshold: 40000, rate: 3.5 },
            { threshold: 75000, rate: 5.525 },
            { threshold: 500000, rate: 6.37 },
            { threshold: 1000000, rate: 10.75 },
            { threshold: Infinity, rate: 10.75 }
        ],
        notes: 'New Jersey taxes capital gains as ordinary income with progressive rates from 1.4% to 10.75%.'
    },
    'NM': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: 5500, rate: 1.7 },
            { threshold: 11000, rate: 3.2 },
            { threshold: 16000, rate: 4.7 },
            { threshold: 24000, rate: 4.9 },
            { threshold: Infinity, rate: 5.9 }
        ],
        notes: 'New Mexico taxes capital gains as ordinary income with progressive rates.'
    },
    'NV': {
        hasStateCapGains: false,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: Infinity, rate: 0 }
        ],
        notes: 'Nevada has no state income tax or capital gains tax.'
    },
    'NY': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: 13900, rate: 4 },
            { threshold: 80650, rate: 5.97 },
            { threshold: 215400, rate: 6.33 },
            { threshold: 1077550, rate: 6.85 },
            { threshold: 5000000, rate: 9.65 },
            { threshold: 25000000, rate: 10.3 },
            { threshold: Infinity, rate: 10.9 }
        ],
        notes: 'New York taxes capital gains as ordinary income with progressive rates from 4% to 10.9%.'
    },
    'NYC': {
    hasStateCapGains: true,
    taxesWithZeroIncome: false,
    brackets: [
        { threshold: 12000, rate: 7.078 },     // 4.000% (state) + 3.078% (city)
        { threshold: 13900, rate: 7.762 },     // 4.000% (state) + 3.762% (city)
        { threshold: 25000, rate: 7.819 },     // 4.000% (state) + 3.819% (city)
        { threshold: 50000, rate: 7.876 },     // 4.000% (state) + 3.876% (city)
        { threshold: 80650, rate: 9.846 },     // 5.970% (state) + 3.876% (city)
        { threshold: 215400, rate: 10.206 },   // 6.330% (state) + 3.876% (city)
        { threshold: 1077550, rate: 10.726 },  // 6.850% (state) + 3.876% (city)
        { threshold: 5000000, rate: 13.526 },  // 9.650% (state) + 3.876% (city)
        { threshold: 25000000, rate: 14.176 }, // 10.300% (state) + 3.876% (city)
        { threshold: Infinity, rate: 14.776 }  // 10.900% (state) + 3.876% (city)
    ],
    notes: 'Combined New York State and New York City tax rates. NYC residents pay both state and city taxes, with total progressive rates ranging from 7.078% to 14.776%. Capital gains are taxed as ordinary income.'
},
    'OH': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: Infinity, rate: 3.75 }
        ],
        notes: 'Ohio has a flat tax rate and taxes capital gains as ordinary income.'
    },
    'OK': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: 1000, rate: 0.5 },
            { threshold: 2500, rate: 1 },
            { threshold: 3750, rate: 2 },
            { threshold: 4900, rate: 3 },
            { threshold: 7200, rate: 4 },
            { threshold: Infinity, rate: 5 }
        ],
        notes: 'Oklahoma taxes capital gains as ordinary income with progressive rates.'
    },
    'OR': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: 3750, rate: 4.75 },
            { threshold: 9450, rate: 6.75 },
            { threshold: 125000, rate: 8.75 },
            { threshold: 250000, rate: 9.9 },
            { threshold: Infinity, rate: 9.9 }
        ],
        notes: 'Oregon taxes capital gains as ordinary income with progressive rates.'
    },
    'PA': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: Infinity, rate: 3.07 }
        ],
        notes: 'Pennsylvania has a flat tax rate and taxes capital gains as ordinary income.'
    },
    'RI': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: 66200, rate: 3.75 },
            { threshold: 155950, rate: 4.75 },
            { threshold: Infinity, rate: 5.99 }
        ],
        notes: 'Rhode Island taxes capital gains as ordinary income with progressive rates.'
    },
    'SC': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: 3000, rate: 0 },
            { threshold: 6000, rate: 3 },
            { threshold: 15000, rate: 4 },
            { threshold: Infinity, rate: 5 }
        ],
        notes: 'South Carolina taxes capital gains as ordinary income with progressive rates.'
    },
    'SD': {
        hasStateCapGains: false,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: Infinity, rate: 0 }
        ],
        notes: 'South Dakota has no state income tax.'
    },
    'TN': {
        hasStateCapGains: false,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: Infinity, rate: 0 }
        ],
        notes: 'Tennessee has no state income tax.'
    },
    'TX': {
        hasStateCapGains: false,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: Infinity, rate: 0 }
        ],
        notes: 'Texas has no state income tax.'
    },
    'UT': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: Infinity, rate: 4.85 }
        ],
        notes: 'Utah has a flat tax rate and taxes capital gains as ordinary income.'
    },
    'VT': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: 42550, rate: 3.35 },
            { threshold: 103200, rate: 6.6 },
            { threshold: 203600, rate: 7.6 },
            { threshold: Infinity, rate: 8.75 }
        ],
        notes: 'Vermont taxes capital gains as ordinary income with progressive rates.'
    },
    'VA': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: 3000, rate: 2 },
            { threshold: 5000, rate: 3 },
            { threshold: 17000, rate: 5 },
            { threshold: Infinity, rate: 5.75 }
        ],
        notes: 'Virginia taxes capital gains as ordinary income with progressive rates.'
    },
    'WA': {
        hasStateCapGains: false,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: Infinity, rate: 0 }
        ],
        notes: 'Washington has no state income tax.'
    },
    'WV': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: 10000, rate: 3 },
            { threshold: 25000, rate: 4 },
            { threshold: 40000, rate: 4.5 },
            { threshold: 60000, rate: 6 },
            { threshold: Infinity, rate: 6.5 }
        ],
        notes: 'West Virginia taxes capital gains as ordinary income with progressive rates.'
    },
    'WI': {
        hasStateCapGains: true,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: 13810, rate: 3.54 },
            { threshold: 27630, rate: 4.65 },
            { threshold: 304170, rate: 6.27 },
            { threshold: Infinity, rate: 7.65 }
        ],
        notes: 'Wisconsin taxes capital gains as ordinary income with progressive rates.'
    },
    'WY': {
        hasStateCapGains: false,
        taxesWithZeroIncome: false,
        brackets: [
            { threshold: Infinity, rate: 0 }
        ],
        notes: 'Wyoming has no state income tax.'
    }
};

const state529linkDB = {
            'AL': {
                url: 'https://www.collegecounts529.com/',
                name: 'Alabama CollegeCounts 529',
                benefit: "$256"
            },
            'AK': {
                url: 'https://www.alaska529plan.com/',
                name: 'Alaska 529',
                benefit:"$0"
            },
            'AZ': {
                url: 'https://az529.gov/',
                name: 'Arizona Education Savings Plan',
                benefit:"$53"
            },
            'AR': {
                url: 'https://brighterfuturedirect529.com/',
                name: 'Arkansas Brighter Future 529',
                benefit:"$231"
            },
            'CA': {
                url: 'https://www.scholarshare529.com/',
                name: 'California ScholarShare 529',
                benefit:"$0"
            },
            'CO': {
                url: 'https://www.collegeinvest.org/',
                name: 'Colorado CollegeInvest 529',
                benefit:"$1,118"
            },
            'CT': {
                url: 'https://aboutchet.com/',
                name: 'Connecticut College Savings Plan',
                benefit:"$221"
            },
            'DE': {
                url: 'https://treasurer.delaware.gov/education-savings-plan/#:~:text=Delaware%E2%80%99s%20529%20Plan%20is%20sponsored%20by%20the%20State,grandparents%20and%20others%20pay%20for%20higher%20education%20expenses.',
                name: 'Delaware Education Savings Plan',
                benefit:"$47"
            },
            'FL': {
                url: 'https://www.myfloridaprepaid.com/savings-plan/',
                name: 'Florida Prepaid 529',
                benefit:"$0"
            },
            'GA': {
                url: 'https://ost.georgia.gov/georgias-529-college-savings/georgias-529-college-savings',
                name: 'Georgia 529 College Savings',
                benefit:"$212"
            },
            'HI': {
                url: 'https://www.hi529.com/',
                name: 'Hawaii College Savings Program 529',
                benefit:"$0"

            },
            'ID': {
                url: 'https://www.idsaves.org/',
                name: 'Idaho Saves 529',
                benefit:"$348"
            },
            'IL': {
                url: 'https://www.brightstart.com/',
                name: 'Bright Start 529 College Savings',
                benefit:"$495"
            },
            'IN': {
                url: 'https://www.indiana529direct.com/',
                name: 'CollegeChoice 529 Direct Savings Plan',
                benefit:"$1,500"
            },
            'IA': {
                url: 'https://www.collegesavingsiowa.com/',
                name: 'College Savings Iowa 529 Plan',
                benefit:"$215"
            },
            'KS': {
                url: 'https://www.learningquest.com/',
                name: 'Learning Quest 529 Education Savings Program',
                benefit:"$47"
            },
            'KY': {
                url: 'https://ky529.com/',
                name: 'KY Saves 529',
                benefit:"$0"

            },
            'LA': {
                url: 'https://www.startsaving.la.gov/',
                name: 'START Saving Program',
                benefit:"$73"

            },
            'ME': {
                url: 'https://www.nextgenforme.com/',
                name: 'NextGen 529',
                benefit:"$61"
            },
            'MD': {
                url: 'https://maryland529.com/',
                name: 'Maryland 529',
                benefit:"$116"
            },
            'MA': {
                url: 'https://www.fidelity.com/529-plans/massachusetts',
                name: 'U.Fund College Investing Plan',
                benefit:"$50"
            },
            'MI': {
                url: 'https://www.misaves.com/',
                name: 'Michigan Education Savings Program (MESP)',
                benefit:"$215"
            },
            'MN': {
                url: 'https://www.mnsaves.org/',
                name: 'Minnesota College Savings Plan',
                benefit:"$83"
            },

            'MS': {
                url: 'https://www.treasury.ms.gov/collegesavingsmississippi/',
                name: 'Mississippi Affordable College Savings (MACS)',
                benefit:"$440"
            },
            'MO': {
                url: 'https://www.missourimost.org/',
                name: 'MOST 529 Plan',
                benfit:"$382"
            },
            'MT': {
                url: 'https://achievemontana.com/',
                name: 'Achieve Montana',
                benefit:"$151"
            },
            'NE': {
                url: 'https://nest529.com/',
                name: 'NEST 529 College Savings',
                benefit:"$414"
            },
            'NV': {
                url: 'https://www.ssga.upromise529.com/',
                name: 'SSGA Upromise 529 Plan',
                benefit:"$0"
            },
            'NH': {
                url: 'https://www.fidelity.com/529-plans/new-hampshire',
                name: 'UNIQUE College Investing Plan',
                benefit:"$0"
            },
            'NJ': {
                url: 'https://www.njbest.com/',
                name: 'NJBEST 529 College Savings Plan',
                benefit:"$248"
            },
            'NM': {
                url: 'https://www.theeducationplan.com/',
                name: 'The Education Plan',
                benefit:"$1,151"
            },
            'NY': {
                url: 'https://www.nysaves.org/',
                name: 'New York 529 Plan',
                benefit:"$266"
            },
            'NYC': {
                url: 'https://www.nysaves.org/',
                name: 'New York 529 Plan',
                benefit:"$383"
            },
            'NC': {
                url: 'https://nc529.org/',
                name: 'NC 529 Plan',
                benefit:"$0"
            },
            'ND': {
                url: 'https://www.collegesave4u.com/',
                name: 'College SAVE',
                benefit:"$63"
            },
            'OH': {
                url: 'https://www.collegeadvantage.com/',
                name: 'CollegeAdvantage 529',
                benefit:"$150"
            },
            'OK': {
                url: 'https://www.ok4saving.org/',
                name: 'Oklahoma 529 College Savings Plan',
                benefit:"$453"
            },
            'OR': {
                url: 'https://www.oregoncollegesavings.com/',
                name: 'Oregon College Savings Plan',
                benefit:"$180"
            },
            'PA': {
                url: 'https://www.pa529.com/',
                name: 'PA 529',
                benefit:"$553"
            },

            'RI': {
                url: 'https://www.collegeboundsaver.com/',
                name: 'CollegeBound Saver',
                benefit:"$19"
            },
            'SC': {
                url: 'https://www.futurescholar.com/',
                name: 'Future Scholar 529 College Savings Plan',
                benefit:"$912"
            },
            'SD': {
                url: 'https://collegeaccess529.com/',
                name: 'CollegeAccess 529',
                benefit:"$0"
            },
            'TN': {
                url: 'https://tnstars.com/',
                name: 'TNStars College Savings 529 Program',
                benefit:"$0"
            },
            'TX': {
                url: 'https://www.texascollegesavings.com/',
                name: 'Texas College Savings Plan',
                benefit:"$0"
            },
            'UT': {
                url: 'https://my529.org/',
                name: 'my529',
                benefit:"$194"
            },
            'VT': {
                url: 'https://www.vheip.org/',
                name: 'Vermont Higher Education Investment Plan',
                benefit:"$84"
            },
            'VA': {
                url: 'https://www.virginia529.com/',
                name: 'Virginia529',
                benefit:"$205"
            },
            'WA': {
                url: 'https://www.dreamahead.wa.gov/',
                name: 'DreamAhead College Investment Plan',
                benefit:"$0"
            },
            'WV': {
                url: 'https://www.smart529.com/',
                name: 'SMART529',
                benefit:"$1,028"
            },
            'WI': {
                url: 'https://www.edvest.com/',
                name: 'Edvest',
                benefit:"$234"
            },
            'WY': {
                url: 'https://www.collegeadvantage.com/',
                name: 'College Achievement Wyoming',
                benefit:"$0"
            }
        };
        
const statePersonalExemptionDB = {
    'NY': {
        exemptionType: 'Standard Deduction',
        amount: 8000,
        notes: 'Uses federal standard deduction amounts. Single filer: $15,000, Married filing jointly: $30,000, Head of household: $22,500'
    },
    'IL': {
        exemptionType: 'Personal Exemption',
        amount: 2425,
        notes: 'Personal exemption allowance per person. Additional $1,000 for individuals 65 and older or legally blind'
    },
    'MA': {
        exemptionType: 'Personal Exemption',
        amount: 1000,
        notes: 'Single filer: $4,400, Married filing jointly: $8,800, Head of household: $6,800'
    },
    'PA': {
        exemptionType: 'None',
        amount: 0,
        notes: 'Pennsylvania has no standard deduction or personal exemption. Uses flat tax rate of 3.07%. Tax Forgiveness program available separately based on income and family size'
    },
    'VA': {
        exemptionType: 'Standard Deduction',
        amount: 8500,
        notes: 'Standard deduction of $8,500 for all filing statuses'
    },
    'AZ': {
        exemptionType: 'Standard Deduction',
        amount: 14600,
        notes: 'Single: $12,950, Married filing jointly: $25,900'
    },
    'MN': {
        exemptionType: 'Standard Deduction',
        amount: 15000,
        notes: 'Single: $13,825, Married filing jointly: $27,650. Additional standard deduction for age 65+ or blind'
    },
    'GA': {
        exemptionType: 'Standard Deduction',
        amount: 12000,
        notes: 'Single: $12,000, Married filing jointly: $24,000. Additional amounts for age 65+ or blind'
    },
    'OH': {
        exemptionType: 'Personal Exemption',
        amount: 26050,
        notes: 'Personal exemption credit amount varies based on income. Range: $2,400-$2,800 per person'
    },
    'IN': {
        exemptionType: 'Personal Exemption',
        amount: 1000,
        notes: 'Base exemption $1,000 per person. Additional $1,500 for dependents, $1,000 for age 65+'
    },
    'MO': {
        exemptionType: 'Standard Deduction',
        amount: 15000,
        notes: 'Follows federal standard deduction amounts. Single: $15,000, Married filing jointly: $30,000'
    },
    'MI': {
        exemptionType: 'Personal Exemption',
        amount: 5400,
        notes: 'Personal exemption amount per person. Additional exemption for seniors and disabled'
    },
    'MD': {
        exemptionType: 'Standard Deduction',
        amount: 2700,
        notes: 'Single: $2,400, Married filing jointly: $4,850. Additional amounts for age 65+ or blind'
    },
    'UT': {
        exemptionType: 'Standard Deduction',
        amount: 15000,
        notes: 'Follows federal standard deduction amounts. Single: $15,000, Married filing jointly: $30,000'
    },
    'NJ': {
        exemptionType: 'Personal Exemption',
        amount: 1000,
        notes: 'Personal exemption per person. Additional exemptions for age 65+ and blind'
    },
    'AL': {
        exemptionType: 'Standard Deduction',
        amount: 3000,
        notes: 'Single: $2,500, Married filing jointly: $7,500. Additional personal exemption of $1,500'
    },
    'CO': {
        exemptionType: 'Standard Deduction',
        amount: 15000,
        notes: 'Follows federal standard deduction amounts. Single: $15,000, Married filing jointly: $30,000'
    },
    'DC': {
        exemptionType: 'Standard Deduction',
        amount: 15000,
        notes: 'Single: $12,950, Married filing jointly: $25,900'
    },
    'LA': {
        exemptionType: 'Combined Exemption/Deduction',
        amount: 4500,
        notes: 'Combined personal exemption/standard deduction. Single: $4,500, Married filing jointly: $9,000'
    },
    'VT': {
        exemptionType: 'Standard Deduction',
        amount: 15000,
        notes: 'Single: $6,800, Married filing jointly: $13,600'
    },
    'WI': {
        exemptionType: 'Standard Deduction',
        amount: 12120,
        notes: 'Single: $12,120, Married filing jointly: $22,260. Phases out at higher income levels'
    },
    'CT': {
        exemptionType: 'Personal Exemption',
        amount: 15000,
        notes: 'Single: $15,000, Married filing jointly: $24,000. Phases out at higher income levels'
    },
    'SC': {
        exemptionType: 'Standard Deduction',
        amount: 15000,
        notes: 'Follows federal standard deduction amounts. Single: $15,000, Married filing jointly: $30,000'
    },
    'OK': {
        exemptionType: 'Standard Deduction',
        amount: 10000,
        notes: 'Single: $6,350, Married filing jointly: $12,700'
    },
    'OR': {
        exemptionType: 'Standard Deduction',
        amount: 5495,
        notes: 'Single: $2,420, Married filing jointly: $4,840. Additional credit for personal exemptions'
    },
    'NE': {
        exemptionType: 'Standard Deduction',
        amount: 12000,
        notes: 'Follows federal standard deduction amounts. Single: $15,000, Married filing jointly: $30,000'
    },
    'MS': {
        exemptionType: 'Standard Deduction',
        amount: 6000,
        notes: 'Single: $6,000, Married filing jointly: $12,000'
    },
    'KS': {
        exemptionType: 'Standard Deduction',
        amount: 3500,
        notes: 'Single: $3,500, Married filing jointly: $8,000'
    },
    'IA': {
        exemptionType: 'Standard Deduction',
        amount: 15000,
        notes: 'Single: $2,210, Married filing jointly: $5,450'
    },
    'AR': {
        exemptionType: 'Standard Deduction',
        amount: 3000,
        notes: 'Follows federal standard deduction amounts. Single: $15,000, Married filing jointly: $30,000'
    },
    'WV': {
        exemptionType: 'Personal Exemption',
        amount: 2000,
        notes: 'Personal exemption of $2,000 per person'
    },
    'NM': {
        exemptionType: 'Standard Deduction',
        amount: 3000,
        notes: 'Follows federal standard deduction amounts. Single: $15,000, Married filing jointly: $30,000'
    },
    'RI': {
        exemptionType: 'Standard Deduction',
        amount: 12000,
        notes: 'Single: $9,300, Married filing jointly: $18,600'
    },
    'DE': {
        exemptionType: 'Standard Deduction',
        amount: 3250,
        notes: 'Single: $3,250, Married filing jointly: $6,500. Additional personal credits available'
    },
    'ID': {
        exemptionType: 'Standard Deduction',
        amount:0,
        notes: 'Single: $15,000, Married filing jointly: $30,000'
    },
    'ME': {
        exemptionType: 'Standard Deduction',
        amount: 12000,
        notes: 'Follows federal standard deduction amounts. Single: $15,000, Married filing jointly: $30,000'
    },
    'MT': {
        exemptionType: 'Standard Deduction',
        amount: 15000,
        notes: 'Single: $5,590, Married filing jointly: $11,180. Additional personal exemption credit available'
    }
};

        const state529DB = {
            'CA': {
                planName: 'ScholarShare 529',
                deduction: 0,
                notes: 'California does not offer state tax deductions for 529 contributions, but earnings grow tax-free.'
            },
            'NY': {
                planName: 'New Yorks 529 Plan',
                deduction: 5000,
                notes: 'New York taxpayers can deduct up to $5,000 per year ($10,000 for married filing jointly) of their 529 plan contributions.'
            },
            'NYC': {
                planName: 'New Yorks 529 Plan',
                deduction: 5000,
                notes: 'New York taxpayers can deduct up to $5,000 per year ($10,000 for married filing jointly) of their 529 plan contributions.'
            },
            'MA': {
                planName: 'U.Fund College Investing Plan',
                deduction: 1000,
                notes: 'Massachusetts taxpayers can deduct up to $1,000 per year ($2,000 for married filing jointly) of their 529 plan contributions.'
            },
            'FL': {
                planName: 'Florida 529 Savings Plan',
                deduction: 0,
                notes: 'Florida has no state income tax, so there are no state tax deductions. However, earnings grow tax-free.'
            },
            'MI': {
                planName: 'Michigan Education Savings Program (MESP)',
                deduction: 5000,
                notes: 'Michigan taxpayers can deduct up to $5,000 per year ($10,000 for married filing jointly) of their 529 plan contributions.'
            },
            'MO': {
                planName: 'Missouri529',
                deduction: 8000,
                notes: 'Missouri taxpayers can deduct up to $8,000 per year ($16,000 for married filing jointly) of their 529 plan contributions.'
            },
            'IL': {
                planName: 'Bright Start College Savings',
                deduction: 10000,
                notes: 'Illinois taxpayers can deduct up to $10,000 per year ($20,000 for married filing jointly) of their 529 plan contributions.'
            },
            'NJ': {
                planName: 'NJBEST 529 College Savings Plan',
                deduction: 10000,
                notes: 'New Jersey does offers state tax deductions for 529 contributions and earnings grow tax-free.'
            },
            'CO': {
                planName: 'CollegeInvest 529 Plan',
                deduction: 25400,
                notes: 'Colorado offers a full deduction for contributions to its 529 plan, with no limit.'
            },
            'CT': {
                planName: 'CHET 529 College Savings Program',
                deduction: 5000,
                notes: 'Connecticut taxpayers can deduct up to $5,000 ($10,000 if married filing jointly) of contributions.'
            },
            'DE': {
                planName: 'Delaware College Investment Plan',
                deduction: 1000,
                notes: 'Delaware offers a state tax deductions for 529 contributions.'
            },
            'FL': {
                planName: 'Florida 529 Savings Plan',
                deduction: 0,
                notes: 'No state tax benefit as Florida has no state income tax.'
            },
            'GA': {
                planName: 'Path2College 529 Plan',
                deduction: 4000,
                notes: 'Georgia taxpayers can deduct up to $4,000 per beneficiary ($8,000 if married filing jointly).'
            },
            'HI': {
                planName: 'HI529 College Savings Program',
                deduction: 0,
                notes: 'Hawaii does not offer state tax deductions for 529 contributions.'
            },
            'ID': {
                planName: 'IDeal - Idaho College Savings Program',
                deduction: 6000,
                notes: 'Idaho taxpayers can deduct up to $6,000 ($12,000 if married filing jointly) of contributions.'
            },
            'AK': {
                planName: 'Alaska 529 Plan - T. Rowe Price College Savings Plan',
                deduction: 0,
                notes: 'No state tax deduction due to no state income tax, but plan offers tax-free growth.'
            },
            'AZ': {
                planName: 'Arizona Family College Savings Program (AZ529)',
                deduction: 2000,
                notes: 'Arizona taxpayers can deduct up to $2,000 per year ($4,000 for married filing jointly).'
            },
            'AR': {
                planName: 'GIFTS Arkansas 529 Plan',
                deduction: 5000,
                notes: 'Arkansas taxpayers can deduct up to $5,000 per year ($10,000 for married filing jointly).'
            },
            'TX': {
                planName: 'Texas College Savings Plan',
                deduction: 0,
                notes: 'No state tax deduction due to no state income tax, but plan offers investment benefits.'
            },
            'WA': {
                planName: 'Washington College Savings Plan (DreamAhead)',
                deduction: 0,
                notes: 'No state tax deduction due to no state income tax, but plan offers investment benefits.'
            },
            'WY': {
                planName: 'WYOStars 529 College Savings Plan',
                deduction: 0,
                notes: 'No state tax deduction due to no state income tax, but plan offers investment benefits.'
            },
            'WI': {
                planName: 'Wisconsin 529 College Savings Plan',
                deduction: 5000,
                notes: 'Wisconsin offers $5,000'
            },
            'AL': {
                planName: 'CollegeCounts 529 Fund',
                deduction: 5000,
                notes: 'Alabama taxpayers can deduct 529 contributions on state taxes.'
            },
            'NM': {
                planName: 'The New Mexico Learning Alliance',
                deduction: Infinity,
                notes: 'No state tax deduction, but plan offers investment benefits.'
            },
            'ND': {
                planName: 'College SAVE Plan',
                deduction: 5000,
                notes: 'North Dakota taxpayers can deduct up to $5,000 ($10,000 for married filing jointly).'
            },
            'OH': {
                planName: 'Ohio 529 Plan',
                deduction: 4000,
                notes: 'Ohio taxpayers can deduct up to $4,000 per beneficiary per year.'
            },
            'OK': {
                planName: 'STABLE Oklahoma 529 Savings Plan',
                deduction: 10000,
                notes: 'Oklahoma taxpayers can deduct up to $10,000 ($20,000 for married filing jointly).'
            },
            //OREGON IS WRONG
            'OR': {
                planName: 'Oregon College Savings Plan',
                deduction: 150,
                notes: 'Oregon taxpayers can get $150 per year.'
            },
            'PA': {
                planName: 'PA 529 Investment Plan',
                deduction: 18000,
                notes: 'Pennsylvania taxpayers can deduct 529 contributions.'
            },
            'RI': {
                planName: 'CollegeBound 529',
                deduction: 500,
                notes: 'No state tax deduction, but plan offers investment benefits.'
            },
            'SC': {
                planName: 'Future Scholar 529 Plan',
                deduction: Infinity,
                notes: 'South Carolina taxpayers can deduct up to $10,000 ($20,000 for married filing jointly).'
            },
            'SD': {
                planName: 'College Access 529 Plan',
                deduction: 0,
                notes: 'No state tax deduction due to no state income tax.'
            },
            'TN': {
                planName: 'TNStars College Savings 529 Program',
                deduction: 0,
                notes: 'No state tax deduction due to no state income tax.'
            },
            'UT': {
                planName: 'my529',
                deduction: 4000,
                notes: 'Utah taxpayers can deduct up to $4,000 per beneficiary per year.'
            },
            'VT': {
                planName: 'Vermont 529 Plan',
                deduction: 2500,
                notes: 'Vermont taxpayers can deduct up to $2,500 per beneficiary per year.'
            },
            'VA': {
                planName: 'Virginia529',
                deduction: 4000,
                notes: 'Virginia taxpayers can deduct up to $4,000 per beneficiary per year.'
            },
            'WV': {
                planName: 'SMART 529 West Virginia',
                deduction: Infinity,
                notes: 'No state tax deduction, but plan offers investment benefits.'
            },
            'IA': {
                // 529 Plan Information
                planName: 'College Savings Iowa 529 Plan',
                deduction: 5500,  // $4,000 per beneficiary
                notes: 'Iowa taxpayers can deduct up to $4,000 per beneficiary for 529 plan contributions'
            },
            'IN': {
                // 529 Plan Information
                planName: 'Indiana 529 Direct',
                deduction: 50000,  // $4,000 per beneficiary
                notes: 'Indiana taxpayers can deduct 20% of contribution up to $1,500 per beneficiary for 529 plan contributions'
            },
            'NC': {
                planName: 'NC 529 Plan',
                deduction: 0,
                notes: 'North Carolina taxpayers cannot deduct'
            },
            'KS': {
                planName: 'KS 529 Plan',
                deduction: 1000,
                notes: 'Kansataxpayers can deduct up to $150 credit '
            },
            'KY': {
                planName: 'KY 529 Plan',
                deduction: 0,
                notes: 'Kentucky taxpayers cannot deduct'
            },
            'LA': {
                planName: 'LA 529 Plan',
                deduction: 2400,
                notes: 'Louisiana taxpayers can deduct up to $2,400 per year for 529 contributions'
            },
            'ME': {
                planName: 'ME 529 Plan',
                deduction: 1000,
                notes: 'Maine taxpayers can deduct up to $1,000 per beneficiary per year for 529 contributions'
            },
            'MD': {
                planName: 'MD 529 Plan',
                deduction: 2500,
                notes: 'Maryland taxpayers can deduct up to $2,500 per year for 529 contributions'
            },
            'MN': {
                planName: 'MN 529 Plan',
                deduction: 1500,
                notes: 'Minnesota taxpayers can deduct up to $1,500 per beneficiary per year for 529 contributions'
            },
            'MS': {
                planName: 'MS 529 Plan',
                deduction: 10000,
                notes: 'Mississippi taxpayers can deduct up to $10,000 per year for 529 contributions'
            },
            'MT': {
                planName: 'MT 529 Plan',
                deduction: 3000,
                notes: 'Montana taxpayers can deduct up to $3,000 per year for 529 contributions'
            },
            'NE': {
                planName: 'NE 529 Plan',
                deduction: 10000,
                notes: 'Nebraska taxpayers can deduct up to $10,000 per year for 529 contributions'
            },
            'NV': {
                planName: 'NV 529 Plan',
                deduction: 0,
                notes: 'Nevada taxpayers cannot deduct'
            },
            'NH': {
                planName: 'NH 529 Plan',
                deduction: 0,
                notes: 'New Hampshire taxpayers cannot deduct'
            }

        };
        const stateOptions = {
            'AL': 'Alabama',
            'AK': 'Alaska',
            'AZ': 'Arizona',
            'AR': 'Arkansas',
            'CA': 'California',
            'CO': 'Colorado',
            'CT': 'Connecticut',
            'DE': 'Delaware',
            'DC': 'District of Columbia',
            'FL': 'Florida',
            'GA': 'Georgia',
            'HI': 'Hawaii',
            'ID': 'Idaho',
            'IL': 'Illinois',
            'IN': 'Indiana',
            'IA': 'Iowa',
            'KS': 'Kansas',
            'KY': 'Kentucky',
            'LA': 'Louisiana',
            'ME': 'Maine',
            'MD': 'Maryland',
            'MA': 'Massachusetts',
            'MI': 'Michigan',
            'MN': 'Minnesota',
            'MS': 'Mississippi',
            'MO': 'Missouri',
            'MT': 'Montana',
            'NE': 'Nebraska',
            'NV': 'Nevada',
            'NH': 'New Hampshire',
            'NJ': 'New Jersey',
            'NM': 'New Mexico',
            'NY': 'New York',
            'NYC': 'New York City',
            'NC': 'North Carolina',
            'ND': 'North Dakota',
            'OH': 'Ohio',
            'OK': 'Oklahoma',
            'OR': 'Oregon',
            'PA': 'Pennsylvania',
            'PR': 'Puerto Rico',
            'RI': 'Rhode Island',
            'SC': 'South Carolina',
            'SD': 'South Dakota',
            'TN': 'Tennessee',
            'TX': 'Texas',
            'UT': 'Utah',
            'VT': 'Vermont',
            'VA': 'Virginia',
            'WA': 'Washington',
            'WV': 'West Virginia',
            'WI': 'Wisconsin',
            'WY': 'Wyoming'
        };