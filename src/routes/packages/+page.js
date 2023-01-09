import { supabase } from "$lib/supabaseClient.js";
    
async function getData() {
    const { data, error } = await supabase.from("package").select("*");
    if (error) throw new Error(error.message);

    return data;
}

/** @type {import('./$types').PageLoad} */
export async function load({ }) {
    const packages = await getData();
    return {
        packages: packages,
    };
}
