import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
    const res = await fetch(
        "https://raw.githubusercontent.com/SwirlLang/spm/packages/packages.files"
    );
    const packages = await res.json();
    // get the package from the list of packages using params.pkg
    if (packages.find((pkg) => pkg.name === params.pkg)) {
        let pkg = packages.find((pkg) => pkg.name === params.pkg);
        return {
                package: pkg,
        };
    }
    else {
        throw error(418, {
            message: 'Package not found'
        });
    }
}
