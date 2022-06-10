export const increment = (number) => {
    // if (number === undefined) {
    //     return {
    //         type: 'INCREMENT',
    //         payload: 1
    //     }
    // } else {
    //     return {
    //         type: 'INCREMENT',
    //         payload: number
    //     }
    // }
    switch(number) {
        case undefined:
            return {
                type: 'INCREMENT',
                payload: 1
            }
        default:
            return {
                type: 'INCREMENT',
                payload: number
            }
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}