<script>
    import Spacer from "$lib/Spacer.svelte";
    import Member from "$lib/Member.svelte";
    let members = [
        {
            name: "Mrinmoy",
            tagline: "Web developer",
            github: "mrinmoyHaloi",
        },
        {
            name: "Eight",
            tagline: "Core dev",
            github: "NeuralBruhh",
        },
        {
            name: "In-diaonic",
            tagline: "Core dev",
            github: "In-diaonic",
        },
        {
            name: "Empty",
            tagline: "package manager dev",
            github: "0x454d505459",
        },
    ];
</script>

<svelte:head>
    <title>About</title>
</svelte:head>
<Spacer />
<div class="container text-center">
    <h1>About</h1>
    <p style="font-weight: 300; font-size:1.2em;width:25rem" class="mx-auto">
        Lambda code is a high level, compiled, statically typed, object-oriented
        programming language.
    </p>
    <Spacer />
    <h1>Team</h1>
    <div class="row px-0 px-md-1 px-lg-5 justify-content-evenly">
        {#each members as member}
            <div class="col-9 col-md-5 col-lg-4 p-4 p-md-4">
                <Member {...member} />
            </div>
        {/each}
    </div>
</div>
<Spacer />
