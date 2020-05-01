import  { login, logout } from '../../actions/auth';

test('Should set up login action object',()=>{
    const uid='1232asvb';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('Should set up logout action object',()=>{
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})