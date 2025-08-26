document.addEventListener('DOMContentLoaded', () => {
    // प्लेटफॉर्म डेटा
    const platforms = [
        { name: 'Facebook', category: 'social', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' },
        { name: 'Instagram', category: 'social', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' },
        { name: 'Twitter (X)', category: 'social', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg' },
        { name: 'Amazon', category: 'ecommerce', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
        { name: 'Flipkart', category: 'ecommerce', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Flipkart_logo.svg' },
        { name: 'Netflix', category: 'entertainment', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
        { name: 'Spotify', category: 'entertainment', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg' },
        { name: 'Steam', category: 'gaming', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg' },
        { name: 'Paytm', category: 'indian', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo.jpg' },
        { name: 'Zomato', category: 'indian', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png' },
        { name: 'Google', category: 'productivity', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
        { name: 'Microsoft', category: 'productivity', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
        { name: 'LinkedIn', category: 'social', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' },
        { name: 'Pinterest', category: 'social', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png' },
        { name: 'Snapchat', category: 'social', logo: 'https://upload.wikimedia.org/wikipedia/en/c/c4/Snapchat_logo.svg' },
        { name: 'TikTok', category: 'social', logo: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg' },
        { name: 'Reddit', category: 'social', logo: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Reddit_Logo_Icon.svg' },
        { name: 'WhatsApp', category: 'social', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' },
        { name: 'Telegram', category: 'social', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg' },
        { name: 'Discord', category: 'social', logo: 'https://upload.wikimedia.org/wikipedia/en/9/98/Discord_logo.svg' },
        { name: 'Myntra', category: 'ecommerce', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Myntra_logo.png' },
        { name: 'YouTube', category: 'entertainment', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg' },
        { name: 'Disney+', category: 'entertainment', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg' },
        { name: 'PhonePe', category: 'indian', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg' },
        { name: 'CRED', category: 'indian', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/CRED_logo.png' },
        { name: 'Swiggy', category: 'indian', logo: 'https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg' },
        { name: 'Ola', category: 'indian', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Ola_Cabs_logo.png' },
        { name: 'Uber', category: 'productivity', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' },
        { name: 'Airbnb', category: 'productivity', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg' },
        { name: 'Dropbox', category: 'productivity', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Dropbox_logo_2017.svg' },
        { name: 'OneDrive', category: 'productivity', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Microsoft_Office_OneDrive_%282019%E2%80%93present%29.svg' },
        { name: 'iCloud', category: 'productivity', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/ICloud_logo.svg' },
        { name: 'PUBG Mobile', category: 'gaming', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/PUBG_Mobile_logo.svg' },
        { name: 'Free Fire', category: 'gaming', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Garena_Free_Fire_logo.png' },
        { name: 'Call of Duty Mobile', category: 'gaming', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Call_of_Duty_logo.svg' },
        { name: 'Amazon Prime', category: 'entertainment', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png' },
        { name: 'Hotstar', category: 'entertainment', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Disney%2B_Hotstar_logo.svg' },
        { name: 'JioSaavn', category: 'entertainment', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/JioSaavn_Logo.png' },
        { name: 'Gaana', category: 'entertainment', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Gaana_logo.png' },
        { name: 'BookMyShow', category: 'entertainment', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/67/BookMyShow_Logo.svg' },
        { name: 'MakeMyTrip', category: 'productivity', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/MakeMyTrip_Logo.svg' },
        { name: 'Nykaa', category: 'ecommerce', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Nykaa_Logo.png' },
        { name: 'BigBasket', category: 'ecommerce', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/BigBasket_Logo.png' },
        { name: 'Grofers', category: 'ecommerce', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Grofers_logo.png' },
        { name: 'Dunzo', category: 'productivity', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Dunzo_Logo.png' },
        { name: 'Urban Company', category: 'productivity', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/42/UrbanCompany_logo.png' }
    ];

    const platformGrid = document.getElementById('platform-grid');
    const searchInput = document.getElementById('searchInput');
    const categoryIcons = document.querySelectorAll('.category-icon');

    // प्लेटफॉर्म कार्ड्स दिखाने का फंक्शन
    function displayPlatforms(filteredPlatforms) {
        platformGrid.innerHTML = '';
        const platformsToDisplay = filteredPlatforms || platforms;

        if (platformsToDisplay.length === 0) {
            platformGrid.innerHTML = '<div class="no-results">कोई परिणाम नहीं मिला। कृपया अन्य खोजशब्द आज़माएं।</div>';
            return;
        }

        platformsToDisplay.forEach((platform, index) => {
            const card = document.createElement('a');
            card.href = `#${platform.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
            card.className = 'platform-card';
            card.style.animationDelay = `${index * 0.05}s`;
            
            card.innerHTML = `
                <div class="logo-container">
                    <img src="${platform.logo}" alt="${platform.name} Logo" loading="lazy" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iI0Y4RjlGQSIvPgo8cGF0aCBkPSJNMjAgMTBDMTUuNTggMTAgMTIgMTMuNTggMTIgMThTMTUuNTggMjYgMjAgMjYgMjggMjIuNDIgMjggMThTMjQuNDIgMTAgMjAgMTBaIiBmaWxsPSIjREVFMkU2Ii8+Cjx0ZXh0IHg9IjIwIiB5PSIzMyIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjNkM3NTdEIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JTUFHRSU8L3RleHQ+Cjwvc3ZnPgo='">
                </div>
                <h3>${platform.name}</h3>
                <p>${getCategoryName(platform.category)}</p>
            `;
            
            // कार्ड पर क्लिक इवेंट
            card.addEventListener('click', (e) => {
                e.preventDefault();
                alert(`${platform.name} का अकाउंट डिलीट करने की गाइड जल्द ही उपलब्ध होगी!`);
            });
            
            platformGrid.appendChild(card);
        });
    }

    // कैटेगरी का हिंदी नाम
    function getCategoryName(category) {
        const categoryNames = {
            'social': 'सोशल मीडिया',
            'ecommerce': 'ई-कॉमर्स',
            'entertainment': 'मनोरंजन',
            'gaming': 'गेमिंग',
            'productivity': 'उत्पादकता',
            'indian': 'भारतीय ऐप्स'
        };
        return categoryNames[category] || category;
    }

    // सर्च फंक्शन
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = platforms.filter(platform => 
            platform.name.toLowerCase().includes(searchTerm) ||
            getCategoryName(platform.category).toLowerCase().includes(searchTerm)
        );
        displayPlatforms(filtered);
        
        // अगर सर्च है तो सभी कैटेगरी को active करें
        if (searchTerm) {
            categoryIcons.forEach(icon => icon.classList.remove('active'));
            document.querySelector('[data-category="all"]').classList.add('active');
        }
    });

    // कैटेगरी फ़िल्टर
    categoryIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            // सर्च इनपुट साफ करें
            searchInput.value = '';
            
            // Active class को मैनेज करें
            categoryIcons.forEach(i => i.classList.remove('active'));
            icon.classList.add('active');

            const category = icon.getAttribute('data-category');
            if (category === 'all') {
                displayPlatforms(platforms);
            } else {
                const filtered = platforms.filter(platform => platform.category === category);
                displayPlatforms(filtered);
            }
        });
    });

    // पेज लोड पर सभी प्लेटफॉर्म दिखाएं
    displayPlatforms();

    // लैंग्वेज सिलेक्टर इवेंट
    document.querySelector('.language-selector').addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const language = e.target.textContent;
            document.querySelector('.current-language span').textContent = language;
            alert(`भाषा बदली गई: ${language}`);
        }
    });
});