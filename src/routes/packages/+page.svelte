<script>
    import {goto} from "$app/navigation";
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data.packages);
    let results = [];
    let packagesDiv;

    function search_packages(event) {
        packagesDiv.style.display = "block";
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

    function checkOutside(event) {
        if (!event.target.closest(".search-wrapper",)) {
            packagesDiv.style.display = "none";
        }
    }

    function open_package(event) {
        if (event.key === "Enter" && results.length) {
            goto(`/packages/${results[0].id}`);
        }
    }
</script>

<svelte:body on:click={checkOutside} />

<div class="spacer" />

<div class="container px-4 px-md-6 text-center">
    <h1 class="title mb-4">Packages</h1>
    <div class="w-md-60 mx-auto position-relative search-wrapper">
        <input
            class="form-control d-inline-block w-100 border-dark px-4 py-2 me-1 rounded-pill search-bar"
            type="search"
            placeholder="Find a package"
            aria-label="Search"
            on:input={search_packages}
            on:keydown={open_package} />
        <i class="bi bi-search search-icon text-muted"></i>
        <!-- display the search results -->
        <div class="mt-4 packages" bind:this={packagesDiv}>
            {#each results as pkg}
                <a
                    href="/packages/{pkg.id}"
                    class="link-light d-flex justify-content-between align-items-start">
                    <div class="me-auto text-start">
                        <p class="fw-bold mb-2">{pkg.name}</p>
                        <p
                            class="text-muted mb-0"
                            style="display: -webkit-box;-webkit-line-clamp: 1;
                            -webkit-box-orient: vertical;
                            overflow: hidden;">
                            {pkg.description}
                        </p>
                    </div>
                    <span class="badge bg-primary px-2 rounded-pill"
                        >{pkg.version}</span>
                </a>
            {/each}
        </div>
    </div>
</div>

<div class="spacer" />

<style lang="scss">
    @media screen and (min-width: 768px) {
        .px-md-6 {
            padding-left: 7rem !important;
            padding-right: 7rem !important;
        }
    }
    .title {
        font-size: 4rem;
        @media screen and (max-width: 768px) {
            font-size: 3rem;
        }
    }
    .search-wrapper {
        @media screen and (min-width: 992px) {        
                width: 60%;
        }
        .search-bar {
            padding-left: 3.5rem !important;
            &:focus {
                box-shadow: 0px 0px 0px 4px rgba($color: $primary, $alpha: 0.6);
            }
        }
        .search-icon {
            position: absolute;
            top: 50%;
            left: 1.5rem;
            transform: translateY(-50%);
        }
        .packages {
            position: absolute;
            max-height: 15rem;
            overflow-y: auto;
            width: 100%;
            z-index: 1;
            backdrop-filter: blur(5px);
            border-radius: 1rem;
            background-color: rgba(12,12,12, 0.849);
            & > * {
                padding: 10px 20px;
                &:hover {
                    background-color: rgba(37, 37, 37, 0.8);
                }
            }
        }
    }
</style>
