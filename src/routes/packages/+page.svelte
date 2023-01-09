<script>
    /** @type {import('./$types').PageData} */
    export let data;
    let results = [];
    function search_packages(event) {
        const query = event.target.value.toLowerCase();
        if (query) {
            results = data.packages.filter((pkg) => {
                const pkgName = pkg.name.toLowerCase();
                const description = pkg.description.toLowerCase();

                return pkgName.includes(query) || description.includes(query);
            });
        } else {
            results = [];
        }
    }
</script>

<div class="spacer" />

<div class="container px-4 px-md-6 text-center">
    <h1 class="title mb-4">Swirl Packages</h1>
    <div class="w-md-60 mx-auto">
        <input
            class="form-control d-inline-block w-100 border-dark px-4 py-2 me-1 rounded-pill search-bar"
            type="search"
            placeholder="Search"
            aria-label="Search"
            on:input={search_packages} />
        <!-- display the search results -->
        <div class="mt-4 w-auto mx-auto text-start packages">
            {#each results as pkg}
                <div class="package">
                    <a href="/packages/{pkg.id}" class="link-light">
                        <div>
                            <p class="fw-bold mb-0">{pkg.id}</p>
                            <p class="text-muted">{pkg.description}</p>
                        </div>
                        <p>{pkg.version}</p>
                    </a>
                </div>
            {/each}
        </div>
    </div>
</div>

<div class="spacer" />

<style lang="scss">
    @media screen and (min-width: 992px) {
        .w-md-60 {
            width: 60%;
        }
    }
    @media screen and (min-width: 768px) {
        .px-md-6 {
            padding-left: 7rem !important;
            padding-right: 7rem !important;
        }
    }
    .search-bar {
        &:focus {
            box-shadow: 0px 0px 10px 5px rgba($color: $primary, $alpha: 0.6);
        }
    }
    .title {
        font-size: 4rem;
        @media screen and (max-width: 768px) {
            font-size: 3rem;
        }
    }
    .packages {
        max-height: 20rem;
        overflow-y: scroll;
        padding-inline: 0.3rem;
        .package {
            margin-bottom: 1rem;
            border-radius: 1rem;
            box-shadow: 0px 5px 0px 0px rgba($color: $primary, $alpha: 0.5);
            transition: all 0.2s ease-in-out;
            &:hover {
                box-shadow: 0px 5px 0px 0px rgba($color: $primary, $alpha: 0.8);
            }
            a {
                padding: 1rem;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
        }
    }
</style>
