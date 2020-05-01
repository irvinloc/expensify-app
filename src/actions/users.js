
import database from '../firebase/firebase';


export const login = (id,username, password)=>({
    type: "LOGIN",
    user:{
        id,
        username,
        password
    }
});

export const startLogin = (username, password) => {
    return (dispatch) => {
        return database.ref('users').once('value').then((snapshot) => {
            const users=[];
            console.log(snapshot)
            snapshot.forEach((childSnapshot)=>{
                console.log(childSnapshot.val());
                users.push({id: childSnapshot.key, ...childSnapshot.val()})
            });
            console.log(users)
            const miuser=users.filter((x)=>x.username===username && x.password===password);
            console.log(miuser)
            if (miuser.length===1) {
                dispatch(login(
                    miuser.id,
                    username, 
                    password
                ));
            }
            
        });
    };
};
