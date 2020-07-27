import {hwReducer} from "./homeWorkReducer";

export let a = 7

test('reducer should sort name from A>Z ', () => {
    const startState: Array<{ id: string, name: string, age: number }> = [
        {id: "1", name: "Bohdan", age: 24},
        {id: "2", name: "Anton", age: 24},
        {id: "3", name: "Dima", age: 29},
        {id: "4", name: "Oleg", age: 28},
        {id: "5", name: "Alex", age: 31},
        {id: "6", name: "Peter", age: 27}
    ];
    const endState = hwReducer(startState, {type: 'SORT', payload: 'up'})
    expect(endState[0].name).toBe("Alex");
    expect(endState[5].name).toBe("Peter");
});

test('reducer should sort name from Z>A ', () => {
    const startState: Array<{ id: string, name: string, age: number }> = [
        {id: "1", name: "Bohdan", age: 24},
        {id: "2", name: "Anton", age: 24},
        {id: "3", name: "Dima", age: 29},
        {id: "4", name: "Oleg", age: 28},
        {id: "5", name: "Alex", age: 31},
        {id: "6", name: "Peter", age: 27}
    ];
    const endState = hwReducer(startState, {type: 'SORT', payload: 'down'})
    expect(endState[0].name).toBe("Peter");
    expect(endState[5].name).toBe("Alex");
});

test('all person should be older 18 ', () => {
    const startState: Array<{ id: string, name: string, age: number }> = [
        {id: "1", name: "Bohdan", age: 24},
        {id: "2", name: "Anton", age: 25},
        {id: "3", name: "Dima", age: 29},
        {id: "4", name: "Oleg", age: 20},
        {id: "5", name: "Alex", age: 17},
        {id: "6", name: "Peter", age: 16}
    ];
    const endState = hwReducer(startState, {type: 'CHECK', payload: 18})
    expect(endState.filter(p=>p.age<18).length).toBe(0);
});
