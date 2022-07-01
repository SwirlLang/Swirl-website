<script>
    import Member from "$lib/Member.svelte";
    let members = [
        {
            name: "Mrinmoy",
            tagline: "Website, public relations",
            github: "MrinmoyHaloi",
        },
        {
            name: "Eight",
            tagline: "Core",
            github: "NeuralBruhh",
        },
        {
            name: "In-diaonic",
            tagline: "Core",
            github: "In-diaonic",
        },
        {
            name: "Empty",
            tagline: "Package manager",
            github: "0x454d505459",
        },
    ];
</script>

<div class="spacer" />
<div class="container text-center">
    <div class="text-sm-center text-start">
        <h1>About</h1>
        <p style="font-size:1.4em; max-width:40rem; line-height: 2.6rem;" class="mx-auto">
            Swirl is a general purpose, high level programming language.
            Some of the main features of it are static typing, object-oriented, functional etc.
        </p>
    </div>
    <h2>Team</h2>
    <div class="member-grid mx-auto mt-4">
        {#each members as member}
            <div class="w-75 mx-auto">
                <Member {...member} />
            </div>
        {/each}
    </div>
</div>
<div class="spacer" />

<style lang="scss">
.member-grid {
    display: flex;
    flex-wrap: wrap;
    row-gap: 1rem;
    &>*{
        flex-basis:300px
    }
}
</style>