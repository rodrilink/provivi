export const getResultList = () => {
    return [
        {
            id: 1,
            date: new Date(Date.now()).toDateString(),
            name: 'add',
            operation: '1 + 2',
            result: 3
        },
        {
            id: 2,
            date: new Date(Date.now()).toDateString(),
            name: 'multiply',
            operation: '2 * 2',
            result: 4
        },
        {
            id: 3,
            date: new Date(Date.now()).toDateString(),
            name: 'secondPower',
            operation: '10 ^ 2',
            result: 100
        }
    ]
}