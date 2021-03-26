const CountReducer=(state=[],action)=>{
    switch(action.type)
    {
        case 'INCREASE_COUNT':
        {
            return [...state,action.payload];
        }
        case 'DECREASE_COUNT':
        {
            console.log(state);
            console.log(action.payload)
            let f=0;
            for(let i=0;i<state.length;i++)
            {
                if(state[i].name===action.payload.name)
                {
                    f=1;
                    state.splice(i,1);
                    break;
                }
            }
            if(f===0)
            {
                console.log('not found');
                console.log(state);
            }
            else
            {
                console.log(state);
            }
            return [...state];
        }
        default:
            return state;
    }
}

export default CountReducer;