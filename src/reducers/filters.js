import moment from "moment";

const defaultFilterReducerState= {
    text:'',
    sortBy: 'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month'),
    autogenerating: false
}
export default (state=defaultFilterReducerState, action) => {
    switch(action.type) {
        case "RESET_FILTERS" :
            return action.filter
        case "SET_TEXT_FILTER" :
            // return {...state, text: action.filter.text}
        case "SORT_BY_DATE" :
        case "SORT_BY_AMOUNT" :
        case "SET_START_DATE":
        case "SET_END_DATE":
        case "SET_GENERATING":
        case "RESET_GENERATING":
                console.log(action.type);
                console.log(JSON.stringify({...state, ...action.filter}));
                return {...state, ...action.filter}
        
        default: 
            return state
        
    }
};