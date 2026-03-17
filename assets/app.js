$(document).ready(function () {
    console.log("Portfolio Loaded Ready.");

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
                scrollTop: target.offset().top - 100
            }, 800);
        }
    });

    // Navigation Active State Tracking
    const sections = ['hero', 'biografi', 'keterampilan', 'perjalanan', 'projek', 'github', 'sosmed'];
    const navLinks = $('nav a[href^="#"]');

    $(window).scroll(function () {
        let currentSection = "";
        const scrollPos = $(document).scrollTop() + 200;

        sections.forEach(id => {
            const section = $(`#${id}`);
            if (section.length && section.offset().top <= scrollPos) {
                currentSection = id;
            }
        });

        navLinks.removeClass('bg-emerald-500/10 text-emerald-500 shadow-sm').addClass('text-zinc-500');
        if (currentSection) {
            $(`nav a[href="#${currentSection}"]`).addClass('bg-emerald-500/10 text-emerald-500 shadow-sm').removeClass('text-zinc-500');
        }
    });

    // Data for dynamic rendering
    const skills = [
        { name: 'Laravel Framework', category: 'Web' },
        { name: 'Cyber Security (Hardening)', category: 'Security' },
        { name: 'Android Dev (Learning)', category: 'Mobile' },
        { name: 'Mikrotik & Cisco', category: 'Networking' },
        { name: 'Database MySQL', category: 'Data' },
        { name: 'GIT Version Control', category: 'Tools' },
        { name: 'Server Admin (Linux)', category: 'DevOps' },
        { name: 'Flutter (Basics)', category: 'Mobile' },
        { name: 'Penetration Testing (Basics)', category: 'Security' }
    ];

    const certifications = [
        { year: '2025', items: ['Prinsip Pemrograman Solid (Dicoding)', 'Memulai Pemrograman Java (Dicoding)'] },
        { year: '2024', items: ['Microsoft Office 365 (Pijar Mahir)', 'Operator Komputer Madya (BNSP)'] },
        { year: '2023', items: ['Junior Network Administrator (BNSP)', 'Fundamental Mikrotik/Cisco/Linux (ID-Networkers)', 'Belajar Dasar AWS Cloud (Dicoding)'] }
    ];

    const socialPosts = [
        { platform: 'instagram', content: 'Konfigurasi Mikrotik CCR untuk load balancing di kantor dinas. #networking #mikrotik #sysadmin', date: '1j yang lalu', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=400' },
        { platform: 'linkedin', content: 'Kini berfokus sebagai Security Engineer & Android Developer. Selalu belajar hal baru! #hacker #androiddev', date: 'Baru saja' },
        { platform: 'threads', content: 'Pentingnya security hardening pada server produksi untuk meminimalisir celah keamanan.', date: '2h yang lalu' }
    ];

    const experience = [
        { year: '2022 - Sekarang', title: 'Security Engineer (Self-Learning & Freelance)', company: 'Personal Hub', desc: 'Fokus pada hardening server Linux, manajemen firewall (IPTables/UFW), dan audit keamanan website.' },
        { year: '2024 - Sekarang', title: 'Android Developer (Learning)', company: 'Dicoding Academy', desc: 'Mempelajari arsitektur Android modern (MVVM), Jetpack Compose, dan integrasi API.' },
        { year: '2022 - 2024', title: 'Tenaga Teknis Jaringan', company: 'Dinas Komunikasi & Informatika Bone Bolango', desc: 'Pemasangan, perbaikan, dan monitoring jaringan komputer di seluruh gedung OPD menggunakan fiber optic dan wireless.' },
        { year: 'Jan - Mei 2024', title: 'Web Developer (Backend)', company: 'Alps Studio', desc: 'Pengembangan REST API menggunakan Laravel dan pengelolaan database MySQL untuk klien skala menengah.' },
        { year: '2022 - 2024', title: 'Operator Komputer', company: 'Dinas Kesehatan Kota Gorontalo', desc: 'Pengelolaan basis data kesehatan daerah dan dukungan teknis harian.' }
    ];

    const education = [
        { year: '2018 - 2023', title: 'Sarjana Sistem Informasi', institution: 'Universitas Negeri Gorontalo', desc: 'IPK 3.43 - Fokus pada Sistem Pendukung Keputusan dan Keamanan Jaringan.' },
        { year: '2015 - 2018', title: 'Teknik Komputer & Jaringan', institution: 'SMK Negeri 4 Kota Gorontalo', desc: 'Dasar-dasar networking, perakitan PC, dan administrasi Linux server.' },
        { year: '2012 - 2015', title: 'Pendidikan Dasar/Menengah', institution: 'Gorontalo Local School', desc: 'Aktif dalam organisasi teknologi dan olimpiade sains.' }
    ];

    const additionalProjects = [
        { title: 'Monitoring Jaringan OPD', categories: ['network', 'security'], year: '2023', desc: 'Sistem monitoring uptime jaringan antar instansi menggunakan Zabbix dan Grafana.', image: 'https://images.unsplash.com/photo-1551808834-f7246ec41f4c?auto=format&fit=crop&q=80&w=800' },
        { title: 'Mobile E-Government', categories: ['android', 'programming'], year: '2024', desc: 'Aplikasi layanan masyarakat untuk Bone Bolango dengan integrasi API dinas.', image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800' },
        { title: 'Security Audit Tool', categories: ['security', 'programming'], year: '2024', desc: 'Pentesting script toolkit menggunakan Python untuk audit kelemahan CMS populer.', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800' },
        { title: 'Landing Page Portofolio', categories: ['programming'], year: '2024', desc: 'Desain dan pengembangan website portofolio modern dengan optimasi SEO.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
        { title: 'Smart CCTV System', categories: ['network', 'android'], year: '2023', desc: 'Integrasi sistem CCTV pintar dengan akses mobile real-time via VPN.', image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800' }
    ];

    let activeProjectCategory = 'all';

    function renderSocialFeed(append = false) {
        if (!append) $('#social-feed').empty();

        if (socialPosts.length === 0) {
            $('#social-feed').html(`
                <div class="col-span-full py-12 text-center space-y-4 opacity-50">
                    <img src="assets/empty-data.svg" class="w-32 mx-auto transition-all hover:scale-105">
                    <p class="text-sm italic text-zinc-500">Belum ada postingan terbaru...</p>
                </div>
            `);
            $('#load-more-social').hide();
            return;
        }

        socialPosts.forEach(post => {
            const icon = post.platform === 'twitter' ? 'twitter' : (post.platform === 'instagram' ? 'instagram' : (post.platform === 'linkedin' ? 'linkedin' : (post.platform === 'threads' ? 'at-sign' : 'message-circle')));
            const imageHtml = post.image ? `
                <div class="aspect-square rounded-[8px] overflow-hidden border border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-zinc-900">
                    <img src="${post.image}" onerror="this.src='assets/not-found-image.svg'" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700">
                </div>` : '';

            const card = `
                <div class="card-border p-5 rounded-[10px] space-y-4 animate-in opacity-0 translate-y-4" style="animation-fill-mode: forwards; animation-duration: 0.6s;">
                    <div class="flex justify-between items-center">
                        <i data-lucide="${icon}" class="w-4 h-4 text-emerald-500"></i>
                        <span class="text-[10px] text-zinc-500 dark:text-zinc-600 font-medium uppercase tracking-widest">${post.date}</span>
                    </div>
                    ${imageHtml}
                    <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">${post.content}</p>
                </div>
            `;
            const $card = $(card);
            $('#social-feed').append($card);
            setTimeout(() => $card.removeClass('opacity-0 translate-y-4'), 100);
        });
        lucide.createIcons();
    }

    function renderSkills() {
        const $container = $('#skills-container');
        $container.empty();
        skills.slice(0, 6).forEach(skill => {
            $container.append(`<span class="px-4 py-2 border border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/30 rounded-[8px] text-sm text-zinc-700 dark:text-zinc-300 transition-all hover:border-emerald-500/30">${skill.name}</span>`);
        });
        if (skills.length > 6) {
            $container.after('<div class="pt-4"><button id="load-more-skills" class="text-xs font-bold text-zinc-500 hover:text-emerald-500 transition-colors uppercase tracking-widest">Lihat Semua Keterampilan +</button></div>');
            $(document).on('click', '#load-more-skills', function () {
                $(this).parent().remove();
                skills.slice(6).forEach(skill => {
                    $container.append(`<span class="px-4 py-2 border border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/30 rounded-[8px] text-sm text-zinc-700 dark:text-zinc-300 border-dashed">${skill.name}</span>`);
                });
            });
        }
    }

    function renderCertifications() {
        const $container = $('#certifications-container');
        $container.empty();

        const initialLimit = 3;
        const visible = certifications.slice(0, initialLimit);

        visible.forEach(cert => {
            const list = cert.items.map(item => `<li class="border-l border-emerald-500 pl-3">${item}</li>`).join('');
            $container.append(`
                <div class="animate-in mb-6">
                    <p class="text-[10px] text-zinc-600 uppercase tracking-widest font-bold mb-2">${cert.year}</p>
                    <ul class="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">${list}</ul>
                </div>
            `);
        });

        if (certifications.length > initialLimit) {
            $container.after('<div class="pt-4"><button id="load-more-certs" class="text-xs font-bold text-zinc-500 hover:text-emerald-500 transition-colors uppercase tracking-widest">Sertifikasi Lainnya +</button></div>');
            $(document).on('click', '#load-more-certs', function () {
                $(this).parent().remove();
                certifications.slice(initialLimit).forEach(cert => {
                    const list = cert.items.map(item => `<li class="border-l border-emerald-500 pl-3">${item}</li>`).join('');
                    $container.append(`
                        <div class="pt-6 border-t border-zinc-100 dark:border-white/5 mt-6 animate-in">
                            <p class="text-[10px] text-zinc-600 uppercase tracking-widest font-bold mb-2">${cert.year}</p>
                            <ul class="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">${list}</ul>
                        </div>
                    `);
                });
            });
        }
    }

    function renderTimeline(type, data, containerId) {
        const $container = $(`#${containerId}`);
        $container.empty();

        if (data.length === 0) {
            $container.html(`
                <div class="py-8 text-center space-y-4 opacity-70">
                    <img src="assets/empty-data.svg" class="w-24 mx-auto transition-all hover:rotate-3">
                    <p class="text-xs italic">Belum ada data tersedia...</p>
                </div>
            `);
            return;
        }

        const initialLimit = 3;
        const visible = data.slice(0, initialLimit);

        visible.forEach(item => {
            const html = `
                <div class="relative animate-in">
                    <span class="absolute -left-[40.4px] top-1.5 w-4 h-4 rounded-[4px] border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-950 z-10 shadow-sm"></span>
                    <div class="space-y-2">
                        <span class="text-xs font-medium text-zinc-500">${item.year}</span>
                        <h4 class="font-bold uppercase tracking-tight">${item.title}</h4>
                        <p class="text-sm text-zinc-600 dark:text-zinc-400">${item.company || item.institution}</p>
                        ${item.desc ? `<p class="text-xs text-zinc-500 leading-relaxed">${item.desc}</p>` : ''}
                    </div>
                </div>
            `;
            $container.append(html);
        });

        if (data.length > initialLimit) {
            const btnId = `load-more-${type}`;
            $container.after(`
                <div class="pt-8 pl-8 flex">
                    <button id="${btnId}" class="text-[10px] font-bold text-zinc-500 hover:text-emerald-500 transition-colors uppercase tracking-[0.2em] border-b border-dotted border-zinc-300 dark:border-zinc-700">Lihat Lebih Banyak +</button>
                </div>
            `);

            $(document).on('click', `#${btnId}`, function () {
                const btn = $(this);
                btn.hide();
                data.slice(initialLimit).forEach(item => {
                    const html = `
                        <div class="relative animate-in">
                            <span class="absolute -left-[40.4px] top-1.5 w-4 h-4 rounded-[4px] border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-950 z-10 transition-all hover:scale-125 shadow-sm"></span>
                            <div class="space-y-2">
                                <span class="text-xs font-medium text-zinc-500">${item.year}</span>
                                <h4 class="font-bold uppercase tracking-tight">${item.title}</h4>
                                <p class="text-sm text-zinc-600 dark:text-zinc-400">${item.company || item.institution}</p>
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

    // GitHub Data & Rendering
    const githubConfig = {
        username: 'abangucup',
        repoPerPage: 6,
        repoPage: 1,
        activityPerPage: 30,
        activityPage: 1,
        totalStars: 0,
        selectedYear: 'current'
    };

    async function fetchGitHubStats() {
        try {
            const response = await fetch(`https://api.github.com/users/${githubConfig.username}`);
            if (!response.ok) throw new Error('Gagal mengambil data GitHub');
            const data = await response.json();

            $('#github-repos').text(data.public_repos);
            $('#github-followers').text(data.followers);

            // Note: Total stars requires iterating through repos or using a search API
            // For efficiency, we'll estimate or update it as we fetch repos
        } catch (error) {
            console.error('GitHub Stats Error:', error);
        }
    }

    async function fetchGitHubRepos(append = false) {
        const $grid = $('#github-repos-grid');
        const $btn = $('#load-more-github');

        if (!append) {
            $grid.empty();
            githubConfig.repoPage = 1;
        }

        try {
            const response = await fetch(`https://api.github.com/users/${githubConfig.username}/repos?sort=updated&per_page=${githubConfig.repoPerPage}&page=${githubConfig.repoPage}`);
            if (!response.ok) throw new Error('Gagal mengambil repositori');
            const repos = await response.json();

            if (repos.length === 0 && !append) {
                $grid.html('<div class="col-span-full py-12 text-center text-zinc-500 italic text-sm">Tidak ada repositori publik ditemukan.</div>');
                $btn.hide();
                return;
            }

            repos.forEach((repo, index) => {
                const langColor = repo.language === 'JavaScript' ? 'bg-yellow-400' :
                    (repo.language === 'PHP' ? 'bg-indigo-500' :
                        (repo.language === 'HTML' ? 'bg-orange-500' :
                            (repo.language === 'CSS' ? 'bg-blue-500' : 'bg-zinc-400')));

                const card = `
                    <div class="card-border p-6 rounded-[12px] space-y-4 hover:border-emerald-500/30 transition-all group animate-in" style="animation-delay: ${index * 0.1}s">
                        <div class="flex justify-between items-start">
                            <i data-lucide="folder" class="w-5 h-5 text-emerald-500"></i>
                            <div class="flex gap-3 text-zinc-500">
                                <span class="flex items-center gap-1 text-[10px]"><i data-lucide="star" class="w-3 h-3"></i> ${repo.stargazers_count}</span>
                                <span class="flex items-center gap-1 text-[10px]"><i data-lucide="git-fork" class="w-3 h-3"></i> ${repo.forks_count}</span>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <h4 class="font-bold text-zinc-900 dark:text-white group-hover:text-emerald-500 transition-colors tracking-tight truncate" title="${repo.name}">${repo.name}</h4>
                            <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2 h-8">${repo.description || 'Tidak ada deskripsi.'}</p>
                        </div>
                        <div class="flex justify-between items-center pt-2">
                            <span class="flex items-center gap-1.5 text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                                <span class="w-2 h-2 rounded-full ${langColor}"></span>
                                ${repo.language || 'Plain Text'}
                            </span>
                            <a href="${repo.html_url}" target="_blank" class="text-zinc-400 hover:text-emerald-500 transition-colors">
                                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                            </a>
                        </div>
                    </div>
                `;
                $grid.append(card);
            });

            // Update Global stars (simple summation of visible ones)
            githubConfig.totalStars += repos.reduce((acc, curr) => acc + curr.stargazers_count, 0);
            $('#github-stars').text(githubConfig.totalStars);

            // Show/Hide Load More
            if (repos.length < githubConfig.repoPerPage) {
                $btn.hide();
            } else {
                $btn.show().removeClass('hidden');
            }

            lucide.createIcons();
        } catch (error) {
            console.error('GitHub Repos Error:', error);
            $grid.append('<div class="col-span-full py-12 text-center text-rose-500 text-sm">Gagal memuat repositori. Silakan coba lagi nanti.</div>');
        }
    }

    async function renderGitHubContribution(year = 'current') {
        const $graph = $('#github-contribution-graph');
        const $totalCount = $('#github-total-contributions');

        if (!$graph.length) return;

        try {
            // Show loading placeholder
            $graph.html('<div class="absolute inset-0 flex items-center justify-center text-zinc-500 text-[10px] animate-pulse uppercase tracking-widest font-bold">Memuat data...</div>');

            const url = year === 'current'
                ? `https://github-contributions-api.deno.dev/${githubConfig.username}.json`
                : `https://github-contributions-api.deno.dev/${githubConfig.username}.json?from=${year}-01-01&to=${year}-12-31`;

            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to fetch contributions');

            const data = await response.json();

            // The API returns { total: { "2024": X, ... }, contributions: [[{...}, ...], ...] }
            // If we use from/to, it usually returns the correct subset. 
            // Flatten the contributions array (array of weeks)
            let allDays = data.contributions.flat();

            // Local filtering as fallback if API parameters didn't work as expected, 
            // but for Deno API with from/to it should be precise.
            if (year !== 'current' && allDays.length > 0 && !allDays[0].date.startsWith(year)) {
                allDays = allDays.filter(day => day.date.startsWith(year));
            }

            if (allDays.length === 0) {
                $graph.html('<div class="absolute inset-0 flex items-center justify-center text-zinc-500 text-[10px]">Data tidak tersedia untuk tahun ini</div>');
                $totalCount.text('0');
                return;
            }

            // Update total contributions count
            let totalCount = 0;
            if (year === 'current') {
                totalCount = data.totalContributions || Object.values(data.total || {}).reduce((a, b) => a + Number(b), 0);
            } else {
                // If the API returns a 'total' object with year keys
                if (data.total && data.total[year] !== undefined) {
                    totalCount = data.total[year];
                } else {
                    totalCount = allDays.reduce((sum, day) => sum + (day.count || day.contributionCount || 0), 0);
                }
            }

            $totalCount.text(totalCount.toLocaleString());

            $graph.empty();

            // Map levels if they are strings (like "NONE", etc)
            const levelMap = { 'NONE': 0, 'FIRST_QUARTILE': 1, 'SECOND_QUARTILE': 2, 'THIRD_QUARTILE': 3, 'FOURTH_QUARTILE': 4 };

            allDays.forEach(day => {
                let level = day.level !== undefined ? day.level : day.contributionLevel;
                if (typeof level === 'string' && levelMap[level] !== undefined) {
                    level = levelMap[level];
                }

                const count = day.count !== undefined ? day.count : (day.contributionCount || 0);
                $graph.append(`<div class="contribution-day level-${level !== undefined ? level : 0}" title="${day.date}: ${count} kontribusi"></div>`);
            });

            // After rendering graph, also render activity summary if not current
            renderActivitySummary(year, allDays);

        } catch (error) {
            console.error('GitHub Contribution Error:', error);
            $graph.html('<div class="absolute inset-0 flex items-center justify-center text-red-500/50 text-[10px]">Gagal memuat kontribusi</div>');
            $totalCount.text('0');
        }
    }

    async function fetchGitHubActivity(append = false) {
        const $timeline = $('#github-activity-timeline');
        const $btn = $('#load-more-activity');

        if (!append) {
            $timeline.empty();
            githubConfig.activityPage = 1;
        }

        try {
            const response = await fetch(`https://api.github.com/users/${githubConfig.username}/events?per_page=${githubConfig.activityPerPage}&page=${githubConfig.activityPage}`);
            if (!response.ok) throw new Error('Gagal mengambil aktivitas');
            const events = await response.json();

            if (events.length === 0) {
                if (!append) {
                    $timeline.html(`
                        <div class="py-8 flex flex-col items-center justify-center text-zinc-500 gap-3">
                            <i data-lucide="ghost" class="w-8 h-8 opacity-20"></i>
                            <p class="text-xs font-medium uppercase tracking-widest">Aktivitas belum tersedia</p>
                        </div>
                    `);
                    lucide.createIcons();
                }
                $btn.hide();
                return;
            }

            const wrapper = $('<div class="github-timeline"></div>');
            $timeline.append(wrapper);

            // Group events by month
            const monthGroups = {};
            events.forEach(event => {
                const date = new Date(event.created_at);
                const monthName = date.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });
                if (!monthGroups[monthName]) monthGroups[monthName] = [];
                monthGroups[monthName].push(event);
            });

            Object.entries(monthGroups).forEach(([monthName, monthEvents]) => {
                wrapper.append(`
                    <div class="github-activity-month">
                        <span>${monthName}</span>
                    </div>
                `);

                // Group by type + repo
                const commitGroups = {}; // repo -> commits
                const otherEvents = [];

                monthEvents.forEach(event => {
                    if (event.type === 'PushEvent') {
                        const repo = event.repo.name;
                        if (!commitGroups[repo]) commitGroups[repo] = 0;
                        commitGroups[repo] += event.payload.commits?.length || 0;
                    } else {
                        otherEvents.push(event);
                    }
                });

                // Render Commit Group
                const reposWithCommits = Object.keys(commitGroups);
                if (reposWithCommits.length > 0) {
                    const totalCommits = Object.values(commitGroups).reduce((a, b) => a + b, 0);
                    const maxCommits = Math.max(...Object.values(commitGroups));

                    let repoItemsHtml = '';
                    reposWithCommits.forEach(repo => {
                        const count = commitGroups[repo];
                        repoItemsHtml += `
                            <div class="github-repo-item">
                                <a href="https://github.com/${repo}" target="_blank" class="github-repo-link">${repo}</a>
                                <div class="flex items-center gap-3">
                                    <span class="github-commit-count">${count} commit${count > 1 ? 's' : ''}</span>
                                    <div class="github-progress-container">
                                        <div class="github-progress-fill" style="width: ${Math.min(100, (count / maxCommits) * 100)}%"></div>
                                    </div>
                                </div>
                            </div>
                        `;
                    });

                    wrapper.append(`
                        <div class="github-activity-item">
                            <div class="github-activity-node">
                                <i data-lucide="git-commit" class="text-zinc-500"></i>
                            </div>
                            <div class="w-full">
                                <div class="github-activity-group-header">
                                    <span>Created ${totalCommits} commit${totalCommits > 1 ? 's' : ''} in ${reposWithCommits.length} repositor${reposWithCommits.length > 1 ? 'ies' : 'y'}</span>
                                    <i data-lucide="chevron-down" class="w-4 h-4 opacity-30"></i>
                                </div>
                                <div class="github-repo-list">
                                    ${repoItemsHtml}
                                </div>
                            </div>
                        </div>
                    `);
                }

                // Render Other Events (Creation, Star, etc.)
                otherEvents.forEach(event => {
                    let icon = 'activity';
                    let action = '';
                    const repoName = event.repo.name;
                    const dayStr = new Date(event.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });

                    switch (event.type) {
                        case 'CreateEvent':
                            icon = 'plus-circle';
                            action = `Created ${event.payload.ref_type} <span class="font-bold text-zinc-900 dark:text-white">${event.payload.ref || repoName}</span>`;
                            break;
                        case 'WatchEvent':
                            icon = 'star';
                            action = `Starred <span class="font-bold text-zinc-900 dark:text-white">${repoName}</span>`;
                            break;
                        default:
                            action = `Performed ${event.type.replace('Event', '')} in ${repoName}`;
                    }

                    wrapper.append(`
                        <div class="github-activity-item">
                            <div class="github-activity-node">
                                <i data-lucide="${icon}" class="text-zinc-500"></i>
                            </div>
                            <div class="w-full">
                                <div class="flex items-center justify-between text-sm">
                                    <div class="flex items-center gap-2">
                                        <span class="text-zinc-700 dark:text-zinc-300">${action}</span>
                                    </div>
                                    <span class="text-[10px] text-zinc-400 font-medium">${dayStr}</span>
                                </div>
                                <div class="flex items-center gap-1.5 text-xs mt-1">
                                    <a href="https://github.com/${repoName}" target="_blank" class="github-repo-link">${repoName}</a>
                                </div>
                            </div>
                        </div>
                    `);
                });
            });

            if (events.length < githubConfig.activityPerPage) {
                $btn.hide();
            } else {
                $btn.removeClass('hidden').show();
            }

            lucide.createIcons();
        } catch (error) {
            console.error('GitHub Activity Error:', error);
            if (!append) $timeline.html('<div class="py-4 text-rose-500 text-sm">Gagal memuat aktivitas.</div>');
        }
    }

    function renderActivitySummary(year, allDays) {
        const $timeline = $('#github-activity-timeline');
        const $btn = $('#load-more-activity');

        // Hide load more for historical summaries
        $btn.hide();
        $timeline.empty();

        if (year === 'current' || year == new Date().getFullYear()) {
            // For current year, we prefer live events
            fetchGitHubActivity();
            return;
        }

        // Aggregate by Month
        const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
        const summary = {};

        allDays.forEach(day => {
            const dateStr = day.date; // Format YYYY-MM-DD
            if (dateStr.startsWith(year)) {
                const date = new Date(dateStr);
                const m = date.getMonth();
                const count = day.count !== undefined ? day.count : (day.contributionCount || 0);

                if (count > 0) {
                    if (!summary[m]) summary[m] = { count: 0, days: 0 };
                    summary[m].count += count;
                    summary[m].days += 1;
                }
            }
        });

        const activeMonths = Object.keys(summary).sort((a, b) => b - a); // Newest month first

        if (activeMonths.length === 0) {
            $timeline.html(`
                <div class="py-8 flex flex-col items-center justify-center text-zinc-500 gap-3">
                    <i data-lucide="calendar-off" class="w-8 h-8 opacity-20"></i>
                    <p class="text-xs font-medium uppercase tracking-widest">Tidak ada aktivitas tercatat di tahun ${year}</p>
                </div>
            `);
            lucide.createIcons();
            $btn.hide();
            return;
        }

        const wrapper = $('<div class="github-timeline"></div>');
        $timeline.append(wrapper);

        activeMonths.forEach((m, index) => {
            const data = summary[m];
            const isHidden = index >= 3;
            const $monthItem = $(`
                <div class="github-activity-month-group" style="${isHidden ? 'display: none;' : ''}">
                    <div class="github-activity-month">
                        <span>${months[m]} ${year}</span>
                    </div>
                    <div class="github-activity-item">
                        <div class="github-activity-node">
                            <i data-lucide="git-commit" class="text-zinc-500"></i>
                        </div>
                        <div class="w-full">
                            <div class="github-activity-group-header">
                                Created ${data.count} commits during ${data.days} active days
                                <i data-lucide="chevron-down" class="w-3 h-3 opacity-50"></i>
                            </div>
                            <div class="github-repo-list">
                                <div class="github-repo-item">
                                    <div class="flex items-center justify-between gap-4">
                                        <div class="flex flex-col gap-1">
                                            <span class="github-repo-link">Contributions to various repositories</span>
                                            <span class="github-repo-meta">${data.count} commits</span>
                                        </div>
                                        <div class="github-progress-container h-1 w-24">
                                            <div class="github-progress-fill" style="width: ${Math.min(100, (data.count / 20) * 100)}%"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `);
            wrapper.append($monthItem);
        });

        lucide.createIcons();

        // Handle "Show more" button for historical data
        if (activeMonths.length > 3) {
            $btn.show().text('Show more activity').off('click').on('click', function() {
                wrapper.find('.github-activity-month-group').show();
                $(this).hide();
            });
        } else {
            $btn.hide();
        }

        lucide.createIcons();
    }

    // Load More GitHub Repos Event
    $('#load-more-github').on('click', async function () {
        const $btn = $(this);
        $btn.addClass('opacity-50 pointer-events-none');
        $btn.find('i').addClass('animate-spin');

        githubConfig.repoPage++;
        await fetchGitHubRepos(true);

        $btn.removeClass('opacity-50 pointer-events-none');
        $btn.find('i').removeClass('animate-spin');
    });

    // Load More Activity Event
    $('#load-more-activity').on('click', async function () {
        const $btn = $(this);
        $btn.addClass('opacity-50 pointer-events-none');

        githubConfig.activityPage++;
        await fetchGitHubActivity(true);

        $btn.removeClass('opacity-50 pointer-events-none');
    });

    // Initial Render
    setTimeout(() => {
        renderSocialFeed();
        renderSkills();
        renderCertifications();
        renderTimeline('exp', experience, 'experience-container');
        renderTimeline('edu', education, 'education-container');

        // GitHub Init
        // Year Selector Listener
        $('#github-year-selector').on('change', function () {
            githubConfig.selectedYear = $(this).val();
            // renderGitHubContribution already calls renderActivitySummary
            renderGitHubContribution(githubConfig.selectedYear);
        });

        fetchGitHubStats();
        fetchGitHubRepos();
        renderGitHubContribution();
        fetchGitHubActivity();

        // Tab Persistence
        const savedTab = localStorage.getItem('activeProjectTab') || 'all';
        $(`.project-tab[data-category="${savedTab}"]`).click();
    }, 800);

    // Global Image Error Handling
    $(document).on('error', 'img', function () {
        $(this).attr('src', 'assets/not-found-image.svg');
    });

    // Load More Social
    $('#load-more-social').on('click', function () {
        const btn = $(this);
        const originalText = btn.text();
        btn.text('Mencari data terbaru...').addClass('opacity-50 cursor-not-allowed');

        setTimeout(() => {
            // Simulate adding a new post
            socialPosts.push({ platform: 'twitter', content: 'Networking tips: Selalu gunakan key-based auth untuk SSH. Leak password adalah mimpi buruk. #sysadmin #security', date: 'Baru saja' });
            renderSocialFeed();
            btn.text(originalText).removeClass('opacity-50 cursor-not-allowed');
        }, 1500);
    });

    let currentProjectIndex = 0;
    const projectsPerPage = 6; // 2 rows of 2 on desktop

    function renderProjects(category = 'all', append = false) {
        const $grid = $('#project-grid');
        const $btnContainer = $('#load-more-projects').parent();

        if (!append) {
            $grid.empty();
            currentProjectIndex = 0;
        }

        const filtered = category === 'all'
            ? additionalProjects
            : additionalProjects.filter(p => p.categories.includes(category));

        if (filtered.length === 0) {
            $grid.html(`
                <div class="col-span-full py-16 text-center space-y-6 animate-in">
                    <img src="assets/empty-data.svg" class="w-48 mx-auto transition-transform hover:scale-105 duration-500">
                    <p class="text-sm font-medium text-zinc-500 italic">Belum ada projek untuk kategori ini...</p>
                </div>
            `);
            $btnContainer.hide();
            return;
        }

        const nextBatch = filtered.slice(currentProjectIndex, currentProjectIndex + (append ? 3 : projectsPerPage));

        nextBatch.forEach((proj, index) => {
            const colors = {
                'network': 'text-blue-500 border-blue-500/30',
                'programming': 'text-amber-500 border-amber-500/30',
                'android': 'text-indigo-500 border-indigo-500/30',
                'security': 'text-rose-500 border-rose-500/30'
            };

            const badges = proj.categories.map(cat => {
                const colorClass = colors[cat] || 'text-emerald-500 border-emerald-500/30';
                return `<span class="px-2.5 py-1 rounded-[6px] border ${colorClass} bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md text-[9px] font-bold uppercase tracking-wider shadow-sm">${cat}</span>`;
            }).join('');

            const card = `
                <div class="card-border p-4 rounded-[10px] space-y-5 cursor-pointer group animate-in" style="animation-delay: ${index * 0.1}s">
                    <div class="aspect-video bg-zinc-100 dark:bg-zinc-900 rounded-[8px] overflow-hidden relative border border-zinc-200 dark:border-white/5">
                        <div class="absolute inset-0 bg-gradient-to-t from-zinc-50/80 dark:from-zinc-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 z-10">
                            <p class="text-sm font-medium">Lihat Detail <i data-lucide="arrow-right" class="inline w-4 h-4 ml-1"></i></p>
                        </div>
                        <img src="${proj.image}" onerror="this.src='assets/not-found-image.svg'" alt="${proj.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                        <div class="absolute top-3 left-3 flex flex-wrap gap-1.5 z-20">
                            ${badges}
                        </div>
                    </div>
                    <div class="space-y-3">
                        <div class="flex justify-between items-start gap-4">
                            <h4 class="font-bold group-hover:text-emerald-500 transition-colors uppercase tracking-tight text-lg">${proj.title}</h4>
                            <span class="text-[10px] px-2 py-1 bg-zinc-50 dark:bg-white/5 rounded-[6px] border border-zinc-200 dark:border-white/10 text-zinc-400 font-bold">${proj.year}</span>
                        </div>
                        <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">${proj.desc}</p>
                        <a href="detail.html" class="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-emerald-500 pt-3 group-hover:gap-3 transition-all">
                            Open Details <i data-lucide="external-link" class="w-3 h-3"></i>
                        </a>
                    </div>
                </div>
            `;
            $grid.append(card);
        });

        currentProjectIndex += nextBatch.length;

        if (currentProjectIndex < filtered.length) {
            $btnContainer.show().html(`
                <button id="load-more-projects" class="px-8 py-3 border border-zinc-200 dark:border-white/10 rounded-[10px] text-xs font-bold uppercase tracking-widest hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all">
                    Muat Lebih Banyak +
                </button>
            `);
        } else {
            $btnContainer.hide();
        }

        lucide.createIcons();
    }

    // Tab Event
    $('.project-tab').on('click', function () {
        const isSecurity = $(this).data('category') === 'security';
        $('.project-tab').removeClass('active border-emerald-500/20 bg-emerald-500/10 text-emerald-500 shadow-sm').addClass('border-zinc-200 dark:border-white/5 text-zinc-500');
        $(this).addClass('active border-emerald-500/20 bg-emerald-500/10 text-emerald-500 shadow-sm').removeClass('border-zinc-200 dark:border-white/5 text-zinc-500');

        activeProjectCategory = $(this).data('category');
        localStorage.setItem('activeProjectTab', activeProjectCategory);
        renderProjects(activeProjectCategory);
    });

    // Load More Projects
    $(document).on('click', '#load-more-projects', function () {
        renderProjects(activeProjectCategory, true);
    });

    // Auto Refresh Simulation (Live update indication)
    setInterval(() => {
        const randomCard = $('#social-feed').children().last();
        randomCard.addClass('border-emerald-500/50 scale-[1.02] shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all duration-1000');
        setTimeout(() => {
            randomCard.removeClass('border-emerald-500/50 scale-[1.02] shadow-[0_0_20px_rgba(16,185,129,0.1)]');
        }, 5000);
    }, 60000); // 1 minute
});
