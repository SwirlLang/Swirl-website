<script>
    import ScrollOut from "scroll-out";
    import { onMount } from "svelte";

    onMount(() => {
        ScrollOut({ threshold: 0.8, once: true });
    });
</script>

<div class="container-fluid hero vh-100">
    <div class="row h-100">
        <div
            class="col-12 col-lg-6 d-flex align-items-end align-items-lg-center">
            <div class="header container-fluid">
                <a href="/blog/swirl-alpha" class="news-alert mb-2"><span>Swirl alpha is here</span>  Read the announcement <i class="bi bi-chevron-right"></i></a>
                <h1 class="header-title">
                    <div>Build faster and</div>
                    <div>Better software.</div>
                </h1>
                <p>
                    A programming language that focuses on writing elegant and
                    readable code. Make writing code enjoyable <i>again</i>.
                </p>
                <a class="btn btn-primary btn-rounded me-2" href="/download"
                    >Download</a>
                <a class="btn btn-dark btn-rounded" href="/docs">Get started</a>
            </div>
        </div>
        <div
            class="col-12 col-lg-6 d-flex text-center pt-3 pt-lg-0 align-items-start align-items-lg-center mt-3">
            <div class="container-fluid">
                <img
                    src="swirl-demo.png"
                    alt="demo code"
                    class="img-fluid header-image"
                    width="500" />
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
                <a href="/docs" class="btn btn-primary btn-rounded"
                    >Learn more</a>
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
                <a href="/docs" class="btn btn-primary btn-rounded"
                    >Learn more</a>
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
                <a href="/docs" class="btn btn-primary btn-rounded"
                    >Learn more</a>
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
                <a href="/docs" class="btn btn-primary btn-rounded"
                    >Learn more</a>
            </div>
            <i data-scroll class="bi bi-cpu" />
        </div>
    </div>
</div>

<style lang="scss">
    .news-alert {
        padding: 4px !important;
        border: 1px solid #4b00e088;
        color: white !important;
        font-size: .9rem;
        padding: 0.5rem 1rem;
        border-radius: 2rem;
        display: inline-block;
        span {
            background-color: $primary;
            font-weight: 500;
            border-radius: 2rem;
            padding: .125rem .55rem;
            margin-right: 4px;
        }
        i {
            margin-right: 4px;
        }
    }
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
        background: linear-gradient(210deg, #1b0066 0%, #000000 100%);
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
    @media screen and (max-width: 992px) {
        .header-image {
            display: none;
        }
    }
    @media screen and (max-width: 768px) {
        .header {
            padding-inline: 1.5rem !important;
            .header-title {
                :nth-child(1) {
                    font-size: 0.8em !important;
                }
                :nth-child(2) {
                    font-size: 1.4em !important;
                }
            }
            p {
                font-size: 1.1em !important;
            }
        }
        .header-image {
            display: none;
        }
    }
    .header {
        width: 37rem;
        padding-inline: 3rem;
        .header-title {
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
        }
    }
    .header-image {
        border-radius: 1rem;
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.281);
        color: #2c2c2c;
        border: 2px solid #4a00e0;
    }
</style>
