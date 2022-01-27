<script>
    import DownloadBtn from "$lib/DownloadBtn.svelte";
</script>

<svelte:head>
    <title>Lambda Code</title>
</svelte:head>
<div class="container-fluid hero vh-100">
    <div class="row h-100 row-cols-md-2 row-cols-1">
        <div
            class="col d-flex align-items-md-center align-items-end justify-content-center">
            <div class="container" style="width: fit-content;">
                <h1>Lambda Code</h1>
                <p>The language of tomorrow</p>
            </div>
        </div>
        <div
            class="col d-flex flex-column align-items-center mt-md-0 mt-4 align-items-md-center justify-content-md-center">
            <DownloadBtn
                content="Download Lambda Code"
                subtitle="linux, windows, mac os"
                link="/download" />
            <div class="mt-2 docs-links">
                <a rel="external" href="docs/#getting-started"
                    >get started <i class="fas fa-external-link-alt me-1" /></a>
                <a rel="external" href="docs/examples"
                    >examples <i class="fas fa-external-link-alt" /></a>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <div class="row row-cols-lg-2 row-cols-1" style="padding: 5rem 0rem;">
        <div
            class="col d-flex align-items-md-center align-items-end justify-content-center">
            <div class="container" style="width: fit-content;">
                <h1>Why <br /> Lambda Code ?</h1>
                <h5 style="font-weight:300;">
                    There are plenty of reasons why lambda code might be your
                    next language of choice.
                </h5>
            </div>
        </div>
        <div
            class="d-flex flex-column align-items-center mt-md-0 mt-4 align-items-md-center justify-content-md-center">
            <div
                class="mt-2 row row-cols-sm-2 row-cols-1 text-center text-lg-start px-3">
                <div class="col feature mb-4">
                    <i class="fas fa-rocket mb-3" />
                    <p>Speed</p>
                    <p style="font-weight: 300;">
                        Fly high with a runtime speed as fast as C++
                    </p>
                </div>
                <div class="col feature mb-4">
                    <i class="fas fa-code mb-3" />
                    <p>Syntax</p>
                    <p style="font-weight: 300;">
                        Develop faster with a clean and high level syntax
                    </p>
                </div>
                <div class="col feature">
                    <i class="fas fa-book mb-3" />
                    <p>Std Lib</p>
                    <p style="font-weight: 300;">
                        Feel powerful with the diverse set of standard
                        libraries.
                    </p>
                </div>
                <div class="col feature">
                    <i class="fas fa-microchip mb-3" />
                    <p>Memory Management</p>
                    <p style="font-weight: 300;">
                        Write code comfortably, LC takes care of memory for you.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .feature {
        i {
            font-size: 2.5em;
            color: rgba(255, 255, 255, 0.81);
        }
    }
    .docs-links {
        a {
            color: white;
            &:hover {
                color: #bbbbbb;
            }
        }
    }
    .hero {
        background: linear-gradient(90deg, #060b29 0%, #220b34 100%);
    }
</style>
