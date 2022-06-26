<script context="module">
    /** @type {import('@sveltejs/kit').ErrorLoad} */
    export function load({ error, status }) {
        return {
            props: { error, status },
        };
    }
</script>

<script>
    /** @type {number} */
    export let status;

    /** @type {Error & {frame?: string} & {loc?: object}} */
    export let error;
</script>

<div class="spacer" />
<div class="container text-center">
    <h1>
        <i class="bi bi-exclamation-circle" /><i
            class="bi bi-exclamation-circle" />ps!
    </h1>
    {#if status == 404}
        <p>Page not found</p>
    {:else}
        <p>{error.message}</p>
    {/if}
    <a href="/" class="btn btn-primary btn-rounded">go back</a>
</div>
<div class="spacer" />
<div class="spacer" />

<style lang="scss">
    h1 {
        font-size: 6rem;
        i {
            font-size: 4rem;
        }
    }
    p {
        font-size: 1.3rem;
        font-weight: 500;
    }
    a {
        color: white;
    }
</style>
