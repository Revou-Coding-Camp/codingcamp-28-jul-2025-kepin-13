// === JS: Halaman 1 (Data) ===
const form = document.getElementById('belajarForm');
const table = document.getElementById('dataTable')?.getElementsByTagName('tbody')[0];

if (form && table) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const tanggal = document.getElementById('tanggal').value;
    const pesan = document.getElementById('pesan').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;

    if (!nama || !tanggal || !gender || !pesan) {
      alert("Harap isi semua data!");
      return;
    }

    const row = table.insertRow();
    row.innerHTML = `
      <td>${nama}</td>
      <td>${new Date(tanggal).toLocaleDateString('en-US', {
        month: 'long', day: 'numeric', year: 'numeric'
      })}</td>
      <td>${gender}</td>
      <td>${pesan}</td>
      <td><a href="#">Klik Disini</a></td>
      <td><span class="delete-icon">🗑</span></td>
    `;

    form.reset();
  });

  table.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-icon')) {
      const row = e.target.closest('tr');
      row.remove();
    }
  });
}

// === JS: Halaman 2 (Travel) ===
function sendForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const interest = document.getElementById("interest").value;

  if (name === "" || email === "" || interest === "Select option") {
    alert("Please fill all fields before submitting.");
    return;
  }

  alert(`Thanks ${name}, our sales team will contact you via ${email} within 1x24 hours.`);
}

// === JS: Halaman 4 (Portofolio) ===
document.getElementById('submitBtn')?.addEventListener('click', function() {
  const nama = document.getElementById('nama').value;
  const tempatLahir = document.getElementById('tempatLahir').value;
  const tanggalLahir = document.getElementById('tanggalLahir').value;
  const pesan = document.getElementById('pesan').value;
  const gender = document.querySelector('input[name="gender"]:checked');

  const genderValue = gender ? gender.value : '-';
  const currentTime = new Date().toString();

  document.getElementById('currentTime').innerText = currentTime;

  const infoBox = document.getElementById('infoBox');
  const infoParagraphs = infoBox.getElementsByTagName('p');

  infoParagraphs[1].innerHTML = `Nama: ${nama || '-'}`;
  infoParagraphs[2].innerHTML = `Tempat Lahir: ${tempatLahir || '-'}`;
  infoParagraphs[3].innerHTML = `Tanggal Lahir: ${tanggalLahir || '-'}`;
  infoParagraphs[4].innerHTML = `Jenis Kelamin: ${genderValue}`;
  infoParagraphs[5].innerHTML = `Pesan: ${pesan || '-'}`;
});

// === JS: Halaman 5 (Skolah) ===
document.getElementById('submitBtn')?.addEventListener('click', function() {
  const nama = document.getElementById('nama').value;
  const tempatLahir = document.getElementById('tempatLahir').value;
  const tanggalLahir = document.getElementById('tanggalLahir').value;
  const pesan = document.getElementById('pesan').value;
  const gender = document.querySelector('input[name="gender"]:checked');

  const genderValue = gender ? gender.value : '-';
  const currentTime = new Date().toString();

  document.getElementById('currentTime').innerText = currentTime;

  const infoBox = document.getElementById('infoBox');
  const infoParagraphs = infoBox.getElementsByTagName('p');

  infoParagraphs[1].innerHTML = `Nama: ${nama || '-'}`;
  infoParagraphs[2].innerHTML = `Tempat Lahir: ${tempatLahir || '-'}`;
  infoParagraphs[3].innerHTML = `Tanggal Lahir: ${tanggalLahir || '-'}`;
  infoParagraphs[4].innerHTML = `Jenis Kelamin: ${genderValue}`;
  infoParagraphs[5].innerHTML = `Pesan: ${pesan || '-'}`;
});