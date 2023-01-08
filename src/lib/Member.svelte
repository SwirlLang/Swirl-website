<script>
    export let name;
    export let tagline;
    export let github;
</script>

<div class="member-card">
    <img
        src="https://github.com/{github}.png"
        class="card-img w-50"
        alt="Profile picture of {name}" />
    <div class="mt-4">
        <h5 class="card-title">{name}</h5>
        <p class="card-text" style="color: #bbb">{tagline}</p>
        <a
            href="https://github.com/{github}"
            class="btn btn-primary rounded-pill"
            ><i class="bi bi-box-arrow-up-right" /> GitHub</a>
    </div>
</div>

<style lang="scss">
    .member-card {
        padding: 2rem;
        background-color: $dark-2;
        border-radius: 1rem;
        .card-img {
            border-radius: 1rem;
        }
    }
</style>
