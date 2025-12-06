// Sayfa yüklendiğinde çalışacak fonksiyon
window.addEventListener('load', function () {
  // Başlık animasyonunu başlat
  const title = document.querySelector('h1');
  title.style.opacity = 0;
  title.style.transform = 'translateY(-50px)';
  title.style.transition = 'opacity 2s ease, transform 2s ease';

  // Sayfa yüklenince başlığı görünür hale getirelim
  setTimeout(() => {
    title.style.opacity = 1;
    title.style.transform = 'translateY(0)';
  }, 500);  // 500ms sonra başlık hareket etsin
});

// Hover efekti eklemek için
const interactiveBox = document.querySelector('.box'); // box öğesini seçiyoruz

if (interactiveBox) {
  interactiveBox.addEventListener('mouseover', function () {
    interactiveBox.style.transform = 'scale(1.2)';
    interactiveBox.style.transition = 'transform 0.3s ease';
  });

  interactiveBox.addEventListener('mouseout', function () {
    interactiveBox.style.transform = 'scale(1)';
    interactiveBox.style.transition = 'transform 0.3s ease';
  });

  // Tıklama ile renk değiştiren animasyon
  interactiveBox.addEventListener('click', function () {
    interactiveBox.classList.toggle('clicked');  // "clicked" sınıfını togglle
  });
}
