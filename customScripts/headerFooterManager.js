class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
        <header id="header" class="header d-flex align-items-center light-background sticky-top">
            <div class="container-fluid position-relative d-flex align-items-center justify-content-between">
                <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0">
                    <h1 class="sitename">SHIHAB</h1>
                </a>
                <nav id="navmenu" class="navmenu">
                    <ul>
                        <li><a href="index.html" class="nav-link">Home</a></li>
                        <li><a href="about.html" class="nav-link">About</a></li>
                        <li><a href="resume.html" class="nav-link">Resume</a></li>
                        <li><a href="services.html" class="nav-link">Projects</a></li>
                        <!-- <li><a href="portfolio.html" class="nav-link">Portfolio</a></li>
                        <li class="dropdown">
                            <a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                            <ul>
                                <li><a href="#">Dropdown 1</a></li>
                                <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                                    <ul>
                                        <li><a href="#">Deep Dropdown 1</a></li>
                                        <li><a href="#">Deep Dropdown 2</a></li>
                                        <li><a href="#">Deep Dropdown 3</a></li>
                                        <li><a href="#">Deep Dropdown 4</a></li>
                                        <li><a href="#">Deep Dropdown 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Dropdown 2</a></li>
                                <li><a href="#">Dropdown 3</a></li>
                                <li><a href="#">Dropdown 4</a></li>
                            </ul>
                        </li> -->
                        <!-- <li><a href="contact.html" class="nav-link">Contact</a></li> -->
                    </ul>
                    <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>
                <div class="header-social-links">
                    <a href="https://github.com/shihab173066" class="github" target="_blank">
                        <i class="bi bi-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/mdshihab/" class="linkedin" target="_blank">
                        <i class="bi bi-linkedin"></i>
                    </a>
                    <a href="https://www.hackerrank.com/profile/shihab_hossainSH" class="hackerrank" target="_blank">
                        <i class="bi bi-code-slash"></i>
                    </a>
                    <a href="mailto:shihab.hossainSH@gmail.com" class="email">
                        <i class="bi bi-envelope"></i>
                    </a>
                    <a href="https://leetcode.com/u/shihab_dev2024/" class="leetcode" target="_blank">
                        <i class="bi bi-lightning"></i>
                    </a>
                </div>
            </div>
        </header>
        `;

        this.addEventListeners();
        this.applyActiveLink();
    }

    addEventListeners() {
        const links = this.querySelectorAll('.nav-link');

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                // Remove active class from all links
                links.forEach(l => l.classList.remove('active'));

                // Add active class to the clicked link
                e.target.classList.add('active');

                // Save the active link href to localStorage
                localStorage.setItem('activeLink', e.target.getAttribute('href'));
            });
        });
    }

    applyActiveLink() {
        // Get the saved active link href from localStorage
        const activeLink = localStorage.getItem('activeLink');
        const links = this.querySelectorAll('.nav-link');

        if (activeLink) {
            // Remove the active class from all links
            links.forEach(link => link.classList.remove('active'));

            // Find the link with the matching href and add the active class
            const matchingLink = Array.from(links).find(link => link.getAttribute('href') === activeLink);
            if (matchingLink) {
                matchingLink.classList.add('active');
            }
        }
    }
}


class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
        
            `
            <footer id="footer" class="footer light-background">

                <div class="container">
                <div class="copyright text-center ">
                    <p> &copy; <span>Copyright</span> <strong class="px-1 sitename">Shihab</strong> <span>All Rights Reserved<br></span>
                    </p>
                </div>
                <div class="social-links d-flex justify-content-center">
                    <a href="https://github.com/shihab173066" class="github" target="_blank">
                    <i class="bi bi-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/mdshihab/" class="linkedin" target="_blank">
                    <i class="bi bi-linkedin"></i>
                    </a>
                    <a href="https://www.hackerrank.com/profile/shihab_hossainSH" class="hackerrank" target="_blank">
                    <i class="bi bi-code-slash"></i>
                    </a>
                    <a href="mailto:shihab.hossainSH@gmail.com" class="email">
                    <i class="bi bi-envelope"></i>
                    </a>
                    <a href="https://leetcode.com/u/shihab_dev2024/" class="leetcode" target="_blank">
                    <i class="bi bi-lightning"></i>
                    </a>

                </div>
                <div class="credits">
                    <!-- All the links in the footer should remain intact. -->
                    <!-- You can delete the links only if you've purchased the pro version. -->
                    <!-- Licensing information: https://bootstrapmade.com/license/ -->
                    <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
                    Designed by Md. Shihab Hossain
                </div>
                </div>

            </footer>

            `
    }
}

class SpecialHead extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
        
            `
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Md. Shihab Hossain - Portfolio</title>
                
                    <!-- SEO Meta Tags -->
                    <meta name="description" content="Welcome to the portfolio of Md. Shihab Hossain. Explore my expertise in Software Quality Assurance, Python Development, Django projects, and software testing.">
                    <meta name="keywords" content="SQA, software developer, Python developer, Django, software testing, quality assurance, portfolio, web development, full-stack developer">
                    <meta name="author" content="Md. Shihab Hossain">
                    <meta name="robots" content="index, follow">
                    <meta name="language" content="English">
                    <meta name="revisit-after" content="7 days">
                    
                    <!-- Open Graph / Facebook Meta Tags -->
                    <meta property="og:title" content="Md. Shihab Hossain - Portfolio">
                    <meta property="og:description" content="Showcasing my skills in SQA, Python, Django, and full-stack development.">
                    <meta property="og:image" content="assets/img/portfolio-thumbnail.png">
                    <meta property="og:url" content="https://yourportfolio.com">
                    <meta property="og:type" content="website">
                    
                    <!-- Twitter Meta Tags -->
                    <meta name="twitter:title" content="Md. Shihab Hossain - Portfolio">
                    <meta name="twitter:description" content="Explore my projects in Software Quality Assurance, Python, and Django development.">
                    <meta name="twitter:image" content="assets/img/portfolio-thumbnail.png">
                    <meta name="twitter:card" content="summary_large_image">
                
                    <!-- Additional Meta Tags -->
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="theme-color" content="#000000">
                    <meta name="application-name" content="Shihab's Portfolio">
                    
                    <!-- Favicons -->
                    <link href="assets/img/favicon.png" rel="icon">
                    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
                    
                
                    <!-- Fonts -->
                    <link href="https://fonts.googleapis.com" rel="preconnect">
                    <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap" rel="stylesheet">
                
                    <!-- Vendor CSS Files -->
                    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
                    <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
                    <link href="assets/vendor/aos/aos.css" rel="stylesheet">
                    <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
                    <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
                    

                    <!-- Main CSS File -->
                    <link href="assets/css/main.css" rel="stylesheet">
                </head>
                
            `
    }
}

customElements.define('special-head', SpecialHead)
customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)