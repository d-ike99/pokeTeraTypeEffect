import axios from "axios";

const ENDPOINT_URL = '/api/Notes'

const callAPI = {
    // get method
    async getAll(path = '') {
        // debugger
        const result = await axios.get(`${ENDPOINT_URL}/Get/`)
        console.log(result);

        return result.data;
    }
}

export default callAPI;