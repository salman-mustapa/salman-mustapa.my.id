$(document).ready(function () {
    console.log("Portfolio Salman Mustapa Loaded Ready.");

    // Theme Toggle Logic
    const html = $('html');
    const themeBtn = $('#theme-toggle');
    const themeBtnMobile = $('#theme-toggle-mobile');

    // Check for saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'dark') {
        html.addClass('dark');
    } else {
        html.removeClass('dark');
    }

    function toggleTheme() {
        html.toggleClass('dark');
        const currentTheme = html.hasClass('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
        lucide.createIcons();
    }

    themeBtn.on('click', toggleTheme);
    themeBtnMobile.on('click', toggleTheme);

    // Lucide Icons Initial
    lucide.createIcons();

    // Smooth scroll for nav links
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });

    // Navigation Active State Tracking (Desktop & App-style Mobile Bottom Bar)
    const sections = ['hero', 'biografi', 'company', 'keterampilan', 'haki', 'perjalanan', 'projek', 'services', 'blog', 'github', 'sosmed', 'contact'];
    const desktopLinks = $('nav.hidden.md\\:flex a[href^="#"]');
    const mobileLinks = $('nav.md\\:hidden a.mobile-nav-item[href^="#"]');

    $(window).scroll(function () {
        let currentSection = "";
        const scrollPos = $(document).scrollTop() + 200;

        sections.forEach(id => {
            const section = $(`#${id}`);
            if (section.length && section.offset().top <= scrollPos) {
                currentSection = id;
            }
        });

        desktopLinks.removeClass('bg-emerald-500/10 text-emerald-500 shadow-sm').addClass('text-zinc-500');
        mobileLinks.removeClass('active-nav text-emerald-500 font-bold dark:text-emerald-400').addClass('text-zinc-500 dark:text-zinc-400');

        if (currentSection) {
            $(`nav.hidden.md\\:flex a[href="#${currentSection}"]`).addClass('bg-emerald-500/10 text-emerald-500 shadow-sm').removeClass('text-zinc-500');
            $(`nav.md\\:hidden a.mobile-nav-item[href="#${currentSection}"]`).addClass('active-nav text-emerald-500 font-bold dark:text-emerald-400').removeClass('text-zinc-500 dark:text-zinc-400');
        }
    });

    // Data for dynamic rendering
    const skills = [
        { name: 'Express.js (Node.js)', category: 'Backend' },
        { name: 'PHP (Laravel Framework)', category: 'Backend' },
        { name: 'EMQX MQTT Broker (IoT Telemetry)', category: 'IoT' },
        { name: 'SentinelOne XDR (Cybersecurity)', category: 'Security' },
        { name: 'PostgreSQL & MySQL', category: 'Data' },
        { name: 'Linux Server Hardening & VPS', category: 'DevOps' },
        { name: 'RESTful API & WebSockets', category: 'Backend' },
        { name: 'Mikrotik & Cisco Networking', category: 'Networking' },
        { name: 'Vue.js (API Integration)', category: 'Frontend' },
        { name: 'Flutter (API Integration)', category: 'Mobile' },
        { name: 'GIT Version Control', category: 'Tools' },
        { name: 'Docker Containers', category: 'DevOps' }
    ];

    const certifications = [
        { year: '2025', items: ['Prinsip Pemrograman SOLID (Dicoding)', 'Memulai Pemrograman Java (Dicoding)'] },
        { year: '2024', items: ['Operator Komputer Madya (BNSP)', 'Microsoft Office 365 (Pijar Mahir)'] },
        { year: '2023', items: ['Junior Network Administrator (BNSP)', 'Fundamental Mikrotik/Cisco/Linux (ID-Networkers)'] }
    ];

    const socialPosts = [
        { platform: 'linkedin', content: 'PT SAMRIFA STUDIO TEKNOLOGI (samrifa.com) siap menghadirkan solusi software studio, IoT telemetry, dan backend engineering terbaik. #samrifa #softwarestudio', date: 'Maret 2026' },
        { platform: 'linkedin', content: 'Mengoptimalkan EMQX MQTT Broker untuk pemrosesan telemetri sensor real-time pada proyek NetraHome. latency < 50ms! #iot #mqtt #nodejs', date: 'Maret 2026' },
        { platform: 'linkedin', content: 'Implementasi SentinelOne XDR untuk perlindungan server & endpoint dari malware dan ancaman zero-day. #cybersecurity #xdr #sysadmin', date: 'Agustus 2025' },
        { platform: 'threads', content: 'Aplikasi Calculator IMT / Antropometri resmi dipublikasi di Playstore & terdaftar HAKI RI (https://antropometri.samrifa.com).', date: 'Juni 2026' }
    ];

    const experience = [
        { year: '2024 - Sekarang', title: 'Founder & Lead Architect', company: 'PT SAMRIFA STUDIO TEKNOLOGI (samrifa.com)', desc: 'Mendirikan dan memimpin PT SAMRIFA STUDIO TEKNOLOGI (https://samrifa.com), menghadirkan solusi backend performa tinggi, IoT telemetry, dan keamanan infrastruktur digital.' },
        { year: 'Maret 2026 - Sekarang', title: 'Backend Engineer (IoT Specialist)', company: 'NetraHome (Smart Home Project)', desc: 'Merancang backend Express.js, memproses telemetri sensor via EMQX MQTT Broker, mengelola EMQX Dashboard, serta menyediakan RESTful API & WebSockets untuk Web Dashboard (Vue.js) dan Mobile App (Flutter).' },
        { year: 'Agustus 2025 - Sekarang', title: 'Security Engineer & Endpoint Specialist', company: 'SentinelOne XDR Security Implementation', desc: 'Deploy & konfigurasi SentinelOne XDR pada server backend, analisis telemetry ancaman real-time, incident response, dan hardening Linux VPS.' },
        { year: 'Jan - Mei 2024', title: 'Web Developer (Backend)', company: 'Alps Studio', desc: 'Pengembangan RESTful API menggunakan Laravel Framework & Express.js, desain skema database MySQL/PostgreSQL, serta deployment ke VPS Linux.' },
        { year: '2022 - 2024', title: 'Tenaga Teknis Jaringan & Server', company: 'Dinas Komunikasi & Informatika Bone Bolango', desc: 'Pengelolaan jaringan komputer lokal OPD, instalasi server Linux lokal, pemantauan bandwidth, dan troubleshooting Mikrotik/Cisco.' },
        { year: '2022 - 2024', title: 'Operator Komputer & Internal Dev', company: 'Dinas Kesehatan Kota Gorontalo', desc: 'Pengembangan aplikasi internal pendataan pegawai dan pengelolaan basis data pelaporan kesehatan daerah.' },
        { year: '2019 - 2023', title: 'Asisten Laboratorium Komputer', company: 'Teknik Informatika Univ. Negeri Gorontalo', desc: 'Pengelolaan server lokal laboratorium, pemeliharaan jaringan komputer, dan sistem monitoring CCTV.' }
    ];

    const education = [
        { year: '2018 - 2023', title: 'Sarjana Sistem Informasi (S.Kom)', institution: 'Universitas Negeri Gorontalo', desc: 'IPK 3.43 - Pemegang Hak Cipta HAKI (2023) atas Sistem Pengelolaan Sarana Prasarana Laboratorium FT UNG.' },
        { year: '2015 - 2018', title: 'Teknik Komputer & Jaringan (TKJ)', institution: 'SMK Negeri 4 Kota Gorontalo', desc: 'Peserta Lomba Kompetensi Siswa (LKS) IT Networking 2018. Penguasaan routing Mikrotik, Cisco, & Linux administration.' }
    ];

    const additionalProjects = [
        {
            id: 'antropometri',
            title: 'Calculators IMT / Antropometri (HAKI 2026)',
            categories: ['backend', 'android'],
            year: '2026',
            desc: 'Aplikasi Android & Web kalkulator antropometri gizi untuk penelitian dosen. Dipublikasikan di Google Playstore & HAKI RI No. 001297659.',
            overview: 'Proyek pengembangan aplikasi kalkulator antropometri dan kalkulator status gizi anak/dewasa berbasis Android & Web yang dibangun khusus untuk mendukung penelitian ilmiah dosen. Sistem ini mampu menghitung Z-score (TB/U, BB/U, BB/TB) berdasarkan standar WHO secara presisi.',
            tech: 'Android SDK, Java/Kotlin, Express.js API, RESTful JSON, Tailwind CSS',
            role: 'Full-Stack Developer & Android Specialist',
            liveUrl: 'https://antropometri.samrifa.com',
            challenges: [
                'Implementasi Algoritma Antropometri Standar WHO: Menghitung persentil dan Z-score secara presisi dari data input tinggi badan, berat badan, serta usia anak.',
                'Penerbitan Google Playstore & Sertifikasi HAKI: Berhasil di-publish resmi di Google Playstore dan terdaftar sah di HAKI RI No. 001297659.',
                'Penyediaan Akses Web Live: Menyediakan versi web di antropometri.samrifa.com yang terhubung langsung dengan backend API.'
            ],
            images: [
                'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1200',
                'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200',
                'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=1200'
            ]
        },
        {
            id: 'samrifa',
            title: 'PT SAMRIFA STUDIO TEKNOLOGI Platform',
            categories: ['backend', 'security'],
            year: '2026',
            desc: 'Platform utama situs resmi PT SAMRIFA STUDIO TEKNOLOGI (samrifa.com) untuk bisnis software studio, telemetri IoT, dan proteksi server.',
            overview: 'Pengembangan platform bisnis resmi PT SAMRIFA STUDIO TEKNOLOGI (PT Perorangan). Website ini dirancang khusus untuk mempresentasikan portofolio perusahaan studio software, integrasi telemetri IoT, aplikasi web/mobile, serta layanan proteksi infrastruktur digital.',
            tech: 'Node.js, Express.js, Nginx Reverse Proxy, SSL/TLS, Tailwind CSS',
            role: 'Founder & Lead Software Architect',
            liveUrl: 'https://samrifa.com',
            challenges: [
                'Arsitektur Software Studio Modern: Merancang fondasi platform digital untuk PT Perorangan yang cepat, responsif, dan teroptimasi SEO.',
                'Integrasi Subdomain Services: Menggabungkan subdomain portofolio, analitik Umami, dan produk aplikasi seperti antropometri.samrifa.com.',
                'High Security Standards: Pengamanan server VPS Linux dengan Nginx SSL, firewall UFW, dan SentinelOne XDR monitoring.'
            ],
            images: [
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
                'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200',
                'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200'
            ]
        },
        {
            id: 'netrahome',
            title: 'NetraHome IoT Telemetry Platform',
            categories: ['backend', 'iot', 'security'],
            year: '2026',
            desc: 'Platform backend real-time ingest telemetri sensor berbasis Express.js, EMQX MQTT Broker, PostgreSQL, Web Dashboard (Vue.js) & Mobile (Flutter).',
            overview: 'Proyek NetraHome difokuskan pada pengolahan data telemetri sensor smart home berlatensi rendah secara real-time. Layanan backend dibangun menggunakan Node.js (Express.js) dan terhubung ke EMQX MQTT Broker dengan enkripsi TLS/SSL serta otentikasi token ACL untuk menjamin integritas komunikasi antar node sensor.',
            tech: 'Express.js, EMQX MQTT Broker, PostgreSQL, WebSockets, Vue.js API, Flutter API',
            role: 'Backend Engineer & IoT Telemetry Specialist',
            liveUrl: '',
            challenges: [
                'High Throughput Ingestion: Mengkonfigurasi EMQX Broker untuk menangani ribuan paket pesan sensor per detik tanpa loss.',
                'Cross-Platform API Integration: Membangun RESTful API dan WebSocket gateway untuk mensuplay data telemetri ke Web Dashboard (Vue.js) dan Aplikasi Mobile (Flutter).',
                'AI Token & Security Monitoring: Membangun backend service pendukung analisis otomatis data sensor dan monitoring penggunaan token AI.'
            ],
            images: [
                'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1200',
                'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
                'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200'
            ]
        },
        {
            id: 'sentinelone',
            title: 'SentinelOne XDR & Server Hardening',
            categories: ['security', 'backend'],
            year: '2025',
            desc: 'Implementasi Endpoint Detection and Response SentinelOne XDR untuk keamanan server Linux VPS & deteksi malware zero-day.',
            overview: 'Implementasi SentinelOne XDR (Extended Detection and Response) pada infrastruktur server backend dan VPS Linux. Proyek ini bertujuan memberikan visibilitas penuh terhadap lalu lintas proses, deteksi ancaman malware zero-day, dan mitigasi risiko ransomware.',
            tech: 'SentinelOne XDR Agent, Linux VPS Hardening, Syslog, UFW Firewall, Bash Scripts',
            role: 'Security Engineer & Endpoint Specialist',
            liveUrl: '',
            challenges: [
                'Endpoint Hardening: Mengkonfigurasi kebijakan SentinelOne agent pada Linux VPS tanpa mengganggu kinerja service backend.',
                'Real-Time Threat Telemetry: Memantau log insiden dan telemetry ancaman di SentinelOne Management Console.',
                'Incident Response Automation: Membuat skrip otomasi tindakan isolasi jaringan saat terdeteksi aktivitas mencurigakan.'
            ],
            images: [
                'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
                'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
                'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200'
            ]
        },
        {
            id: 'silet',
            title: 'SILET Diskominfo Bone Bolango (HAKI 2021)',
            categories: ['backend', 'network'],
            year: '2021',
            desc: 'Sistem Informasi Layanan Internet Masyarakat (SILET) Dinas Komunikasi Dan Informatika Kabupaten Bone Bolango. HAKI RI No. 000269388.',
            overview: 'Sistem Informasi Layanan Internet Masyarakat (SILET) dikembangkan untuk Dinas Komunikasi dan Informatika Kabupaten Bone Bolango sebagai sarana pengaduan, pengawasan titik lokasi Wi-Fi publik, dan laporan jaringan daerah. Terdaftar resmi di HAKI RI No. 000269388.',
            tech: 'PHP Laravel Framework, MySQL Database, Mikrotik API, Bootstrap CSS',
            role: 'Backend & Web Developer (Kerja Praktek)',
            liveUrl: '',
            challenges: [
                'Integrasi API Jaringan Mikrotik: Mengkoneksikan backend web ke router Mikrotik untuk cek status bandwidth lokasi publik.',
                'Manajemen Pengaduan Masyarakat: Menyediakan alur pelaporan gangguan internet warga secara transparan.',
                'Sertifikasi HAKI Kemenkumham: Berhasil didaftarkan sebagai Ciptaan Program Komputer resmi di HAKI RI.'
            ],
            images: [
                'https://images.unsplash.com/photo-1551808834-f7246ec41f4c?auto=format&fit=crop&q=80&w=1200',
                'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
                'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200'
            ]
        },
        {
            id: 'lab-ft-ung',
            title: 'Sistem Pengelolaan Sarana Lab FT UNG (HAKI 2023)',
            categories: ['backend', 'security'],
            year: '2023',
            desc: 'Aplikasi inventarisasi & manajemen sarana laboratorium Fakultas Teknik UNG berbasis Android & Web. HAKI RI No. 000480059.',
            overview: 'Pengembangan Sistem Informasi Pengelolaan Sarana dan Prasarana Laboratorium Berbasis Android & Web di Fakultas Teknik Universitas Negeri Gorontalo. Aplikasi ini memudahkan pencatatan inventaris alat lab, peminjaman sarana, dan maintenance berkala.',
            tech: 'Android SDK, PHP Laravel Backend, MySQL, QR Code Scanner',
            role: 'Full-Stack Developer (Skripsi S.Kom UNG)',
            liveUrl: '',
            challenges: [
                'Pencatatan Inventaris QR-Code: Mengintegrasikan scanner QR-Code pada aplikasi Android untuk verifikasi kondisi alat laboratorium.',
                'Aksesibilitas Multi-User: Pengaturan hak akses untuk Asisten Lab, Dosen, dan Mahasiswa.',
                'Perlindungan HAKI 50 Tahun: Didaftarkan secara sah di Kemenkumham RI dengan nomor pencatatan 000480059.'
            ],
            images: [
                'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200',
                'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
                'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200'
            ]
        }
    ];

    window.additionalProjectsData = additionalProjects;

    function renderSocialFeed() {
        $('#social-feed').empty();
        socialPosts.forEach(post => {
            const icon = post.platform === 'twitter' ? 'twitter' : (post.platform === 'instagram' ? 'instagram' : (post.platform === 'linkedin' ? 'linkedin' : (post.platform === 'threads' ? 'at-sign' : 'message-circle')));
            const card = `
                <div class="card-border p-5 rounded-[10px] space-y-4 animate-in">
                    <div class="flex justify-between items-center">
                        <i data-lucide="${icon}" class="w-4 h-4 text-emerald-500"></i>
                        <span class="text-[10px] text-zinc-500 font-medium uppercase tracking-widest">${post.date}</span>
                    </div>
                    <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">${post.content}</p>
                </div>
            `;
            $('#social-feed').append(card);
        });
        lucide.createIcons();
    }

    function renderSkills() {
        const $container = $('#skills-container');
        $container.empty();
        skills.slice(0, 8).forEach(skill => {
            $container.append(`<span class="px-4 py-2 border border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/30 rounded-[8px] text-sm text-zinc-700 dark:text-zinc-300 transition-all hover:border-emerald-500/30 font-medium">${skill.name}</span>`);
        });
        if (skills.length > 8) {
            $container.after('<div class="pt-4"><button id="load-more-skills" class="text-xs font-bold text-zinc-500 hover:text-emerald-500 transition-colors uppercase tracking-widest">Lihat Semua Keterampilan +</button></div>');
            $(document).on('click', '#load-more-skills', function () {
                $(this).parent().remove();
                skills.slice(8).forEach(skill => {
                    $container.append(`<span class="px-4 py-2 border border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/30 rounded-[8px] text-sm text-zinc-700 dark:text-zinc-300 border-dashed font-medium">${skill.name}</span>`);
                });
            });
        }
    }

    function renderCertifications() {
        const $container = $('#certifications-container');
        $container.empty();

        certifications.forEach(cert => {
            const list = cert.items.map(item => `<li class="border-l-2 border-emerald-500 pl-3">${item}</li>`).join('');
            $container.append(`
                <div class="animate-in mb-6">
                    <p class="text-[10px] text-emerald-500 uppercase tracking-widest font-bold mb-2">${cert.year}</p>
                    <ul class="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 font-medium">${list}</ul>
                </div>
            `);
        });
    }

    function renderTimeline(type, data, containerId) {
        const $container = $(`#${containerId}`);
        $container.empty();

        const visible = data.slice(0, 4);
        visible.forEach(item => {
            const html = `
                <div class="relative animate-in">
                    <span class="absolute -left-[40.4px] top-1.5 w-4 h-4 rounded-[4px] border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-950 z-10 shadow-sm"></span>
                    <div class="space-y-2">
                        <span class="text-xs font-semibold text-emerald-500">${item.year}</span>
                        <h4 class="font-bold uppercase tracking-tight">${item.title}</h4>
                        <p class="text-sm font-semibold text-zinc-700 dark:text-zinc-300">${item.company || item.institution}</p>
                        ${item.desc ? `<p class="text-xs text-zinc-500 leading-relaxed">${item.desc}</p>` : ''}
                    </div>
                </div>
            `;
            $container.append(html);
        });

        if (data.length > 4) {
            const btnId = `load-more-${type}`;
            $container.after(`
                <div class="pt-8 pl-8 flex">
                    <button id="${btnId}" class="text-[10px] font-bold text-zinc-500 hover:text-emerald-500 transition-colors uppercase tracking-[0.2em] border-b border-dotted border-zinc-300 dark:border-zinc-700">Lihat Lebih Banyak +</button>
                </div>
            `);

            $(document).on('click', `#${btnId}`, function () {
                const btn = $(this);
                btn.hide();
                data.slice(4).forEach(item => {
                    const html = `
                        <div class="relative animate-in">
                            <span class="absolute -left-[40.4px] top-1.5 w-4 h-4 rounded-[4px] border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-950 z-10 transition-all hover:scale-125 shadow-sm"></span>
                            <div class="space-y-2">
                                <span class="text-xs font-semibold text-emerald-500">${item.year}</span>
                                <h4 class="font-bold uppercase tracking-tight">${item.title}</h4>
                                <p class="text-sm font-semibold text-zinc-700 dark:text-zinc-300">${item.company || item.institution}</p>
                                ${item.desc ? `<p class="text-xs text-zinc-500 leading-relaxed">${item.desc}</p>` : ''}
                            </div>
                        </div>
                    `;
                    $container.append(html);
                });
                lucide.createIcons();
            });
        }
    }

    function renderProjects(category = 'all') {
        const $grid = $('#project-grid');
        if (!$grid.length) return;
        $grid.empty();

        const filtered = category === 'all'
            ? additionalProjects
            : additionalProjects.filter(p => p.categories.includes(category));

        filtered.forEach(project => {
            const card = `
                <div class="card-border rounded-[12px] overflow-hidden group flex flex-col justify-between animate-in">
                    <div class="space-y-4 p-5">
                        <div class="aspect-video rounded-[8px] overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 relative">
                            <img src="${project.images ? project.images[0] : project.image}" alt="${project.title}" loading="lazy" decoding="async" onerror="this.src='assets/not-found-image.svg'" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500">
                            <span class="absolute top-3 right-3 bg-zinc-950/80 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-md">${project.year}</span>
                        </div>
                        <h4 class="text-base font-bold group-hover:text-emerald-500 transition-colors uppercase tracking-tight">${project.title}</h4>
                        <p class="text-xs text-zinc-500 leading-relaxed line-clamp-3">${project.desc}</p>
                    </div>
                    <div class="px-5 pb-5 pt-2 flex justify-between items-center border-t border-zinc-100 dark:border-white/5">
                        <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-500">${project.categories.join(' • ')}</span>
                        <a href="detail.html?id=${project.id}" class="text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:text-emerald-500 transition-colors flex items-center gap-1">Detail <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i></a>
                    </div>
                </div>
            `;
            $grid.append(card);
        });

        lucide.createIcons();
    }

    // Project Category Filter Handler
    $('.project-tab').on('click', function () {
        $('.project-tab').removeClass('active bg-emerald-500/10 text-emerald-500 border-emerald-500/20').addClass('text-zinc-500 border-zinc-200 dark:border-white/5');
        $(this).addClass('active bg-emerald-500/10 text-emerald-500 border-emerald-500/20').removeClass('text-zinc-500');
        renderProjects($(this).data('category'));
    });

    // GitHub 100% Dynamic API Sync (User: salman-mustapa)
    const githubConfig = {
        username: 'salman-mustapa'
    };

    async function fetchGitHubStats() {
        try {
            const response = await fetch(`https://api.github.com/users/${githubConfig.username}`);
            if (!response.ok) throw new Error('Gagal mengambil data GitHub');
            const data = await response.json();

            $('#github-repos').text(data.public_repos || 24);
            $('#github-followers').text(data.followers || 0);

            // Fetch repos to sum stargazers count
            const reposResponse = await fetch(`https://api.github.com/users/${githubConfig.username}/repos?per_page=100`);
            if (reposResponse.ok) {
                const repos = await reposResponse.json();
                const totalStars = repos.reduce((acc, curr) => acc + (curr.stargazers_count || 0), 0);
                $('#github-stars').text(totalStars);
            }
        } catch (error) {
            console.error('GitHub Stats API Error:', error);
            $('#github-repos').text(24);
        }
    }

    async function fetchLiveContributionCount() {
        try {
            const response = await fetch(`https://github-contributions-api.deno.dev/${githubConfig.username}.json`);
            if (response.ok) {
                const data = await response.json();
                if (data.totalContributions) {
                    $('#github-total-contributions').text((data.totalContributions).toLocaleString());
                }
            }
        } catch (error) {
            console.error('Contribution count API error:', error);
        }
    }

    // Project Request Form Handler (WhatsApp & Email Direct Triggers)
    $('#btn-send-wa').on('click', function () {
        const name = $('#req-name').val() || 'Calon Klien';
        const category = $('#req-category').val();
        const desc = $('#req-desc').val() || 'Saya bermaksud berkonsultasi mengenai proyek.';

        const text = `Halo Salman Mustapa,%0ANama: ${encodeURIComponent(name)}%0AKategori Proyek: ${encodeURIComponent(category)}%0ADetail Kebutuhan: ${encodeURIComponent(desc)}`;
        window.open(`https://wa.me/6282154488769?text=${text}`, '_blank');
    });

    $('#btn-send-email').on('click', function () {
        const name = $('#req-name').val() || 'Calon Klien';
        const category = $('#req-category').val();
        const desc = $('#req-desc').val() || 'Saya bermaksud berkonsultasi mengenai proyek.';

        const subject = encodeURIComponent(`Request Proyek: ${category} - ${name}`);
        const body = encodeURIComponent(`Halo Salman Mustapa,\n\nNama/Perusahaan: ${name}\nKategori Proyek: ${category}\n\nDetail Kebutuhan:\n${desc}\n\nTerima kasih.`);
        window.location.href = `mailto:id.salmanmustapa@gmail.com?subject=${subject}&body=${body}`;
    });

    // Initializations
    renderSkills();
    renderCertifications();
    renderTimeline('career', experience, 'experience-container');
    renderTimeline('education', education, 'education-container');
    renderProjects('all');
    renderSocialFeed();
    fetchGitHubStats();
    fetchLiveContributionCount();
});
