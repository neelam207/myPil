import axios from "axios"

export default request = (data) => {
    // connectivity check... 
    return axios.request ({
        method : data.method,
        url : data.url,
    })
}
