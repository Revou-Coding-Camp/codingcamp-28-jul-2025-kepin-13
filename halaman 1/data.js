const form = document.getElementById('belajarForm');
const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

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
    <td><span class="delete-icon">🗑️</span></td>
  `;

  form.reset();
});

table.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete-icon')) {
    const row = e.target.closest('tr');
    row.remove();
  }
});