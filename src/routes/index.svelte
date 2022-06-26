<script>
    import DownloadBtn from "$lib/DownloadBtn.svelte";
    import ScrollOut from "scroll-out";
    import { onMount } from "svelte";

    onMount(() => {
        ScrollOut({ threshold: 0.35, once: true });
    });
</script>

<div class="container-fluid hero vh-100">
    <div class="row h-100">
        <div class="col-12 d-flex align-items-end text-center">
            <div class="container-fluid">
                <div class="header-container mx-auto">
                    <h1 class="header">Swirl</h1>
                </div>
                <p>A high level programming language.</p>
            </div>
        </div>
        <div class="col-12 text-center mt-3">
            <DownloadBtn />
            <div class="mt-2">
                <a href="/downloads">other downloads</a> &nbsp&nbsp
                <a href="/docs/getting-started">get started</a>
            </div>
        </div>
    </div>
    <a href="#content" class="indicate-scroll">
        <i class="bi bi-chevron-double-down text-light d-inline-block" />
    </a>
</div>
<div class="container" id="content">
    <div class="row" style="padding: 3rem 0rem;">
        <h2 class="text-center mb-5 fs-1" data-scroll>Why Swirl</h2>
        <div class="d-flex justify-content-center">
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
        </div>
    </div>
</div>

<style lang="scss">
    .features-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 260px;
        gap: 2rem;
    }
    @media (max-width: 767px) {
        .features-grid {
            grid-template-columns: repeat(1, 1fr);
        }
    }
    .feature {
        text-align: center;
        max-width: 22rem;
        background-color: $dark-3;
        padding: 0 1rem;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        i {
            font-size: 3em;
            color: rgba(255, 255, 255, 0.81);
        }
        :nth-child(3) {
            opacity: 0.8;
        }
        &:hover {
            background-color: $dark-2;
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
        font-weight: 600;
        font-size: 8rem;
        letter-spacing: 0.5rem;
        background: linear-gradient(
            90deg,
            rgb(247, 90, 255) 0%,
            rgb(0, 38, 255) 51%,
            rgba(0, 212, 255, 1) 100%
        );
        background-size: 300%;
        color: transparent;
        filter: drop-shadow(5px 5px 10px rgb(0, 0, 0));
        background-clip: text;
        animation: gradientAnimation 10s infinite alternate;
    }
    @keyframes gradientAnimation {
        from {
            background-position: left;
        }
        to {
            background-position: right;
        }
    }
    @media screen and (max-width: 576px) {
        .header {
            font-size: 5.2rem;
        }
    }
    .header-container {
        overflow-y: hidden;
    }
</style>
