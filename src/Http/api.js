const BASE_URL = process.env.REACT_APP_BASE_URL;

const httpPostRequest = (apiRoute,body,json=true) => {
    let headers = {}
    if(json==true)
    {
        headers = {
            'Content-Type':'application/json'
        }
    }

    return fetch(`${BASE_URL}${apiRoute}`,{
        method: 'POST',
        headers: headers,
        body:body        
    })
}
const httpGetRequest = (apiRoute,params) => {
    const queryParams = new URLSearchParams(params).toString();
    const url = `${BASE_URL}${apiRoute}?${queryParams}`
    return fetch(url,{
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
    });
}
const userData = () => {
    return httpGetRequest('/api/user/data',{});
}
const login = (email,password) => {
    const body = JSON.stringify({
        email: email,
        password: password
    });
    return httpPostRequest('/api/user/login',body);
}
const productData = () => {
    return httpGetRequest('/api/product',{});
}

const CategoryData = () => {
    return httpGetRequest('/api/categoria',{});
}
const saveProductData = (body,id) =>{
    return httpPostRequest('/api/product/'+id,body,false);
}
const api = {
    login:login,
    userData:userData,
    productData:productData,
    CategoryData:CategoryData,
    saveProductData:saveProductData
};
export default api;