<script>
    import DownloadBtn from "$lib/DownloadBtn.svelte"
</script>
<svelte:head>
    <title>Lambda Code</title>
</svelte:head>
<div class="container-fluid hero">
    <div class="row h-100 row-cols-md-2 row-cols-1">
        <div class="col d-flex align-items-md-center align-items-end justify-content-center">
            <div class="container" style="width: fit-content;">
                <h1>Lambda Code</h1>
                <p>The language of tomorrow</p>        
            </div>
        </div>
        <div class="col d-flex flex-column align-items-center mt-md-0 mt-4 align-items-md-center justify-content-md-center">
            <DownloadBtn content="Download Lambda Code" subtitle="linux, windows, mac os" link="/download"/>
            <div class="mt-2 docs-links">
                <a href="https://lc-lang.github.io/docs/#getting-started">get started <i class="fas fa-external-link-alt me-1"></i></a>
                <a href="/docs/examples">examples <i class="fas fa-external-link-alt"></i></a>
            </div>
        </div>
    </div>
</div>
<style lang=scss>
    .docs-links {
        a {
            color: white;
            &:hover {
                color:#bbbbbb;
            }
        }
    }
    .hero {
        height: 100vh;
        background: linear-gradient(90deg, #060B29 0%, #220B34 100%);
    }
</style>