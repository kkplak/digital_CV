// Holiday definitions with dates and associated themes
// 
// DEVELOPER CONFIGURATION:
// To add/edit holiday wallpapers, modify this file directly.
// Users cannot add custom wallpapers - they can only toggle festive themes on/off.
// Use the "Developer Tools" section in Settings to preview any holiday theme.
//
// Each holiday can specify:
// - appearance: 'light' or 'dark' - determines the UI color scheme for that holiday
// - wallpaper: gradient or image URL for the desktop background
// - colors: navbar, navbarBorder, folder, dock colors for festive styling
// - folderNameColor: (optional) custom color for desktop folder names text
// - day: single number or array of numbers for multi-day holidays
// - month: single number or array (must match day array length for cross-month holidays)
//
export const holidays = [
  {
    id: 'new-year',
    name: "Happy New Year!",
    month: [12, 1], // December 31 and January 1
    day: [31, 1], // New Year's Eve and New Year's Day
    wallpaper: 'url(https://images.unsplash.com/photo-1639501252219-130096b7b904?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweWVhciUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D) center/cover no-repeat',
    emoji: '🎊',
    appearance: 'dark', // 'light' or 'dark'
    folderNameColor: '#ffffffff', // Optional: custom folder name text color
    colors: {
      navbar: 'rgba(255, 0, 123, 0.4)',
      navbarBorder: 'rgba(0, 0, 0, 0.56)',
      folder: '#ffae00ff',
      dock: 'rgba(255, 0, 123, 0.4)',
    }
  },
  {
    id: 'valentines',
    name: "Happy Valentine's Day!",
    month: 2, // February
    day: 14,
    wallpaper: 'url(https://s1.bwallpapers.com/wallpapers/2014/01/18/valentines-day-desktop-background_112150.jpg) center/cover no-repeat',
    emoji: '💝',
    appearance: 'light',
     folderNameColor: '#8c0046ff',
    colors: {
      navbar: 'rgba(255, 20, 145, 0.22)',
      navbarBorder: 'rgba(255, 105, 180, 0.3)',
      folder: '#FF69B4',
      dock: 'rgba(255, 20, 145, 0.22)',
    }
  },
  {
    id: 'st-patricks',
    name: "Happy St. Patrick's Day!",
    month: 3, // March
    day: 17,
    wallpaper: 'linear-gradient(135deg, #006400 0%, #228B22 50%, #32CD32 100%)',
    emoji: '🍀',
    appearance: 'light',
      folderNameColor: '#fff',
    colors: {
      navbar: 'rgba(34, 139, 34, 0.4)',
      navbarBorder: 'rgba(50, 205, 50, 0.3)',
      folder: '#146c14ff',
      dock: 'rgba(50, 205, 50, 0.25)'
    }
  },
  {
    id: 'earth-day',
    name: 'Happy Earth Day!',
    month: 4, // April
    day: 22,
    wallpaper: 'url(https://images.unsplash.com/photo-1661705969607-cde73828023d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFydGglMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D) center/cover no-repeat',
    emoji: '🌍',
    appearance: 'dark',
    colors: {
      navbar: 'rgba(0, 0, 0, 0.18)',
      navbarBorder: 'rgba(3, 3, 3, 0.3)',
      folder: '#86a279ff',
      dock: 'rgba(49, 38, 177, 0.25)'
    }
  },
  {
    id: 'star-wars',
    name: 'May the 4th Be With You!',
    month: 5, // May
    day: 4,
    wallpaper: 'url(https://images7.alphacoders.com/497/thumb-1920-497638.jpg) center/cover no-repeat',
    emoji: '⭐',
    appearance: 'dark',
    colors: {
      navbar: 'rgba(0, 0, 0, 0.93)',
      navbarBorder: 'rgba(255, 217, 0, 1)',
      folder: '#FFD700',
      dock: 'rgba(0, 0, 0, 0.93)',
    }
  },
  {
    id: 'towel-day',
    name: "Don't Panic - It's Towel Day!",
    month: 5, // May
    day: 25,
    wallpaper: 'url(https://images.unsplash.com/photo-1574421233376-06f2ccf017f7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dG93ZWx8ZW58MHx8MHx8fDA%3D) center/cover no-repeat',
    emoji: '🧺',
    appearance: 'light',
    folderNameColor: '#ffffffff',
    colors: {
      navbar: 'rgba(26, 26, 46, 0.4)',
      navbarBorder: 'rgba(66, 217, 200, 0.3)',
      folder: '#033c65ff',
      dock: 'rgba(26, 26, 46, 0.4)'
    }
  },
  {
    id: 'pi-day',
    name: 'Happy Pi Day!',
    month: 3, // March
    day: 14,
    wallpaper: 'url(https://wallpapercave.com/wp/wp5914417.jpg) center/cover no-repeat',
    emoji: '🥧',
    appearance: 'dark',
    folderNameColor: '#ffffffff',
    colors: {
      navbar: 'rgba(0, 0, 0, 0.4)',
      navbarBorder: 'rgba(0, 255, 21, 1)',
      folder: '#00ff00ff',
      dock: 'rgba(0, 0, 0, 0.25)'
    }
  },
  {
    id: 'world-emoji-day',
    name: 'World Emoji Day!',
    month: 7, // July
    day: 17,
    wallpaper: 'url(https://wallpapers.com/images/hd/minimalist-smiling-emoji-in-mustard-background-abs5r1fk7dgac7qc.jpg) center/cover no-repeat',
    emoji: '😎',
    appearance: 'dark',
    folderNameColor: '#fff',
    colors: {
      navbar: '#585858ff',
      navbarBorder: 'rgba(0, 0, 0, 1)',
      folder: '#585858ff',
      dock: 'rgba(255, 217, 0, 0.4)',
    }
  },
  {
    id: 'national-cat-day',
    name: 'Happy Cat Day!',
    month: 8, // August
    day: 8,
    wallpaper: 'url(https://wallpapercave.com/wp/wp6469956.jpg) center/cover no-repeat',
    emoji: '🐱',
    appearance: 'light',
        folderNameColor: '#fff479ff',
    colors: {
      navbar: 'rgba(0, 0, 0, 0.4)',
      navbarBorder: 'rgba(0, 0, 0, 0.3)',
      folder: '#000000ff',
      dock: 'rgba(191, 191, 191, 0.25)'
    }
  },
  {
    id: 'national-dog-day',
    name: 'Happy Dog Day!',
    month: 8, // August
    day: 26,
    wallpaper: 'url(https://marketplace.canva.com/EAFaDSM0z1c/1/0/1600w/canva-blue-green-illustrated-dog-and-nature-desktop-wallpaper-5EE1MLD3dSk.jpg) center/cover no-repeat',
    emoji: '🐶',
    appearance: 'light',
        folderNameColor: '#853700ff',
    colors: {
      navbar: 'rgba(0, 64, 99, 0.4)',
      navbarBorder: 'rgba(96, 244, 237, 0.3)',
      folder: '#966D1E',
      dock: 'rgba(210, 105, 30, 0.25)'
    }
  },
  {
    id: 'programmers-day',
    name: "Happy Programmer's Day!",
    month: 9, // September
    day: 13,
    wallpaper: 'url(https://images7.alphacoders.com/101/thumb-1920-1010066.jpg) center/cover no-repeat',
    emoji: '💻',
    appearance: 'dark',
    folderNameColor: '#ffffffff',
    colors: {
      navbar: 'rgba(0, 0, 0, 0.2)',
      navbarBorder: 'rgba(0, 242, 255, 1)',
      folder: '#ff0000ff',
      dock: 'rgba(0, 0, 0, 0.6)'
    }
  },
  {
    id: 'talk-like-pirate-day',
    name: 'Arrr! Talk Like a Pirate Day!',
    month: 9, // September
    day: 19,
    wallpaper: 'url(https://wallpapers.com/images/featured/pirate-ship-v7qo6pj8pn3gvdfn.jpg) center/cover no-repeat',
    emoji: '🏴‍☠️',
    appearance: 'dark',
    folderNameColor: '#ffffffff',
    colors: {
      navbar: 'rgba(55, 55, 55, 0.6)',
      navbarBorder: 'rgba(0, 52, 56, 0.4)',
      folder: '#00314dff',
      dock: 'rgba(55, 55, 55, 0.6)',
    }
  },
  {
    id: 'back-to-future-day',
    name: 'Back to the Future Day!',
    month: 10, // October
    day: 21,
    wallpaper: 'url(https://www.pixelstalk.net/wp-content/uploads/2016/07/Back-To-The-Future-Backgrounds-For-Desktop.jpg) center/cover no-repeat',
    emoji: '⚡',
    appearance: 'dark',
    folderNameColor: '#ffffffff',
    colors: {
      navbar: 'rgba(61, 61, 61, 1)',
      navbarBorder: 'rgba(255, 255, 255, 1)',
      folder: '#4d4d4dff',
      dock: 'rgba(43, 43, 43, 0.36)'
    }
  },
  {
    id: 'halloween',
    name: 'Happy Halloween!',
    month: 10, // October
    day: 31,
    wallpaper: 'url(https://wallpaperset.com/w/full/8/8/5/23137.jpg) center/cover no-repeat',
    emoji: '🎃',
    appearance: 'dark',
        folderNameColor: '#ffffffff',
    colors: {
      navbar: 'rgba(14, 0, 35, 0.5)',
      navbarBorder: 'rgba(0, 0, 0, 0.4)',
      folder: '#360058ff',
      dock: 'rgba(14, 0, 35, 0.5)',
    }
  },
  {
    id: 'coffee-day',
    name: 'International Coffee Day!',
    month: 10, // October
    day: 1,
    wallpaper: 'linear-gradient(135deg, #3E2723 0%, #5D4037 50%, #8D6E63 100%)',
    emoji: '☕',
    appearance: 'light',
    folderNameColor: '#D7CCC8',
    colors: {
      navbar: 'rgba(62, 39, 35, 0.6)',
      navbarBorder: 'rgba(141, 110, 99, 0.4)',
      folder: '#8D6E63',
      dock: 'rgba(62, 39, 35, 0.5)'
    }
  },
  {
    id: 'world-kindness-day',
    name: 'World Kindness Day!',
    month: 11, // November
    day: 13,
    wallpaper: 'url(https://images.unsplash.com/photo-1602615576820-ea14cf3e476a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGluayUyMGZsb3dlcnN8ZW58MHx8MHx8fDA%3D) center/cover no-repeat',
    emoji: '💖',
    appearance: 'light',
    folderNameColor: '#C2185B',
    colors: {
      navbar: 'rgba(104, 55, 78, 0.4)',
      navbarBorder: 'rgba(255, 192, 209, 0.3)',
      folder: '#c6567cff',
      dock: 'rgba(255, 182, 217, 0.25)'
    }
  },
  {
    id: 'christmas',
    name: 'Merry Christmas!',
    month: 12, // December
    day: [24, 25, 26], // Christmas Eve, Christmas Day, Boxing Day
    wallpaper: 'url(https://www.pixelstalk.net/wp-content/uploads/2016/05/Christmas-Background-800x500.png) center/cover no-repeat',
    emoji: '🎄',
    appearance: 'dark',
    colors: {
      navbar: 'rgba(0, 0, 0, 0.65)',
      navbarBorder: 'rgba(0, 0, 0, 0.31)',
      folder: 'rgba(123, 18, 18, 1)',
      dock: 'rgba(0, 0, 0, 0.65)',
    }
  },
  {
    id: 'lord-of-rings-day',
    name: 'Hobbit Day!',
    month: 9, // September
    day: 22,
    wallpaper: 'url(https://www.baltana.com/files/wallpapers-33/Lord-of-The-Rings-Cool-HD-Desktop-Wallpaper-112384.jpg) center/cover no-repeat',
    emoji: '🧙‍♂️',
    appearance: 'light',
    folderNameColor: '#ffffffff',
    colors: {
      navbar: 'rgba(44, 95, 45, 0.4)',
      navbarBorder: 'rgba(151, 188, 98, 0.3)',
      folder: '#adad87ff',
      dock: 'rgba(44, 95, 45, 0.25)'
    }
  }
];

/**
 * Check if today matches a holiday
 * @returns {Object|null} Holiday object if match found, null otherwise
 */
export function getTodayHoliday() {
  const today = new Date();
  const currentMonth = today.getMonth() + 1; // JavaScript months are 0-indexed
  const currentDay = today.getDate();

  return holidays.find(holiday => {
    const months = Array.isArray(holiday.month) ? holiday.month : [holiday.month];
    const days = Array.isArray(holiday.day) ? holiday.day : [holiday.day];
    
    // For multi-month holidays, check if month and day match at same index
    if (Array.isArray(holiday.month) && Array.isArray(holiday.day)) {
      for (let i = 0; i < months.length; i++) {
        if (months[i] === currentMonth && days[i] === currentDay) {
          return true;
        }
      }
      return false;
    }
    
    // For single month with multiple days
    if (months.includes(currentMonth)) {
      return days.includes(currentDay);
    }
    
    return false;
  }) || null;
}

/**
 * Get holiday within a date range (for multi-day celebrations)
 * @param {number} daysRange - Number of days to check around holiday
 * @returns {Object|null} Holiday object if within range, null otherwise
 */
export function getHolidayInRange(daysRange = 3) {
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  return holidays.find(holiday => {
    if (holiday.month !== currentMonth) return false;
    
    const dayDiff = Math.abs(currentDay - holiday.day);
    return dayDiff <= daysRange;
  }) || null;
}
