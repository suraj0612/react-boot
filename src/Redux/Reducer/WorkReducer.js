import { useNavigate } from "react-router-dom"

const initial_state = {
    carts:[]
}


export const Addi_Reducer =(state=initial_state,action)=> {
    switch(action.type){
      case "ADDI":
       const itemIndex = state.carts.findIndex((value)=>{
        return value.id===action.payload.id
       })
       if( itemIndex>=0){
        state.carts[itemIndex].quantity= state.carts[itemIndex].quantity +1;
       }
       else{
        const temp = {...action.payload, quantity:1}
        return {
            ...state,
            carts:[...state.carts,  temp]
        }
       }



       
        case "Dele":
            const updt = state.carts.filter((valu)=> {
                return(
                    valu.id!==action.payload
                )
            })
                return{
                    ...state,
                    carts: updt
                }

         case "Dele_ones":
            const itemNumb = state.carts.findIndex((itemes)=> itemes.id=== action.payload.id)      
            if(state.carts[itemNumb].quantity>1){
                 state.carts[itemNumb].quantity =  state.carts[itemNumb].quantity-1
               
                return{
                    ...state,
                    carts:[...state.carts]
                }

            }else if(state.carts[itemNumb].quantity===1){
                const newList = state.carts.filter((article)=>{
                    return article.id!==action.payload.id
                })
                return{
                    ...state,
                    carts: newList
                }
            }

        default: return state;
    }
}