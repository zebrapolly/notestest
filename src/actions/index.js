import fetch from 'isomorphic-fetch';

export const deleteNote = (note) => dispatch => {
    //console.log(note);
    fetch(`//127.0.0.1:8080/notes/${note._id}`,{
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();

        })
        .then(function(note) {
            //console.log(note);
            dispatch({ type: 'DELETE_NOTE', note: note })
        });

}


export const addNote = (note) => dispatch => {
    console.log(note);
    fetch('//127.0.0.1:8080/notes',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            //console.log(response.body);
            return response.json();

        })
        .then(function(note) {
            console.log(note);
            dispatch({ type: 'ADD_NOTE', note: note })
        });

}

export const GetNotes = () => dispatch => {

    fetch('//127.0.0.1:8080/notes')
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            console.log(response);
            return response.json();

        })
        .then(function(notes) {
            dispatch({ type: 'FETCH_NOTES_SUCCESS', notes: notes })
        });

}