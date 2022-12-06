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
<div class="container px-4">
    <div class="text-start">
        <h1>About</h1>
        <p style="font-size:1.4em; max-width:40rem; line-height: 2.3rem;" class="">
            Swirl is a programming language that focuses on writing elegant and readable code. It is a statically typed language with a syntax similar to Python. Swirl is designed to be easy to learn and use, and is a great starting point for beginners.
        </p>
    </div>
    <h2 class="mt-5">Meet the team</h2>
    <div class="member-grid mt-4">
        {#each members as member}
            <div class="">
                <Member {...member} />
            </div>
        {/each}
    </div>
</div>
<div class="spacer" />

<style lang="scss">
.member-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    &>*{
        flex-basis:300px
    }
}
</style>