import { error } from "@sveltejs/kit";
import { supabase } from "$lib/supabaseClient.js";

async function getPackage(pkg) {
    const { data, error } = await supabase
        .from("packages")
        .select("*")
        .eq("id", pkg);
    if (error) throw new Error(error.message);

    return data;
}

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    try {
        const data = await getPackage(params.pkg);
        if (data.length > 0) {
            return {
                package: data[0],
            };
        } else {
            throw error(418, {
                message: "Package not found",
            });
        }
    } catch (err) {
        console.log(err);
        throw error(err.status, {
            message: err.body.message,
        });
    }
}
