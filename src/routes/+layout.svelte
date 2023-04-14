<script>
    import "../bootstrap.scss";
    import "../app.scss";
    import { onMount } from "svelte";

    onMount(async () => {
        await import("../bootstrap.js");
    });
</script>

<nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
    <div class="container-fluid">
        <a class="ps-3 navbar-brand" href="/"
            ><img
                src="https://raw.githubusercontent.com/SwirlLang/branding/main/logos/logo-transparent.png"
                class="me-3 rounded-1"
                width="35"
                height="35"
                alt="Swirl Logo" />Swirl</a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <i class="bi bi-list text-white fs-1" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav ms-auto me-3 text-center">
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
            <div class="social-media">
                <a
                    href="/discord"
                    target="_blank"
                    class="text-white"
                    aria-label="discord server invite">
                    <i class="bi bi-discord" />
                </a>
                <a
                    href="/github"
                    target="_blank"
                    class="text-white"
                    aria-label="github account link">
                    <i class="bi bi-github" />
                </a>
                <a
                    href="/twitter"
                    target="_blank"
                    class="text-white"
                    aria-label="twitter account link">
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
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 footer-section">
                <h3 class="text-uppercase fw-bold fs-6">Swirl</h3>
                <hr class="header-sep" />
                <p class="mx-auto" style="max-width: 21rem;">
                    A modern, beginner-friendly language that combines power,
                    performance, and simplicity.
                </p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 footer-section">
                <h3 class="text-uppercase fw-bold fs-6">Info</h3>
                <hr class="header-sep" />

                <ul class="list-unstyled mb-0">
                    <li>
                        <a href="/about" class="text-dark">About</a>
                    </li>
                    <li>
                        <a href="/blog" class="text-dark">Blog</a>
                    </li>
                    <li>
                        <a href="/contact" class="text-dark">Contact</a>
                    </li>
                </ul>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 footer-section">
                <h3 class="text-uppercase fw-bold fs-6">Download</h3>
                <hr class="header-sep" />

                <ul class="list-unstyled">
                    <li>
                        <a href="/download" class="text-dark">Downloads</a>
                    </li>
                    <li>
                        <a href="https://github.com/SwirlLang/Swirl/releases" class="text-dark">GitHub Releases</a>
                    </li>
                </ul>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 footer-section">
                <h3 class="text-uppercase fw-bold fs-6">Resources</h3>
                <hr class="header-sep" />

                <ul class="list-unstyled mb-0">
                    <li>
                        <a href="/docs" class="text-dark">Docs</a>
                    </li>
                    <li>
                        <a href="/docs/getting-started" class="text-dark"
                            >Getting started</a>
                    </li>
                </ul>
            </div>
            <div
                class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-4 footer-section">
                <h3 class="text-uppercase fw-bold fs-6">Support</h3>
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
            Made with <i
                class="bi bi-heart-fill"
                style="color: rgb(249,49,84)" />
            by
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
                    width="154"
                    height="32"
                    loading="lazy" /></a>
        </div>
    </div>
    <!-- Copyright -->
</footer>

<style lang="scss">
    .navbar {
        @media screen and (max-width: 576px) {
            padding: 0.3rem;
        }
    }
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
        border-top: none;
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
                    opacity: 0.8;
                }
            }
        }
        .nav-link {
            padding: 0.5rem 0.65rem;
            transition: 0.2s;
            position: relative;
            overflow-y: hidden;
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
