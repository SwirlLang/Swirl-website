<script>
    /** @type {import('./$types').PageData} */
    export let data;
    let pkg = data.package;
    function copyCommand() {
        navigator.clipboard.writeText(`spm install ${pkg.id}`);
    }

    // Intl formatter
    const formatter = new Intl.RelativeTimeFormat("en", {
        numeric: "auto",
    });
    const diff = new Date() - new Date(pkg.updated_at);
    const updated_at = formatter.format(Math.round(diff / 1000 / 60 / 60 / 24), "day");

</script>

<div class="spacer" />

<div class="container">
    <div
        class="metadata d-flex justify-content-between flex-lg-row flex-column">
        <div>
            <h1 class="fs-3 fw-bold">
                {pkg.name}
                <span class="text-muted fs-5 ms-2">v{pkg.version}</span>
            </h1>
            <p class="text-muted mb-1">{pkg.author}</p>
            <div class="tags d-flex gap-2 mb-2">
                {#each pkg.tags as tag}
                    <span class="badge rounded-2 bg-body-tertiary px-2"
                        >{tag}</span>
                {/each}
            </div>
            <p style="max-width: 25rem">{pkg.description}</p>
        </div>
        <div class="mt-lg-0 mt-3">
            <span class="fs-6 fw-bold">Metadata</span>
            <div class="other-info d-flex gap-3 mt-1">
                <div class="d-flex gap-2">
                    <i class="bi bi-journal-text" />
                    <p class="text-muted" style="font-size: .95rem">
                        {pkg.license}
                    </p>
                </div>
                <div class="d-flex gap-2">
                    <i class="bi bi-calendar-check" />
                    <p class="text-muted" style="font-size: .95rem">
                        {updated_at}
                    </p>
                </div>
                <div class="d-flex gap-2">
                    <i class="bi bi-archive" />
                    <p class="text-muted" style="font-size: .95rem">312kb</p>
                </div>
                <div class="d-flex gap-2">
                    <i class="bi bi-house" />
                    <p class="text-muted" style="font-size: .95rem">
                        <a
                            href={pkg.url}
                            target="_blank"
                            rel="noreferrer"
                            class="link-light text-muted"
                            >Github
                            <i class="bi bi-box-arrow-up-right" />
                        </a>
                    </p>
                </div>
            </div>
            <span class="fs-6 fw-bold">Install</span>
            <p class="text-body-secondary" style="font-size: .95rem">
                Run the following commands in your project directory:
            </p>
            <div class="btn-group install-command mb-1">
                <code>spm install {pkg.id}</code>
                <button class="btn-clipboard" on:click={copyCommand}
                    ><i class="bi bi-clipboard text-light" /></button>
            </div>
        </div>
    </div>
    <div class="readme mt-3">
        <div class="readme-content">
            <h1 id="spm-hello-world-0-0-1">spm-hello-world - 0.0.1</h1>
            <hr />
            <p>
                <img
                    src="https://img.shields.io/github/license/MrinmoyHaloi/spm-hello-world?color=blue&amp;style=flat-square"
                    alt=""
                    class="mb-2" />
                <img
                    src="https://img.shields.io/github/package-json/v/mrinmoyhaloi/spm-hello-world?style=flat-square"
                    alt=""
                    class="mb-2" /><br />A hello world package for swirl. This
                is a example package for the swirl programming language. This
                package can be installed using the spm package manager.
            </p>
            <h2 id="installation">Installation</h2>
            <p>using spm</p>
            <pre><code class="lang-bash"
                    ><span class="hljs-keyword">spm</span> install <span
                        class="hljs-keyword">spm</span
                    >-hello-world
</code></pre>
        </div>
    </div>
</div>

<div class="spacer" />

<style lang="scss">
    .metadata {
        background-color: #1b1b1b;
        padding: 1.5rem;
        border-radius: 1rem;
        .install-command {
            display: flex;
            width: fit-content;
            gap: 1rem;
            background-color: #222222;
            border-radius: 0.5rem;
            padding: 0.5rem 1rem;
            code {
                color: #fff;
                font-family: monospace;
                margin-block: auto;
            }
            button {
                background-color: #1e1e1e;
                border: none;
                padding: 0.2rem 0.5rem;
                border-radius: 0.5rem;
                &:hover {
                    background-color: #2e2e2e;
                }
            }
        }
    }
    .readme {
        .readme-content {
            background-color: #1b1b1b;
            padding: 1.5rem;
            border-radius: 1rem;
        }
    }
</style>
