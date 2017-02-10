const initialState = [
    {
        title:'first title',
        text:'text first note'
    },
    {
        title: 'second title',
        text: 'text second note'
    }
];

export default function userstate(state = initialState, action) {
    if (action.type === 'ADD_NOTE'){
        return [
            ...state,
            action.note
        ];
    }
    return state;
}