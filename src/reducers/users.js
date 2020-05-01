
export default (state={loggedUser:null}, action) => {
    switch(action.type) {                
        case "LOGIN" :
            console.log("en login reducer");
            return  {loggedUser:action.user}
        
        default: 
            return state
    }
};