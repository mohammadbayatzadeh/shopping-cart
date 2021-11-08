import axios from 'axios'

const URL = "https://fakestoreapi.com"

const getproducts = async () =>{
    const response = await axios.get(`${URL}/products`)
    return response.data
}

export {getproducts};