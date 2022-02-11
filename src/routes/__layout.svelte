<script>
    import "../app.scss";
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
        <a class="ps-3 navbar-brand" href="/"
            ><img
                src="https://raw.githubusercontent.com/LC-Lang/branding/main/logos/lc-logo.png"
                class="me-2"
                height="32"
                alt="LC Logo" />Lambda Code</a>
        <button
            class="navbar-toggler pe-3"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <i class="fas fa-bars" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto me-3 text-center">
                <a class="nav-link" href="/">Home</a>
                <a class="nav-link" href="/about">about</a>
                <a class="nav-link" href="/download">download</a>
                <a
                    class="nav-link"
                    rel="external"
                    href="https://lc-lang.github.io/docs/">docs</a>
                <div
                    class="social d-flex align-items-center justify-content-center">
                    <a
                        class="nav-link"
                        href="https://github.com/LC-Lang/Lambda-Code"
                        ><i class="fab fa-github" /></a>
                    <a class="nav-link" href="https://discord.gg/RSJ5TUDdqx"
                        ><i class="fab fa-discord" /></a>
                </div>
            </div>
        </div>
    </div>
</nav>
<slot />

<footer>
    <div class="container-sm container-fluid p-5 text-center text-lg-start">
        <div class="row">
            <div class="col-lg-3 col-sm-6 mb-4 mb-md-0">
                <h5>Lambda Code</h5>

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
            <div class="col-lg-3 col-sm-6 mb-4 mb-md-0">
                <h5>Download</h5>

                <ul class="list-unstyled">
                    <li>
                        <a href="/download/linux" class="text-dark">Linux</a>
                    </li>
                    <li>
                        <a href="/download/mac os" class="text-dark">Mac OS</a>
                    </li>
                    <li>
                        <a href="/download/windows" class="text-dark"
                            >Windows</a>
                    </li>
                    <li>
                        <a href="/download/source code" class="text-dark"
                            >Source Code</a>
                    </li>
                </ul>
            </div>

            <div class="col-lg-3 col-sm-6 mb-4 mb-md-0">
                <h5>Resources</h5>

                <ul class="list-unstyled mb-0">
                    <li>
                        <a
                            rel="external"
                            href="https://lc-lang.github.io/docs"
                            class="text-dark">Docs</a>
                    </li>
                    <li>
                        <a
                            rel="external"
                            href="https://lc-lang.github.io/docs/#getting-started"
                            class="text-dark">Getting started</a>
                    </li>
                </ul>
            </div>

            <div class="col-lg-3 col-sm-6 mb-4 mb-md-0">
                <h5>Support</h5>

                <ul class="list-unstyled">
                    <li>
                        <a
                            href="https://github.com/LC-Lang/Lambda-Code/issues"
                            class="text-dark">GitHub Issues</a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/LC-Lang/Lambda-Code/discussions"
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

    <!-- Copyright message -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        © 2022 Copyright
        <a class="text-dark" href="https://github.com/MrinmoyHaloi"
            >Mrinmoy Haloi</a>
        <a
            class="mt-2 d-block"
            href="https://vercel.com/?utm_source=lc-team&utm_campaign=oss"
            ><img
                alt="Powered by Vercel"
                src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"
                height="35px" /></a>
    </div>
</footer>

<style lang="scss">
    footer {
        background-color: #131313 !important;
        a {
            color: white !important;
            &:hover {
                color: #bbbbbb !important;
            }
        }
    }
    nav {
        background-color: $dark-3 !important;
        font-size: 0.95em;
        font-weight: 500;
        i {
            color: white;
        }
        a {
            color: white !important;
            font-size: 1.4em;
            &:hover {
                color: #bbbbbb !important;
            }
        }
        .nav-link {
            padding: 0.3rem 0.7rem;
        }
        .social {
            a {
                padding: 0.5rem 0.9rem;
                font-size: 1em;
            }
            .nav-link:hover {
                i {
                    color: #bbbbbb;
                }
            }
        }
    }
</style>
