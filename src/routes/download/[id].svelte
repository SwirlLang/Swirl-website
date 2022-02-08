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
    {:else}
        <h2>Download lambda code for {params.id}</h2>
    {/if}
    <p>coming soon</p>
</div>
<div class="spacer" />
<div class="spacer" />
