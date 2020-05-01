import authReducer from '../../reducers/auth';

test('should set uid for logged in', ()=>{
    const uid='dasdasd';
    const state = authReducer(undefined, { type: 'LOGIN', uid});
    expect(state).toEqual({uid});
    expect(state.uid).toEqual(uid);
})
test('should clear uuid for loffed out', ()=>{
    
    const state = authReducer({ uid:'loquesea'}, { type: 'LOGOUT'});
    expect(state).toEqual({});
})