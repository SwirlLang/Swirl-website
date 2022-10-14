<script>
    import "../app.scss";
    import { page } from "$app/stores";
    $: path = $page.url.pathname.substr($page.url.pathname.lastIndexOf("/"));
</script>

<nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
    <div class="container-fluid">
        <a class="ps-3 navbar-brand" href="/"
            ><img
                src="https://raw.githubusercontent.com/SwirlLang/branding/main/logos/Swirl-monogram-logo.png"
                class="me-3 rounded-1"
                height="35"
                alt="Swirl Logo" />Swirl</a>
        <button
            class="navbar-toggler pe-3"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <i class="bi bi-list text-white fs-1" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav ms-auto me-3 text-center">
                <li class="nav-item">
                    <a
                        class="nav-link {path === '/about' ? 'active' : ''}"
                        href="/about">About</a>
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link {path === '/contact' ? 'active' : ''}"
                        href="/contact">Contact</a>
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link {path === '/download' ? 'active' : ''}"
                        href="/download">Download</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/docs">Docs</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
<slot />

<footer
    class="text-center text-lg-start text-white"
    style="background-color: #1c2331">
    <!-- Section: Social media -->
    <div class="p-3 p-sm-4" style="background-color: #1d1d1d">
        <div class="container-lg d-flex justify-content-between">
            <!-- Left -->
            <div class="me-2 text-start">
                <span>Get connected with us on social networks:</span>
            </div>
            <!-- Left -->

            <!-- Right -->
            <div class="social-media">
                <a
                    href="/discord"
                    target="_blank"
                    class="text-white">
                    <i class="bi bi-discord" />
                </a>
                <a
                    href="/github"
                    target="_blank"
                    class="text-white">
                    <i class="bi bi-github" />
                </a>
                <a
                    href="/twitter"
                    target="_blank"
                    class="text-white">
                    <i class="bi bi-twitter" />
                </a>
            </div>
            <!-- Right -->
        </div>
    </div>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
        <div class="container-lg text-center text-md-start mt-5">
            <div class="row mt-3">
                <div
                    class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 footer-section">
                    <h6 class="text-uppercase fw-bold">Swirl</h6>
                    <hr class="header-sep" />
                    <p class="mx-auto" style="max-width: 21rem;">
                        A high level, compiled, statically typed,
                        object-oriented programming language.
                    </p>
                </div>
                <div
                    class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 footer-section">
                    <h6 class="text-uppercase fw-bold">Info</h6>
                    <hr class="header-sep" />

                    <ul class="list-unstyled mb-0">
                        <li>
                            <a href="/about" class="text-dark">About</a>
                        </li>
                        <li>
                            <a href="/contact" class="text-dark">Contact</a>
                        </li>
                        <li>
                            <a href="/privacy-policy" class="text-dark"
                                >Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/terms-of-service" class="text-dark"
                                >Terms of service</a>
                        </li>
                    </ul>
                </div>
                <div
                    class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 footer-section">
                    <h6 class="text-uppercase fw-bold">Download</h6>
                    <hr class="header-sep" />

                    <ul class="list-unstyled">
                        <li>
                            <a href="/download/linux" class="text-dark"
                                >Linux</a>
                        </li>
                        <li>
                            <a href="/download/mac-os" class="text-dark"
                                >Mac OS</a>
                        </li>
                        <li>
                            <a href="/download/windows" class="text-dark"
                                >Windows</a>
                        </li>
                        <li>
                            <a href="/download/source-code" class="text-dark"
                                >Source Code</a>
                        </li>
                    </ul>
                </div>
                <div
                    class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 footer-section">
                    <h6 class="text-uppercase fw-bold">Resources</h6>
                    <hr class="header-sep" />

                    <ul class="list-unstyled mb-0">
                        <li>
                            <a href="/docs" class="text-dark">Docs</a>
                        </li>
                        <li>
                            <a href="/docs/#getting-started" class="text-dark"
                                >Getting started</a>
                        </li>
                    </ul>
                </div>
                <div
                    class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-4 footer-section">
                    <h6 class="text-uppercase fw-bold">Support</h6>
                    <hr class="header-sep" />
                    <ul class="list-unstyled">
                        <li>
                            <a
                                href="https://github.com/SwirlLang/Swirl/issues"
                                class="text-dark">GitHub Issues</a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/SwirlLang/Swirl/discussions"
                                class="text-dark">Forum</a>
                        </li>
                        <li>
                            <a
                                href="https://discord.gg/RSJ5TUDdqx"
                                class="text-dark">Discord server</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div
        class="text-center text-md-start py-3"
        style="background-color: rgba(0, 0, 0, 0.2); color: #bbb">
        <div class="container-lg">
            Made with <i class="bi bi-heart-fill text-danger" /> by
            <a class="text-white" href="https://github.com/mrinmoyhaloi"
                >Mrinmoy Haloi</a>
            <br />
            Thanks to Vercel for sponsoring the project
            <a
                style="width: fit-content;"
                class="mt-2 d-block mx-auto mx-md-0"
                href="https://vercel.com/?utm_source=swirl-team&utm_campaign=oss">
                <img
                    alt="Powered by Vercel"
                    src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"
                    height="32" /></a>
        </div>
    </div>
    <!-- Copyright -->
</footer>

<style lang="scss">
    .header-sep {
        margin-bottom: 1.5rem !important;
        margin-top: 0 !important;
        margin-right: auto !important;
        margin-left: auto !important;
        display: inline-block !important;
        width: 60px;
        background-color: $primary;
        height: 2px;
        opacity: 0.5;
        transition: 0.5s;
    }
    .footer-section:hover {
        .header-sep {
            width: 75px;
            opacity: 1;
        }
    }
    .social-media {
        width: 10rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    footer {
        background-color: $dark-3 !important;
        a {
            color: white !important;
            &:hover {
                color: #bbbbbb !important;
            }
        }
    }
    nav {
        backdrop-filter: blur(5px);
        background-color: rgba(0, 0, 0, 0.425) !important;
        font-size: 0.88em;
        font-weight: 500;
        .navbar-nav {
            gap: 1rem;
            a {
                color: white !important;
                font-size: 1.3em;
    
                &:hover {
                    color: #bbbbbb !important;
                }
            }
        }
        .navbar-brand {
            color: white !important;
            font-size: 1.3em;
            &:hover {
                color: #bbbbbb !important;
                img {
                    opacity: .8;
                }
            }
        }
        .nav-link {
            padding: 0.5rem 0.65rem;
            transition: 0.2s;
            position: relative;
            overflow-y: hidden;
            &.active {
                &:after {
                    transform: translateY(0%);
                }
            }
        }
        @media screen and (max-width: 768px) {
            .nav-link {
                &:after {
                    all: unset;
                }
            }
        }
    }
</style>
