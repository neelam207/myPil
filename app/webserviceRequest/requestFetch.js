import fetch from 'react-native-fetch-polyfill'

export default request = async (url, options) => {
    // Connectivity choueck.. 
    return fetch (url, options) ({})
}