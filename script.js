let slideIndex = 1;
let slides = document.getElementsByClassName("slide");

// Sayfa yüklendiğinde slider'ı başlat
document.addEventListener('DOMContentLoaded', function() {
    // Slaytlar varsa çalıştır
    if (slides.length > 0) {
        showSlides(slideIndex);
        startAutoSlide();
    }
});

// Otomatik slayt değiştirme fonksiyonu
function startAutoSlide() {
    // Otomatik geçiş için bir interval ayarla (5 saniye)
    setInterval(function() {
        plusSlides(1);
    }, 5000); 
}

// Oklarla slayt değiştirme (n: 1 veya -1)
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Slaytları gösterme ana fonksiyonu
function showSlides(n) {
    let i;
    
    // Sınır kontrolü (Sona gelince başa dön)
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Tüm slaytları gizle (active sınıfını kaldır)
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    
    // Güncel slaytı göster
    slides[slideIndex - 1].classList.add('active');
}