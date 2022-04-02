<script>
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

<div class="spacer" />
<div class="container text-center">
    <div class="text-sm-center text-start">
        <h1>About</h1>
        <p style="font-size:1.4em; max-width:40rem; line-height: 2.6rem;" class="mx-auto">
            Lambda Code is a general purpose, high level programming language.
            It accommodates features like static typing, object-oriented, functional etc.
        </p>
    </div>
    <h1>Team</h1>
    <div class="member-grid mx-auto">
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
    &>*{
        flex-basis:300px
    }
}
</style>