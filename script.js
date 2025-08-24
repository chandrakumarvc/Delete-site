document.addEventListener('DOMContentLoaded', () => {

    // डेटाबेस (अभी के लिए, यह एक JavaScript Array है)
    // वास्तविक वेबसाइट में, यह डेटाबेस से आएगा।
    // लोगो के लिए, मैंने प्लेसहोल्डर का उपयोग किया है। आपको वास्तविक लोगो URL की आवश्यकता होगी।
    const platforms = [
        { name: 'Facebook', category: 'social', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' },
        { name: 'Instagram', category: 'social', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' },
        { name: 'Twitter (X)', category: 'social', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg' },
        { name: 'Amazon', category: 'ecommerce', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
        { name: 'Flipkart', category: 'ecommerce', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flipkart_logo_vector.svg' },
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
        { name: 'Ajio', category: 'ecommerce', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Ajio_logo.png' },
        { name: 'YouTube', category: 'entertainment', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg' },
        { name: 'Disney+', category: 'entertainment', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg' },
        { name: 'PhonePe', category: 'indian', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg' },
        { name: 'CRED', category: 'indian', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/CRED_logo.png' },
        // ... यहाँ 400+ और प्लेटफॉर्म जोड़ें
    ];

    const platformGrid = document.getElementById('platform-grid');
    const searchInput = document.getElementById('searchInput');
    const categoryIcons = document.querySelectorAll('.category-icon');

    // सभी प्लेटफॉर्म्स को पेज पर दिखाने का फंक्शन
    function displayPlatforms(filteredPlatforms) {
        platformGrid.innerHTML = '';
        const platformsToDisplay = filteredPlatforms || platforms;

        if (platformsToDisplay.length === 0) {
            platformGrid.innerHTML = '<p>कोई परिणाम नहीं मिला।</p>';
            return;
        }

        platformsToDisplay.forEach((platform, index) => {
            const card = document.createElement('a');
            card.href = `#`; // यहाँ वास्तविक गाइड पेज का लिंक होगा
            card.className = 'platform-card';
            card.style.animationDelay = `${index * 0.05}s`;
            
            card.innerHTML = `
                <div class="logo-container">
                    <img src="${platform.logo}" alt="${platform.name} Logo" loading="lazy">
                </div>
                <h3>${platform.name}</h3>
                <p>${platform.category.charAt(0).toUpperCase() + platform.category.slice(1)}</p>
            `;
            platformGrid.appendChild(card);
        });
    }

    // सर्च फंक्शन
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = platforms.filter(platform => 
            platform.name.toLowerCase().includes(searchTerm)
        );
        displayPlatforms(filtered);
    });

    // कैटेगरी फ़िल्टर फंक्शन
    categoryIcons.forEach(icon => {
        icon.addEventListener('click', () => {
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

    // शुरू में सभी प्लेटफॉर्म्स दिखाएँ
    displayPlatforms();
});
