const links = [
        'https://example.com/link1',
        'https://example.com/link2',
        'https://example.com/link3',
        'https://example.com/link4',
        'https://example.com/link5'
    ];

    document.addEventListener('click', function(event) {
        // Mencegah link default jika diklik di tombol
        if (event.target.id === 'randlink') {
            event.preventDefault();
        }

        // Memilih link acak
        const randomIndex = Math.floor(Math.random() * links.length);
        const randomLink = links[randomIndex];

        // Membuka link baru
        window.open(randomLink, '_blank');
    });
