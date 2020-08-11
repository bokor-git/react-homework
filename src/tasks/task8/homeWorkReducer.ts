
const initState: Array<{ id: string, name: string, age: number }> = [
    {id: "1", name: "Bohdan", age: 24},
    {id: "2", name: "Anton", age: 25},
    {id: "3", name: "Dima", age: 29},
    {id: "4", name: "Oleg", age: 20},
    {id: "5", name: "Alex", age: 17},
    {id: "6", name: "Peter", age: 16}
];


export const hwReducer = (state: Array<{ id: string, name: string, age: number }>, action: { type: string, payload: any }) => {
    switch (action.type) {
        case 'SORT':
            switch (action.payload) {
                case "up":
                    const compareUp = (a: { id: string, name: string, age: number }, b: { id: string, name: string, age: number }) => {
                        let comparison = 0;
                        if (a.name > b.name) {
                            comparison = 1;
                        } else if (a.name < b.name) {
                            comparison = -1;
                        }
                        return comparison;
                    };
                    return [...state.sort(compareUp)]
                case 'down':
                    const compareDown = (a: { id: string, name: string, age: number }, b: { id: string, name: string, age: number }) => {
                        let comparison = 0;
                        if (a.name < b.name) {
                            comparison = 1;
                        } else if (a.name > b.name) {
                            comparison = -1;
                        }
                        return comparison;
                    };
                    return [...state.sort(compareDown)]
            }
        case 'CHECK':
            return state.filter(person => person.age >= action.payload)
        default:
            return state
    }
};