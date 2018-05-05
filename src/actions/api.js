import {host} from './const'

export async function login(login) {
    let formData = new FormData();
    for(let i in login){
        formData.append(i, login[i]);
    }

    return await fetch(host+'api/login', {
        method: 'POST',
        body: formData
    })
}


export async function register(registration) {
    let formData = new FormData();
    for(let i in registration)
        formData.append(i, registration[i]);
    return await fetch(host+'api/register', {
        method: 'POST',
        body:formData
    })
}
export async function getNews() {
    return await fetch(host+'api/get-news', {
        method: 'GET',
    }).then((response)=>response.json())
}
export async function getArticle(article) {
    return await fetch("http://www.ruck.eu/backend/rest/products/fpn/"+article+"?frequency=50&api_key=public", {
        method: 'GET',
        headers: {
            'Accept': 'text/plain;charset=utf-8',
            'Content-Type': 'text/plain;charset=utf-8',
        }
    }).then((response)=>response.text())
}


export async function getArticle_2(response) {
    return await fetch("http://www.ruck.eu/backend/rest/calculations/standarddata?partNumber="+response+"&curveType=0&etaDistance=70&curvePoints=50&language=de&api_key=public", {
        method: 'GET',
    }).then((response)=>response.json())
}

export async function getArticle_3() {
    return await fetch("http://www.ruck.eu//backend/rest/calculations/dutydata?partNumber=132861_50_230_0_Us&qV=2&psF=528&FunctionType=0&FunctionPoints=50&api_key=public", {
        method: 'GET',
    }).then((response)=>response.json())
}

//
// export async function getAllPaper() {
//     return await fetch(host+'api/?all_papers=1', {
//         method: 'GET',
//     }).then((response)=>response.json())
// }

export async function getProduct(id) {
    return await fetch(host+'api/get-product/'+id, {
        method: 'GET',
    }).then((response)=>response.json())
}

export async function getManufact() {
    return await fetch(host+'api/get-manufact', {
        method: 'GET',
    }).then((response)=>response.json())
}
export async function getCategories() {
    return await fetch(host+'api/get-category', {
        method: 'GET'
    }).then((response)=>response.json())
}
export async function getSubCategories(id) {
    return await fetch(host+'api/get-sub-category?category='+id, {
        method: 'GET'
    }).then((response)=>response.json())
}
export async function getModels(id) {
    return await fetch(host+'api/get-models?product='+id, {
        method: 'GET'
    }).then((response)=>response.json())
}
export async function getProducts(id) {
    return await fetch(host+"api/get-products?sub_category="+id+"&all=1", {
        method: 'GET'
    }).then((response)=>response.json())
}
export async function getAllProducts() {
    return await fetch(host+"api/get-products?tech=1", {
        method: 'GET'
    }).then((response)=>response.json())
}
export async function getAllSubCategories() {
    return await fetch(host+"api/get-sub-category?all=1", {
        method: 'GET'
    }).then((response)=>response.json())
}
export async function getOneNews(id) {
    return await fetch(host+"api/get-one-news?id="+id, {
        method: 'GET'
    }).then((response)=>response.json())
}

export async function getShop(id) {
    return await fetch(host+'api/get-cart?user_id='+id, {
        method: 'GET'
    }).then((response)=>response.json())
}

export async function getProductPhotos(id) {
    return await fetch(host+'api/get-product-photos?product='+id, {
        method: 'GET'
    }).then((response)=>response.json())
}

export async function getData(name) {
    return await fetch(host+'api/get-techdata?name='+name, {
        method: 'GET'
    }).then((response)=>response.json())
}
// export async function getProductsCategory(id) {
//     return await fetch(host+'api/get-products?category='+id, {
//         method: 'GET'
//     }).then((response)=>response.json())
// }

export async function shopAdd(shopAdd) {
    let formData = new FormData();
    for(let i in shopAdd)
        formData.append(i, shopAdd[i]);
    return await fetch(host+'api/post-cart', {
        method: 'POST',
        body:formData
    })
}


export async function feedback(form) {
    let formData = new FormData();
    for(let i in form)
        formData.append(i, form[i]);
    return await fetch(host+'api/post-feedback', {
        method: 'POST',
        body:formData
    });

}