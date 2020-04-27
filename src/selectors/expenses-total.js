
export default (expenses) => {
    return expenses.map(x=>x.amount).reduce((a,b)=>a+b,0);
};