<script>
    export let name;
    export let tagline;
    export let github;
</script>

<div class="text-center">
    <img
        src="https://i.imgur.com/kWLg0M8.png"
        class="card-img-top rounded-circle w-75"
        alt="Profile picture of {name}" />
    <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text" style="color: #bbb">Role: {tagline}</p>
        <a href="https://github.com/{github}" class="btn btn-primary btn-rounded">GitHub</a>
    </div>
</div>

<style>
</style>
