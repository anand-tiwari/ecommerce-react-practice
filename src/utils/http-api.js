import axios from "axios";
axios.defaults.withCredentials = true

// const base_path = 'https://ionvu-api.herokuapp.com/api/v1/'

const base_path = 'https://ecommerce-react-web.herokuapp.com/api/v1/'
    //const base_path = 'http://localhost:4000/api/v1/'

function getUrl(url) {
    return base_path + url
}

export async function postData(url = '', data = {}) {
    const response = await axios({
        method: "post",
        url: getUrl(url),
        data,
    })
    return response.data
}

export async function getData(url = '') {
    const response = await axios({
        method: "get",
        url: getUrl(url)
    });
    return response.data
}