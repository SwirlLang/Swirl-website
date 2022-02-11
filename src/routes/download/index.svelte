<!-- <script context="module">
    let url = "https://api.github.com";
    /** @type {import('@sveltejs/kit').Load} */
    export async function load({ fetch }) {
        const response = await fetch(
            `${url}/repos/lc-lang/lambda-code/releases`
        );

        return {
            status: response.status,
            props: {
                releases: await response.json(),
            },
        };
    }
</script> -->

<script>
    // export let releases;
</script>

<div class="spacer" />
<div class="container text-center">
    <h1>Download</h1>
    <p>Download Lambda Code for your operating system</p>
    <div class="d-flex justify-content-center gap-3 flex-wrap">
        <a href="/download/linux" class="link-light download-btn"
            ><i class="fab fa-linux" /> Linux</a>
            <a href="/download/mac os" class="link-light download-btn"
                ><i class="fab fa-apple" /> mac os</a>
        <a href="/download/windows" class="link-light download-btn"
            ><i class="fab fa-windows" /> Windows</a>
        <a href="/download/source code" class="link-light download-btn"
            ><i class="fas fa-code" /> source code</a>
    </div>
    <p class="note note-warning bg-dark d-inline-block mt-4">
        <strong>Warning:</strong> Downloads are not working for now.
    </p>
    <!-- <div class="spacer" />
    <h1>Releases</h1>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">url</th>
                <th scope="col">Message</th>
            </tr>
        </thead>
        <tbody>
            {#each releases as release, i}
                <tr>
                    <th scope="row">{i + 1}</th>
                    <td>{release["tag_name"]}</td>
                    <td><a href="{release["html_url"]}">Go to release</a></td>
                    <td class="w-75"><p class="">{release["body"]}</p></td>
                </tr>
            {/each}
        </tbody>
    </table> -->
</div>
<div class="spacer" />
<div class="spacer" />

<style lang="scss">
    .download-btn {
        flex-basis: 255px;
        padding: 1rem 3rem;
        background-color: $dark-3;
        & > i {
            font-size: 1.3em;
            vertical-align: middle;
        }
    }
    .download-btn:hover {
        color: #bbbbbb !important;
        background-color: $dark-2;
    }
</style>
