const baseUrl =   "https://mohmad-server.onrender.com" ; // 

export const fetchApi = async (route, method, body) => {
    const url = baseUrl + route;
    return await fetch(url, {
        method: method || 'GET',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: body,

    }).then(res => res.json())
    .catch((error) => {
        console.error("fetch Error", error.message);
    });
}

export const live = async ()=>{
    const route = "/"
    return await fetchApi(route,"GET",null)
}

export const findprudacts = async ()=>{
    const route = "/findprudacts"
    return await fetchApi(route,"POST",{})
}
