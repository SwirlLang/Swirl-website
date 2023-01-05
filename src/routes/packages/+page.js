/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const res = await fetch(
        "https://raw.githubusercontent.com/SwirlLang/spm/packages/packages.files"
    );
    const packages = await res.json();
    return {
        packages: packages,
    };
}
