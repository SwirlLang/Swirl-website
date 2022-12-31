/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
    const res = await fetch(
        "https://api.github.com/repos/swirllang/swirl/releases"
    );
    const releases = await res.json();
    const latestRel = releases[0];
    return {
        release: latestRel,
    };
}
