<div class="spacer" />
<div class="container">
    <h1>Downloads</h1>
    <h3 class="text-muted">Swirl alpha</h3>
    <p>Download Swirl for your operating system</p>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-3" style="row-gap: 1.4rem">
        <div class="col">
            <h3 class="mb-3"><img src="/linux.svg" alt="Linux icon" style="width: 25px"> Linux</h3>
            <div class="btn-group w-100" style="gap: .2em">
                    <a href="/download/linux" class="text-light download-btn"
                        ><i class="bi bi-download me-2" /> DEB 33mb</a>
                    <a href="/download/linux" class="text-light download-btn"
                        ><i class="bi bi-download me-2" /> RPM 33mb</a>

                </div>
        </div>
        <div class="col">
            <h3 class="mb-3"><i class="bi bi-apple" /> Mac OS</h3>
            <a href="/download/mac-os" class="text-light download-btn"
                ><i class="bi bi-download me-2" /> pkg 64mb</a>
        </div>
        <div class="col">
            <h3 class="mb-3"><i class="bi bi-windows" /> Windows</h3>
            <a href="/download/windows" class="text-light download-btn"
                ><i class="bi bi-download me-2" /> exe 69mb</a>
        </div>
        <div class="col">
            <h3 class="mb-3"><i class="bi bi-code-slash" /> Source Code</h3>
            <a href="/download/source-code" class="text-light download-btn"
                ><i class="bi bi-download me-2" /> tar.gz 4mb</a>
        </div>
    </div>
    <div class="mt-3 mb-5">
        <p><i class="bi bi-box-arrow-up-right"></i> <a href="/docs/getting-started/installation">Install instructions</a></p>
        <p><i class="bi bi-box-arrow-up-right"></i> <a href="https://github.com/SwirlLang/Swirl/releases">Archived versions</a></p>
    </div>
    <div class="row">
        <div class="col-4">
            <h3 class="mb-3"><i class="bi bi-vs" /> Visual Studio Code</h3>
                    <a target="_blank" rel="noreferrer" href="https://marketplace.visualstudio.com/items?itemName=MrinmoyHaloi.swirl-lang-support" class="text-light download-btn"
                        ><i class="bi bi-download me-2" /> Swirl extension</a>
        </div>
    </div>
    <p class="note note-warning text-light bg-dark d-inline-block mt-5">
        <strong>Warning:</strong> Downloads are not working for now.
    </p>
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
        padding: .8rem 1.1rem;
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
