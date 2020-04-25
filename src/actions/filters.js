import moment from 'moment'
const defaultFilterReducerState= {
    text:'',
    sortBy: 'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month'),
    autogenerating: false
}

export const sortByAmount = ()=>({
    type:"SORT_BY_AMOUNT",
    filter: {
        sortBy: 'amount'
    }
});
export const sortByDate = ()=>({
    type:"SORT_BY_DATE",
    filter: {
        sortBy: 'date'
    }
});
export const setStartDate = (startDate)=>({
    type:"SET_START_DATE",
    filter: {
        startDate
    }
});
export const setEndDate = (endDate=99)=>({
    type:"SET_END_DATE",
    filter: {
        endDate
    }
});
export const resetFilters = ()=>({
    type: "RESET_FILTERS",
    filter: defaultFilterReducerState
});
export const setGenerating = ()=>({
    type: "SET_GENERATING",
    filter: {
        autogenerating: true
    }
});
export const resetGenerating = ()=>({
    type: "RESET_GENERATING",
    filter: {
        autogenerating: false
    }
});
export const setTextFilter = (text = '')=>({
        type: "SET_TEXT_FILTER",
        filter: {
            text   
        }
    });
