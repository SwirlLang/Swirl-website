<script>
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
                    <h1 class="header">Lambda Code</h1>
                </div>
                <p>A high level programming language.</p>
            </div>
        </div>
        <div class="col-12 text-center mt-3">
            <a href="/download" class="btn btn-md btn-primary btn-rounded me-2"
                >Download</a>
            <a
                href="https://lc-lang.github.io/docs/#getting-started"
                class="btn btn-md btn-outline-light btn-rounded text-light ms-2"
                data-mdb-ripple-color="dark">get started</a>
        </div>
    </div>
    <a href="#content" class="indicate-scroll">
        <i class="fas fa-chevron-down text-light" />
    </a>
</div>
<div class="container" id="content">
    <div class="row" style="padding: 3rem 0rem;">
        <h2 class="text-center mb-5" data-scroll>Why Lambda Code</h2>
        <div class="d-flex justify-content-center">
            <div class="mt-2 features-grid px-3">
                <div class="feature" data-scroll>
                    <i class="fas fa-rocket mb-3" />
                    <p>Speed</p>
                    <p>Fly high with a runtime speed as fast as C++</p>
                </div>
                <div class="feature" data-scroll>
                    <i class="fas fa-code mb-3" />
                    <p>Syntax</p>
                    <p>Develop faster with a clean and high level syntax</p>
                </div>
                <div class="feature" data-scroll>
                    <i class="fas fa-book mb-3" />
                    <p>Std Lib</p>
                    <p>
                        Feel powerful with the diverse set of standard
                        libraries.
                    </p>
                </div>
                <div class="feature" data-scroll>
                    <i class="fas fa-microchip mb-3" />
                    <p>Memory Management</p>
                    <p>
                        Write code comfortably, LC takes care of memory for you.
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
        background-image: url("https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=842&q=100");
        background-attachment: fixed;
        background-size: cover;
    }
    @media screen and (max-width: 576px){
        .hero {
            background-attachment: initial;
        }
    }
    .indicate-scroll {
        padding: 1rem 0;
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
        font-weight: 500;
        font-size: 5rem;
        animation: SlideUp 0.7s ease;
    }
    @media screen and (max-width: 576px){
        .header {
            font-size: 4.2rem;
        }
    }
    .header-container {
        overflow-y: hidden;
    }
    @keyframes SlideUp {
        from {
            transform: translateY(70%) scale(0.7);
            opacity: 0%;
        }
        to {
            transform: translateY(0%) scale(1);
            opacity: 100%;
        }
    }
    .btn-outline-light {
        &:hover {
            background-color: white;
            color: black !important;
        }
    }
</style>
