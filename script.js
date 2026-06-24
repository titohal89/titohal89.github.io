// 1. Memuat Data Profil
fetch('data/profile.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('nama-user').textContent = data.name;
        document.getElementById('title-user').textContent = data.title;
        document.getElementById('deskripsi-user').textContent = data.description;
        document.getElementById('lokasi-user').textContent = data.location;
        document.getElementById('email-user').textContent = data.email;
        document.getElementById('telepon-user').textContent = data.phone;
        // Membuat fungsi KLIK email di sebelah tombol CV (mailto:)
        document.getElementById('link-email-profil').href = `mailto:${data.email}`;
    });

// 2. Memuat Data Pengalaman Kerja
fetch('data/experience.json')
    .then(response => response.json())
    .then(data => {
        const wadah = document.getElementById('wadah-pengalaman');
        data.forEach(item => {
            const kartu = document.createElement('div');
            kartu.className = 'kartu-riwayat';
            
            // Mengecek apakah ada gambar dokumentasi di JSON
            const gambarPengalaman = item.image ? `<img src="${item.image}" class="foto-pengalaman">` : '';

            kartu.innerHTML = `
                ${gambarPengalaman}
                <h4>${item.company}</h4>
                <h5>${item.role} | ${item.period}</h5>
                <p style="margin-top: 10px; color: #555; text-align: justify;">${item.description}</p>
            `;
            wadah.appendChild(kartu);
        });
    });

// 3. Memuat Data Pendidikan (Diubah menjadi Paragraf)
fetch('data/education.json')
    .then(response => response.json())
    .then(data => {
        const wadah = document.getElementById('wadah-pendidikan');
        data.forEach(item => {
            const kartu = document.createElement('div');
            kartu.className = 'kartu-riwayat';
            
            const gambarLogo = item.logo ? `<img src="${item.logo}" class="logo-pendidikan">` : '';

            kartu.innerHTML = `
                ${gambarLogo}
                <h4>${item.institution}</h4>
                <h5>${item.degree} | ${item.period}</h5>
                <p style="margin-top: 10px; color: #555; text-align: justify;">${item.description}</p>
            `;
            wadah.appendChild(kartu);
        });
    });

// 4. Memuat Data Proyek
fetch('data/projects.json')
    .then(response => response.json())
    .then(data => {
        const wadah = document.getElementById('wadah-proyek');
        data.forEach(item => {
            const kartu = document.createElement('div');
            kartu.className = 'kartu-proyek';
            
            // Memeriksa apakah ada gambar ikon proyek
            const gambarAtas = item.image ? `
                <div class="wadah-gambar-proyek">
                    <img src="${item.image}" alt="Ikon Proyek" class="ikon-proyek">
                </div>
            ` : '';

            kartu.innerHTML = `
                ${gambarAtas}
                <div class="konten-proyek">
                    <h4>${item.title}</h4>
                    <p style="text-align: justify;"><strong>${item.year}</strong> - ${item.description}</p>
                </div>
            `;
            wadah.appendChild(kartu);
        });
    });
