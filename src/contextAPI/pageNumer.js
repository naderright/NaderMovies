'use server'

let pageN;
export const putCurruntPage = (pageNow)=>{
    pageN=pageNow;
    return pageNow
}


export const pageNumer = ()=>{
    const page = putCurruntPage(pageN);
    return page
}