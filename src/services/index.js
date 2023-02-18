import { accessKey, BASE_URL } from "./config";

export const fetcher = async (endpoint) =>  {
    const result = await fetch(`${BASE_URL}/${endpoint}/?client_id=${accessKey}`);

    return result.json();
};

// export const fetcherHighlihts = async (count) => {
//     const result = await fetch(`${BASE_URL}/photos/random?count=${count}&client_id=${accessKey}`);
//     return result.json();
// }
