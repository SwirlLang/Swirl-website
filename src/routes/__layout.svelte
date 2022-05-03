<script>
    import "../app.scss";
</script>

<nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
    <div class="container-fluid">
        <a class="ps-3 navbar-brand" href="/"
            ><img
                src="https://raw.githubusercontent.com/SwirlLang/branding/main/logos/Swirl-monogram-logo.png"
                class="me-3"
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
            <i class="fas fa-bars text-white" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav ms-auto me-3 text-center">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contact">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/download">Download</a>
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
            <div style="display: flex; align-items: center;">
                <a href="https://discord.gg/RSJ5TUDdqx" class="text-white me-4">
                    <i class="fab fa-discord" />
                </a>
                <a href="https://github.com/SwirlLang" class="text-white me-4">
                    <i class="fab fa-github" />
                </a>
            </div>
            <!-- Right -->
        </div>
    </div>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <div>
        <div class="container-lg text-center text-md-start mt-5">
            <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 class="text-uppercase fw-bold">Swirl</h6>
                    <hr class="header-sep" />
                    <p class="mx-auto" style="max-width: 21rem;">
                        Swirl is a high level, compiled, statically typed,
                        object-oriented programming language.
                    </p>
                </div>
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
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
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 class="text-uppercase fw-bold">Download</h6>
                    <hr class="header-sep" />

                    <ul class="list-unstyled">
                        <li>
                            <a href="/download/linux" class="text-dark"
                                >Linux</a>
                        </li>
                        <li>
                            <a href="/download/mac%20os" class="text-dark"
                                >Mac OS</a>
                        </li>
                        <li>
                            <a href="/download/windows" class="text-dark"
                                >Windows</a>
                        </li>
                        <li>
                            <a href="/download/source%20code" class="text-dark"
                                >Source Code</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
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
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-4">
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
    </div>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        &copy Copyright 2022
        <a class="text-white" href="https://github.com/mrinmoyhaloi"
            >Mrinmoy Haloi</a>
        <br />
        <a
            style="width: fit-content;"
            class="mt-2 d-block mx-auto"
            href="https://vercel.com/?utm_source=swirl-team&amp;utm_campaign=oss"
            ><img
                alt="Powered by Vercel"
                src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"
                height="32" /></a>
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
        background-color: #7700ff;
        height: 2px;
        opacity: 0.5;
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
        font-size: 0.95em;
        font-weight: 500;
        a {
            color: white !important;
            font-size: 1.3em;

            &:hover {
                color: #bbbbbb !important;
            }
        }
        .nav-link {
            padding: 0.5rem 0.65rem;
            transition: 0.2s;
            position: relative;
            overflow-x: hidden;
            &:after {
                padding-top: 5px;
                content: "";
                display: block;
                border-bottom: 2px solid rgba(255, 255, 255, 0.918);
                position: absolute;
                left: 0;
                width: 100%;
                transform: translateX(-101%);
                transition: 0.5s ease;
            }
            &:hover:after {
                transform: translateX(0%);
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
