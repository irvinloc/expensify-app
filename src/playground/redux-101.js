import { createStore } from 'redux';
let mistate= {
    count:0,
    name:'Iña'
}
const incrementCount = ({incrementBy = 1}={})=> ({type:'INCREMENT', incrementBy});
const decrementCount = ({decrementBy = 1}={})=> ({type:'DECREMENT', decrementBy});
const setCount = ({count = 0}={})=> ({type:'SET', count});
const reseCount = ()=> ({type:'RESET'});

const countReducer = (state=mistate, { type, incrementBy=0, decrementBy=0, count=0}) => {
    switch(type) {
        case "INCREMENT" :
            return {
                count: state.count + incrementBy
            }
        case "DECREMENT" :
            return {
                count: state.count - decrementBy
            }
        case "RESET" :
            return {
                count: 0
            }
        case "SET" :
            return {
                count: count
            }       
        default: 
            return state
    }
};
const store = createStore(countReducer);
const unsubscribe=store.subscribe(()=> {
console.log(console.log("SUBSCRIPCION", store.getState()));
})
store.dispatch(incrementCount({incrementBy:5}));
store.dispatch(incrementCount());
//unsubscribe();
 store.dispatch(setCount({count:500}));
 store.dispatch(decrementCount({decrementBy:5}));
 store.dispatch(decrementCount());
