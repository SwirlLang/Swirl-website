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
    import Spacer from "$lib/Spacer.svelte";
    export let params;
</script>

<Spacer />
<div class="container text-center">
    {#if params.id == "source code"}
        <h2>Download lambda code {params.id}</h2>
    {:else}
        <h2>Download lambda code for {params.id}</h2>
    {/if}
    <p>coming soon</p>
</div>
<Spacer />
<Spacer />
