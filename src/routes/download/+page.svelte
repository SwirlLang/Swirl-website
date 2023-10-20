<script>
    /** @type {import('./$types').PageData} */
    export let data;

    // create a function to process release asset size
    function formatBytes(bytes, decimals = 0) {
        if (!+bytes) return "0 Bytes";

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${
            sizes[i]
        }`;
    }
</script>

<div class="spacer" />
<div class="container px-4">
    <h1>Downloads</h1>
    <h3 class="text-muted">Swirl {data.release.name}</h3>
    <p>Download Swirl for your operating system</p>
    <div
        class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-3"
        style="row-gap: 1.4rem">
        <!-- <div class="col">
            <h3 class="mb-3"><img src="/linux.svg" alt="Linux icon" style="width: 25px"> Linux</h3>
            <div class="btn-group w-100" style="gap: .2em">
                    <a href="/download/linux" class="text-light download-btn"
                        ><i class="bi bi-download me-2" /> DEB 33mb</a>
                    <a href="/download/linux" class="text-light download-btn"
                        ><i class="bi bi-download me-2" /> RPM 33mb</a>

                </div>
        </div> -->
        <div class="col">
            <h3 class="mb-3">
                <img src="/linux.svg" alt="Linux icon" style="width: 25px" />
                Linux
            </h3>
            <a href="{data.release.assets[4].browser_download_url}" class="text-light download-btn"
                ><i class="bi bi-download me-2" /> binary {formatBytes(data.release.assets[0].size)}</a>
        </div>
        <div class="col">
            <h3 class="mb-3"><i class="bi bi-apple" /> Mac OS</h3>
            <a href="{data.release.assets[5].browser_download_url}" class="text-light download-btn"
                ><i class="bi bi-download me-2" /> binary {formatBytes(data.release.assets[1].size)}</a>
        </div>
        <div class="col">
            <h3 class="mb-3"><i class="bi bi-windows" /> Windows</h3>
            <a href="{data.release.assets[6].browser_download_url}" class="text-light download-btn"
                ><i class="bi bi-download me-2" /> exe {formatBytes(data.release.assets[2].size)}</a>
        </div>
        <div class="col">
            <h3 class="mb-3"><i class="bi bi-code-slash"></i> Source Code</h3>
            <div class="btn-group w-100" style="gap: .2em">
                    <a href="{data.release.tarball_url}" class="text-light download-btn"
                        ><i class="bi bi-download me-2" /> tar.gz</a>
                    <a href="{data.release.zipball_url}" class="text-light download-btn"
                        ><i class="bi bi-download me-2" /> zip</a>

                </div>
        </div>
    </div>
    <div class="mt-3 mb-4">
        <p>
            <i class="bi bi-box-arrow-up-right" />
            <a class="link-light" href="/docs/getting-started/installation"
                >Install instructions</a>
        </p>
        <p>
            <i class="bi bi-box-arrow-up-right" />
            <a
                class="link-light"
                href="https://github.com/SwirlLang/Swirl/releases"
                >Archived versions</a>
        </p>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <h3 class="mb-3"><i class="bi bi-vs" /> Visual Studio Code</h3>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://marketplace.visualstudio.com/items?itemName=MrinmoyHaloi.swirl-lang-support"
                class="text-light download-btn"
                ><i class="bi bi-download me-2" /> Swirl extension</a>
        </div>
    </div>
</div>
<div class="spacer" />
<div class="spacer" />

<style lang="scss">
    .btn-group {
        box-shadow: none;
    }
    .download-btn {
        display: inline-block;
        width: 100%;
        padding: 0.8rem 1.1rem;
        background-color: $dark-2;
        line-height: 35px;
        font-size: 15px;
        & > i {
            font-size: 1.3em;
            vertical-align: middle;
        }
    }
    .download-btn:hover {
        color: #bbbbbb !important;
        background-color: $dark-1;
    }
</style>
