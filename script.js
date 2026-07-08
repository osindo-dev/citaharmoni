// mobile menu
  const toggle = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

  // scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:.15});
  reveals.forEach(el => io.observe(el));

  // form -> WhatsApp
  document.getElementById('regForm').addEventListener('submit', function(e){
    e.preventDefault();
    const namaAnak = document.getElementById('namaAnak').value.trim();
    const usiaAnak = document.getElementById('usiaAnak').value.trim();
    const program = document.getElementById('program').value;
    const namaOrtu = document.getElementById('namaOrtu').value.trim();
    const noWa = document.getElementById('noWa').value.trim();

    const pesan = `Halo Cita Harmoni, saya ingin mendaftarkan anak saya:%0A%0A`
      + `Nama Anak: ${namaAnak}%0A`
      + `Usia: ${usiaAnak}%0A`
      + `Program: ${program}%0A`
      + `Nama Orang Tua: ${namaOrtu}%0A`
      + `No. WhatsApp: ${noWa}%0A%0A`
      + `Mohon info lebih lanjut. Terima kasih.`;

    window.open(`https://wa.me/6280000000000?text=${pesan}`, '_blank');
  });
