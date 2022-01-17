<script context="module">
	export function load({ url, params }) {
		return {
			props: {
                url,
                params
			}
		};
	}
</script>
<script>
    import Spacer from "$lib/Spacer.svelte"
    export let url;
    export let params;
</script>
<div class="container text-center">
    <h2>You are looking at the download page of {params.id}</h2>
    <p>{url}</p>
</div>
<Spacer/>
<Spacer/>