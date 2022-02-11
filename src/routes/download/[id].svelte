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
    {#if params.id == "source code"}
        <h2>Download lambda code {params.id}</h2>
    {:else if params.id == "linux"}
        <h2>Download lambda code for {params.id}</h2>
        <p>I'd just like to interject for a moment. What you're referring to as Linux, is in fact, GNU/Linux, or as I've recently taken to calling it, GNU plus Linux. Linux is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX.</p>
    {:else}
        <h2>Download lambda code for {params.id}</h2>
    {/if}
    <p>coming soon</p>
</div>
<div class="spacer" />
<div class="spacer" />
