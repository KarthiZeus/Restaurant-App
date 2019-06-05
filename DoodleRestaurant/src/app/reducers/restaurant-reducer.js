import {RESTAURANT} from '../utility/action-types'
import {DOODLE_RESTAURANT} from '../utility/constants'
const initialState = {
    server_error: {},
    Starter : DOODLE_RESTAURANT.STARTER,
    MainCourse : DOODLE_RESTAURANT.MAIN_COURSE,
    Desert : DOODLE_RESTAURANT.DESERT,
    Drinks : DOODLE_RESTAURANT.DRINKS,
    MyCart : []
         
}

const RestaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESTAURANT.ADD_ITEM:
            return {
                ...state,
                server_error: {},
                Starter: project
            };
        default:
            return state;
    }
}


export default RestaurantReducer;