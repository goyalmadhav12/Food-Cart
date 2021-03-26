export const IncreaseAction=(data)=>{
    return {
        type:'INCREASE_COUNT',
        payload:{
            name:data.name,
            price:data.price,
        }
    }
}
export const DecreaseAction=(da)=>{
    return {
        type:'DECREASE_COUNT',
        payload:{
            name:da.name,
            price:da.price
        }
    }
}
