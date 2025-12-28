export interface FestivalTheme {
    name: string;
    colors: string[]; // Using array for potential future multi-color support or picking one
    speed: number;
    particleSize: number;
}

const defaultTheme: FestivalTheme = {
    name: 'Default',
    colors: ['#13F287'], // Green
    speed: 1,
    particleSize: 0.005
};

// Fixed dates (Month is 0-indexed in JS Date, so Jan is 0, Dec is 11)
const fixedFestivals: Record<string, { month: number; day: number; theme: FestivalTheme }> = {
    'New Year': {
        month: 0, day: 1,
        theme: { name: 'New Year', colors: ['#FFD700'], speed: 1.5, particleSize: 0.006 } // Gold
    },
    'Lohri': {
        month: 0, day: 13,
        theme: { name: 'Lohri', colors: ['#FF4500'], speed: 1.8, particleSize: 0.006 } // Orange-Red
    },
    'Makar Sankranti': {
        month: 0, day: 14,
        theme: { name: 'Makar Sankranti', colors: ['#FFD700'], speed: 1.2, particleSize: 0.005 } // Gold
    },
    'Republic Day': {
        month: 0, day: 26,
        theme: { name: 'Republic Day', colors: ['#000080'], speed: 1.2, particleSize: 0.005 } // Navy Blue (Ashoka Chakra)
    },
    'Valentine\'s Day': {
        month: 1, day: 14,
        theme: { name: 'Valentine\'s Day', colors: ['#FF1493'], speed: 0.8, particleSize: 0.006 } // Deep Pink
    },
    'Independence Day': {
        month: 7, day: 15, // August
        theme: { name: 'Independence Day', colors: ['#FF9933'], speed: 1.5, particleSize: 0.006 } // Saffron
    },
    'Halloween': {
        month: 9, day: 31, // October
        theme: { name: 'Halloween', colors: ['#FF7518'], speed: 1.2, particleSize: 0.006 } // Pumpkin Orange
    },
    'Christmas': {
        month: 11, day: 25, // December
        theme: { name: 'Christmas', colors: ['#FF0000'], speed: 0.8, particleSize: 0.007 } // Red
    }
};

// Variable festivals for 2025 and 2026
// Format: "YYYY-MM-DD"
const variableFestivals: Record<string, FestivalTheme> = {
    // Holi
    '2026-03-04': { name: 'Holi', colors: ['#FF00FF'], speed: 2, particleSize: 0.008 }, // Magenta/Multi-feel

    // Diwali
    '2026-11-08': { name: 'Diwali', colors: ['#FFA500'], speed: 1.5, particleSize: 0.007 }, // Orange/Gold
};

export function getCurrentFestivalTheme(date: Date = new Date()): FestivalTheme {
    // Normalize input date to midnight for accurate day comparison
    const today = new Date(date);
    today.setHours(0, 0, 0, 0);

    const checkDateString = (d: Date) => {
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // 1. Check EXACT matches first (Priority: Variable > Fixed)
    const dateString = checkDateString(today);
    if (variableFestivals[dateString]) {
        return variableFestivals[dateString];
    }

    for (const key in fixedFestivals) {
        const festival = fixedFestivals[key];
        if (festival.month === today.getMonth() && festival.day === today.getDate()) {
            return festival.theme;
        }
    }

    // 2. Check ANTICIPATION (1 week before)
    const DAYS_BEFORE = 7;
    const msPerDay = 1000 * 60 * 60 * 24;

    // Check Variable Festivals Anticipation
    for (const [dateStr, theme] of Object.entries(variableFestivals)) {
        const festivalDate = new Date(dateStr);
        festivalDate.setHours(0, 0, 0, 0);

        const diffTime = festivalDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / msPerDay);

        if (diffDays > 0 && diffDays <= DAYS_BEFORE) {
            return theme;
        }
    }

    // Check Fixed Festivals Anticipation
    // We need to check if 'today' is within 7 days before any fixed festival date.
    // Valid targets are festivals in the current year OR next year (if today is Dec and festival is Jan).

    // Sort keys to ensure consistent priority if overlaps? (Optional, but 'break' extracts first match)
    for (const key in fixedFestivals) {
        const festival = fixedFestivals[key];

        // Construct festival date for current year
        const candidates = [
            new Date(today.getFullYear(), festival.month, festival.day),
            new Date(today.getFullYear() + 1, festival.month, festival.day)
        ];

        for (const target of candidates) {
            const diffTime = target.getTime() - today.getTime();
            const diffDays = Math.ceil(diffTime / msPerDay);

            if (diffDays > 0 && diffDays <= DAYS_BEFORE) {
                return festival.theme;
            }
        }
    }

    return defaultTheme;
}
