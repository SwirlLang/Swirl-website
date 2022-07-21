<script>
    import DownloadBtn from "$lib/DownloadBtn.svelte";
    import ScrollOut from "scroll-out";
    import { onMount } from "svelte";

    onMount(() => {
        ScrollOut({ threshold: 0.8, once: true });
    });
</script>

<div class="container-fluid hero vh-100">
    <div class="row h-100">
        <div class="col-12 d-flex align-items-end text-center">
            <div class="container-fluid">
                <div class="header-container mx-auto">
                    <h1>
                        <img
                            src="/Swirl-wordmark-logo(transparent).svg"
                            alt="Swirl"
                            class="header" />
                    </h1>
                </div>
                <br />
                <p>A high level programming language.</p>
            </div>
        </div>
        <div class="col-12 text-center mt-3">
            <DownloadBtn />
            <div class="mt-2">
                <a href="/download">More options</a> &nbsp&nbsp
                <a href="/docs/getting-started">get started</a>
            </div>
        </div>
    </div>
    <a href="#content" class="indicate-scroll">
        <i class="bi bi-chevron-double-down text-light d-inline-block" />
    </a>
</div>
<div class="container" id="content">
    <div class="" style="padding: 3rem 0rem;">
        <h2 class="text-center fs-1">Why Swirl</h2>
        <div class="container feature">
            <div>
                <p data-scroll class="slide-left">Speed</p>
                <p>
                    Fly high with a runtime speed as fast as C++. It is
                    estimated that Swirl is around 15x faster than python.
                </p>
                <p class="text-muted fst-italic">- from nonsense benchmark</p>
                <a href="/docs" class="btn btn-primary btn-rounded">Learn more</a>
            </div>
            <i data-scroll class="bi bi-lightning-charge" />
        </div>
        <div class="container feature left">
            <div>
                <p data-scroll class="slide-left">Syntax</p>
                <p>
                    Develop faster with a clean and high level syntax like
                    python or rust. Enjoy the features like static typing,
                    obejct oriented etc.
                </p>
                <a href="/docs" class="btn btn-primary btn-rounded">Learn more</a>
            </div>
            <i data-scroll class="bi bi-code-slash" />
        </div>
        <div class="container feature">
            <div>
                <p data-scroll class="slide-left">Std Lib</p>
                <p>
                    Feel powerful with the diverse set of standard libraries.
                    You'll not have to find for a exetrnal library to do your
                    work. Most of the work can be done by the standard library.
                </p>
                <a href="/docs" class="btn btn-primary btn-rounded">Learn more</a>
            </div>
            <i data-scroll class="bi bi-journal-text" />
        </div>
        <div class="container feature left">
            <div>
                <p data-scroll class="slide-left">Memory Management</p>
                <p>
                    Write code comfortably, Swirl takes care of memory for you.
                    It automatically clears out memory for you, So that you can
                    focus more on the fun side of programming.
                </p>
                <a href="/docs" class="btn btn-primary btn-rounded">Learn more</a>
            </div>
            <i data-scroll class="bi bi-cpu" />
        </div>
        <!-- <div class="d-flex justify-content-center">
            <div class="mt-2 features-grid px-3">
                <div class="feature" data-scroll>
                    <i class="bi bi-lightning-charge" />
                    <p>Speed</p>
                    <p>Fly high with a runtime speed as fast as C++</p>
                </div>
                <div class="feature" data-scroll>
                    <i class="bi bi-code-slash" />
                    <p>Syntax</p>
                    <p>Develop faster with a clean and high level syntax</p>
                </div>
                <div class="feature" data-scroll>
                    <i class="bi bi-journal-text" />
                    <p>Std Lib</p>
                    <p>
                        Feel powerful with the diverse set of standard
                        libraries.
                    </p>
                </div>
                <div class="feature" data-scroll>
                    <i class="bi bi-cpu" />
                    <p>Memory Management</p>
                    <p>
                        Write code comfortably, Swirl takes care of memory for
                        you.
                    </p>
                </div>
            </div>
        </div> -->
    </div>
</div>

<style lang="scss">
    .feature {
        max-width: 55rem;
        padding: 3rem 0rem;
        display: flex;
        gap: 2rem;
        justify-content: center;
        align-items: center;
        &.left {
            flex-direction: row-reverse;
        }
        i {
            font-size: 10rem;
            background: linear-gradient(90deg, #8e2de2, $primary);
            background-clip: text;
            color: transparent;
            padding: 0 1rem;
        }
        & div :nth-child(1) {
            font-size: 2.7rem;
            font-weight: 500;
        }
        & div :nth-child(2) {
            font-size: 1.2rem;
            opacity: 0.7;
        }
        @media screen and (max-width: 768px) {
            & i {
                font-size: 7rem;
                padding: 0;
            }
            & {
                flex-direction: column-reverse !important;
                padding: 3rem 2rem;
                gap: 0;
                align-items: start;
            }
            & div :nth-child(1) {
                font-size: 2.4rem;
            }
            & div :nth-child(2) {
                font-size: 1.1rem;
            }
        }
    }
    .hero {
        background-color: #090514;
        background-attachment: fixed;
        background-size: cover;
    }
    @media screen and (max-width: 576px) {
        .hero {
            background-attachment: initial;
        }
    }
    .indicate-scroll {
        margin-top: 2rem;
        font-size: 1.5em;
        position: absolute;
        top: calc(100vh - 110px);
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
    .header {
        width: 26rem;
    }
    @media screen and (max-width: 576px) {
        .header {
            width: 18rem;
        }
    }
    .header-container {
        overflow-y: hidden;
    }
</style>
