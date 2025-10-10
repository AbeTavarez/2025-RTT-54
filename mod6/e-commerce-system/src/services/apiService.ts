import { handleAPIError, APIError } from "../utils/errorHandler";

const BASE_URL ='https://dummyjson.com';

/**
 * GET all products, default 30
 */
export async function getProducts(limit: number = 30) {
    try {
        // send request
        const response = await fetch(`${BASE_URL}/products?limit=${limit}`);

        // check if response is NOT ok, then throw and API Error
        if (!response.ok) {
            throw new APIError('Error fetching data from API.', response.status);
        }

        // parse the data and return it
        const data = await response.json();
        // console.log('DATA: ', data);
        
        return data.products;

    } catch (error: APIError | any) {
        handleAPIError(error);
    }
}