"use server";
import { options } from "../constants/Options";
export async function fetchall(url,page)
{
    console.log(page)
    const response = await fetch(`${url}/?language=en-US&page=${page}`,options);
    const data     = await response.json();
    return data?.results;
}

/**
 * Server action it's a react feature
 * this function can be used on the client and server as well
 * The main aim of using this is to fetch the data only on the server side
 */