<script>
    /** @type {import('./$types').PageData} */
    export let data;
    let pkg = data.package;
    function copyCommand() {
        navigator.clipboard.writeText(`spm install ${pkg.id}`);
    }
</script>

<div class="spacer" />

<div class="container">
    <h1>{pkg.name}</h1>
    <p class="text-muted">{pkg.id} - {pkg.version} - {pkg.author}</p>
    <div class="btn-group install-command mb-1">
        <code>spm install {pkg.id}</code>
        <button class="btn-clipboard" on:click={copyCommand}
            ><i class="bi bi-clipboard text-light" /></button>
    </div>
    <p>{pkg.description}</p>
    <a
        href={pkg.url}
        target="_blank"
        rel="noreferrer"
        class="link-light"
        >Github <i class="bi bi-box-arrow-up-right" />
    </a>
</div>

<div class="spacer" />

<style lang="scss">
    .install-command {
        display: flex;
        width: fit-content;
        gap: 1rem;
        background-color: #1e1e1e;
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
        code {
            color: #fff;
            font-family: monospace;
            margin-block: auto;
        }
        button {
            background-color: #1e1e1e;
            border: none;
            padding: .2rem .5rem;
            border-radius: 0.5rem;
            &:hover {
                background-color: #2e2e2e;
            }
        }
    }
</style>
