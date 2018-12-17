let initialState = 0;
export const count = (state=initialState, action) => {
    switch(action.type){
        case 'ADD':
            return state + 1
        case 'SUBTRACT':
            return state - 1
        default:
            return state
    }
}

export const setCount = {
    add: (disptach) => {
        disptach({
            type: 'ADD'
        })
    },
    subtract: (disptach) => {
        disptach({
            type: 'SUBTRACT'
        })
    }
}