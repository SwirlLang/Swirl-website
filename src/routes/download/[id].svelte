<script context="module">
	export function load({ params }) {
		return {
			props: {
                params
			}
		};
	}
</script>
<script>
    import Spacer from "$lib/Spacer.svelte"
    export let params;
</script>
<Spacer />
<div class="container text-center">
    <h2>You are looking at the download page of {params.id}</h2>
</div>
<Spacer/>
<Spacer/>