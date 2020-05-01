export default (state={}, action) => {
    switch(action.type) {                
        case "LOGIN" :
            console.log("en login reducer");
            return  {uid:action.uid}
        case "LOGOUT" :
            console.log("en logout reducer");
            return  {}
        default: 
            return state;
    }
};