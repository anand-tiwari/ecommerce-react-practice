import axios from "axios";
axios.defaults.withCredentials = true

//const base_path = 'https://ionvu-api.herokuapp.com/api/v1/'

const base_path = 'https://ecommerce-react-web.herokuapp.com/api/v1/'
    //const base_path = 'http://localhost:4000/api/v1/'

function getUrl(url) {
    return base_path + url
}

const getHeader = () => {
    return { "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}` }
}

export async function postData(url = '', data = {}) {
    const response = await axios({
        method: "post",
        url: getUrl(url),
        headers: getHeader(),
        data,
    })
    return response.data
}

export async function getData(url = '') {
    const response = await axios({
        method: "get",
        headers: getHeader(),
        url: getUrl(url)
    });
    return response.data
}