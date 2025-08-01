document.getElementById('submitBtn').addEventListener('click', function() {
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
