const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        console.log('Tautan diklik:', link.textContent);
        
        // Hapus kelas 'active' dari semua menu
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Tambahkan kelas 'active' ke menu yang diklik
        link.classList.add('active');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const content = document.getElementById('content');
    const paragraphs = content ? content.getElementsByTagName('p') : [];

    if (!searchButton || !searchInput || !content) {
        console.error("Search functionality elements are missing!");
        return;
    }

    // Fungsi untuk menghapus highlight sebelumnya
    const clearHighlights = () => {
        Array.from(paragraphs).forEach(p => {
            p.innerHTML = p.textContent; // Kembali ke teks asli
        });
    };

    // Fungsi untuk menyorot hasil pencarian
    const highlightText = (term) => {
        let found = false;
        Array.from(paragraphs).forEach(p => {
            let text = p.textContent;
            let regex = new RegExp(`(${term})`, 'gi');
            if (regex.test(text)) {
                found = true;
                let highlightedText = text.replace(regex, '<span class="highlight">$1</span>');
                p.innerHTML = highlightedText;
            }
        });
        return found;
    };

    // Fungsi untuk menangani pencarian
    const handleSearch = () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        clearHighlights();

        if (!searchTerm) {
            alert('Please enter a keyword to search.');
            return;
        }

        const found = highlightText(searchTerm);

        if (found) {
            const firstHighlight = document.querySelector('.highlight');
            if (firstHighlight) {
                firstHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else {
            alert(`No results found for "${searchTerm}".`);
        }
    };

    // Event listener untuk tombol pencarian
    searchButton.addEventListener('click', (e) => {
        e.preventDefault(); // Mencegah reload halaman
        handleSearch();
    });

    // Event listener untuk tombol "Enter" di input
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Mencegah reload halaman
            handleSearch();
        }
    });
});

// Event listener untuk tombol "Enter" di input
document.getElementById('search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault(); // Mencegah reload halaman
        document.getElementById('search-button').click();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.animation = `fadeIn 0.5s ease-in-out ${index * 0.2}s`;
        card.style.animationFillMode = 'forwards';
    });
});
