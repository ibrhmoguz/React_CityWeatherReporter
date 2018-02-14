import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    console.log('Action Received:');
    console.log(action);

    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.state, ...state]; //making a new array [city, city, city...]
        //return state.push(action.payload.data);
        //return state.concat([action.payload.data]);
    }
    return state;
}