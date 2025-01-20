import axios from 'axios';

const fetchDataFromAPI = async (url:string) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching data from API:', error);
        throw error;
    }
};

export { fetchDataFromAPI };