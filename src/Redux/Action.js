import { type } from "@testing-library/user-event/dist/type"

export const Addi =(item) =>{
    return{
        type:"ADDI",
        payload:item
    }
}

export const Dele=(id)=>{
    return{
    type:"Dele",
    payload: id
    }
}

export const Remover=(items) =>{
    return{
        type:"Dele_ones",
        payload:items
    }
}