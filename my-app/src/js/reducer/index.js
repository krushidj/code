import { ADD_ARTICLE } from "../constatnts/action_types";

const initialState = {
    articles: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
        return { ...state, articles: state.articles.concat(action.payload) };
        default:
          return state;
    }
};
export default rootReducer;