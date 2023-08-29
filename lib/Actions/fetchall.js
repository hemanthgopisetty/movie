"use server";
import { url } from "../constants/URLS";
import { options } from "../constants/Options";
export async function fetchall(page)
{
    console.log(page)
    const url1     = url["Now Playing"].movie.route();
    const response = await fetch(`${url1}/?language=en-US&page=${page}`,options);
    const data     = await response.json();
    return data?.results;
}

/**
 * Server action it's a react feature
 * this function can be used on the client and server as well
 * The main aim of using this is to fetch the data only on the server side
 */