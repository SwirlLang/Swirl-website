<script>
    export let link;
    export let content;
    export let subtitle;
</script>

<a class="download-btn btn text-center btn-outline-1 me-md-5 text-md-end" href="{link}" data-mdb-ripple-color="dark">
    <h6>{content}</h6>
    <sub>{subtitle}</sub>
</a>

<style lang="scss">
    .download-btn {
        &:hover {
            background-color: white;
            color:black
        }
        padding: .9rem 2rem;
        color: white;
        h6 {
            font-weight: 500;
            font-size: 1.2em;
        }
        sub {
            font-size: .9em;
        }
    }
</style>