<script context="module">
    export function load({ params }) {
        return {
            props: {
                params,
            },
        };
    }
</script>

<script>
    export let params;
</script>

<div class="spacer" />
<div class="container text-center">
    <h2>Download for {params.id}</h2>
    {#if params.id == "source-code"}
        <a href="https://github.com/SwirlLang/Swirl" class="link-light"
            >Download
            <i class="bi bi-box-arrow-up-right" /></a>
    {:else}
        <p>coming soon</p>
    {/if}
    {#if params.id == "linux"}
        <p class="w-75 mx-auto">
            I'd just like to interject for a moment. What you're referring to as
            Linux, is in fact, GNU/Linux, or as I've recently taken to calling
            it, GNU plus Linux. Linux is not an operating system unto itself,
            but rather another free component of a fully functioning GNU system
            made useful by the GNU corelibs, shell utilities and vital system
            components comprising a full OS as defined by POSIX.
        </p>
    {:else if params.id == "windows"}
        <p>Trust me. Its a bad choice</p>
    {:else if params.id == "mac-os"}
        <p>Only for 99.99$</p>
    {/if}
</div>
<div class="spacer" />
<div class="spacer" />
