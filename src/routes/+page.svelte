<script>  
    import { onMount } from "svelte";
    onMount(() => {
        gsap.to(".header-image", {
            // create a parrallax effect
            scrollTrigger: {
                trigger: ".header-image",
                start: "100px center",
                end: "500px center",
                scrub: 1,
                // markers: true
            },
            y: -100,
            opacity: 0.1,
            duration: 3,
        });
        gsap.to(".hero", {
            // animate a linear gradient
            scrollTrigger: {
                trigger: ".hero",
                start: "center-=10% center",
                end: "bottom center",
                scrub: 1,
                // markers: true
            },
            background: "linear-gradient(0deg, #1b0066, #000000)",
            duration: 3,
        });
    });
</script>

<div class="container-fluid hero vh-100">
    <div class="row h-100">
        <div
            class="col-12 col-lg-6 d-flex align-items-end align-items-lg-center">
            <div class="header container-fluid">
                <a href="https://github.com/SwirlLang/Swirl/releases/tag/v0.0.5-alpha" class="news-alert mb-2"
                    ><span>Swirl v0.0.5</span>
                    <span
                        ><span>View release</span>
                        <i class="bi bi-chevron-right" /></span
                    ></a>
                <h1 class="header-feature-icon">
                    <div>Build faster and</div>
                    <div>Better software.</div>
                </h1>
                <p>
                    A modern, beginner-friendly language that combines power, performance, and simplicity.
                </p>
                <a
                    class="btn btn-primary rounded-pill download-btn me-2"
                    href="/download">Download</a>
                <a class="btn btn-dark rounded-pill" href="/docs/getting-started"
                    >Get started</a>
            </div>
        </div>
        <div
            class="col-12 col-lg-6 d-flex text-center pt-3 pt-lg-0 align-items-start align-items-lg-center mt-3">
            <div class="container-fluid" style="width: 600px">
                <img
                    src="swirl-demo.png"
                    alt="demo code of swirl"
                    class="img-fluid header-image"
                    width="1064"
                    height="540"
                    loading="lazy" />
            </div>
        </div>
    </div>
    <a
        href="#content"
        class="indicate-scroll"
        aria-label="Indicator for scrolling">
        <i class="bi bi-chevron-double-down text-light d-inline-block" />
    </a>
</div>
<div class="container" id="content">
    <div id style="padding: 3rem 0rem;">
        <h2 class="text-center fs-1">Why Swirl</h2>
        <div class="features-grid">
            <div class="feature">
                <i class="bi bi-lightning-charge feature-icon d-inline-block" />
                <h3>Performance</h3>
                <p>
LLVM based compiler backend, compiles to native machine code.
                </p>
                <a href="/docs" class="link-light"
                    >Learn more <i class="bi bi-arrow-right-circle" /></a>
            </div>
            <div class="feature">
                <i class="bi bi-code-slash feature-icon d-inline-block" />
                <h3>Syntax</h3>
                <p>
                    Emphasizes an elegant, clean and concise syntax.
                </p>
                <a href="/docs" class="link-light"
                    >Learn more <i class="bi bi-arrow-right-circle" /></a>
            </div>
            <div class="feature">
                <i class="bi bi-journal-text feature-icon d-inline-block" />
                <h3>Std Lib</h3>
                <p>
                    A diverse standard library to ease your tasks.
                </p>
                <a href="/docs" class="link-light"
                    >Learn more <i class="bi bi-arrow-right-circle" /></a>
            </div>
            <div class="feature">
                <i class="bi bi-git feature-icon d-inline-block" />
                <h3>Open Source</h3>
                <p>
                    An open source language developed by developers for developers.
                </p>
                <a href="/docs" class="link-light"
                    >Learn more <i class="bi bi-arrow-right-circle" /></a>
            </div>
            <div class="feature">
                <i class="bi bi-tools feature-icon d-inline-block" />
                <h3>Reliable</h3>
                <p>
                    Enforces static typing and null safety for a more maintainable and more bug resistant code base.
                </p>
                <a href="/docs" class="link-light"
                    >Learn more <i class="bi bi-arrow-right-circle" /></a>
            </div>
            <div class="feature">
                <i class="bi bi-laptop feature-icon d-inline-block" />
                <h3>Cross platform</h3>
                <p>
                    Swirl is available for all major platforms. You can use it
                    on Windows, Linux, MacOS.
                </p>
                <a href="/download" class="link-light"
                    >Learn more <i class="bi bi-arrow-right-circle" /></a>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .download-btn {
        @media screen and (max-width: 327px) {
            margin-bottom: 0.5rem;
        }
    }
    .news-alert {
        padding: 4px !important;
        border: 1px solid #4b00e088;
        color: white !important;
        font-size: 0.9rem;
        padding: 0.5rem 1rem;
        border-radius: 2rem;
        display: flex;
        gap: 0.4rem;
        width: fit-content;
        align-items: center;
        & > :nth-child(1) {
            background-color: $primary;
            font-weight: 500;
            border-radius: 2rem;
            padding: 0.125rem 0.55rem;
        }
        i {
            margin-right: 4px;
        }
        @media screen and (max-width: 450px) {
            border: none;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px !important;
            & > :nth-child(2) {
                border: 1px solid #4b00e088;
                padding: 0.1rem 0.2rem;
                border-radius: 2rem;
                span {
                    margin-left: 4px;
                }
            }
        }
    }
    .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        @media screen and (max-width: 358px) {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }
        gap: 2rem;
        padding-inline: 0.5rem;
        .feature {
            & > i {
                font-size: 5rem;
                background: linear-gradient(90deg, #8e2de2, $primary);
                background-clip: text;
                color: transparent;
            }
            & :nth-child(2) {
                font-size: 2rem;
                font-weight: 500;
            }
            & :nth-child(3) {
                opacity: 0.7;
                min-height: 7rem;
                @media screen and (max-width: 576px) {
                    min-height: fit-content !important;
                }
            }
            & :nth-child(4) {
                display: flex;
                gap: 0.3rem;
                i {
                    font-size: 1.2rem;
                }
            }
        }
    }
    .hero {
        background: linear-gradient(180deg, #1b0066 0%, #000000 100%);
        padding-top: 3rem;
    }
    .indicate-scroll {
        margin-top: 2rem;
        font-size: 1.5em;
        position: absolute;
        top: calc(100vh - 80px);
        left: 0;
        width: 100%;
        text-align: center;
        i {
            transition: 0.5s;
        }
        &:hover i {
            transform: translateY(15px);
        }
    }
    @media screen and (max-width: 992px) {
        .header-image {
            display: none;
        }
    }
    @media screen and (max-width: 768px) {
        .header {
            padding-inline: 1.2rem !important;
            .header-feature-icon {
                :nth-child(1) {
                    font-size: 0.8em !important;
                }
                :nth-child(2) {
                    font-size: 1.4em !important;
                }
            }
        }
        .header-image {
            display: none;
        }
    }
    .header {
        width: 37rem;
        padding-inline: 3rem;
        .header-feature-icon {
            font-weight: 700;
            :nth-child(1) {
                font-size: 1.1em;
            }
            :nth-child(2) {
                font-size: 1.7em;
            }
        }
        p {
            font-size: 1.3em;
            line-height: 1.7em;
            @media screen and (max-width: 576px) {
                line-height: 1.5em;
                font-size: 1em;
            }
        }
    }
</style>
