<script>
    import { page } from "$app/stores"
</script>

<div class="spacer" />
<div class="container text-center">
    <h1>
        oops!!
    </h1>
    {#if $page.status == 404}
        <p>Page not found</p>
    {:else}
        <p>{$page.error.message}</p>
    {/if}
    <a href="/" class="btn btn-primary btn-rounded">go back</a>
</div>
<div class="spacer" />
<div class="spacer" />

<style lang="scss">
    h1 {
        font-size: 6rem;
    }
    p {
        font-size: 1.3rem;
        font-weight: 500;
    }
    a {
        color: white;
    }
</style>
