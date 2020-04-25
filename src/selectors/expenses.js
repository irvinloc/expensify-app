import moment from 'moment'
export default (expenses,{text, sortBy, startDate, endDate}) => {
    
    return expenses.filter((exp)=> {
        const createdAtMoment =  moment(exp.createdAt);
        
        const startDateMatch = startDate? startDate.isSameOrBefore(createdAtMoment, 'day'): true;
        const endDateMatch = endDate? endDate.isSameOrAfter(createdAtMoment, 'day'): true;
        
        const textmatch = !!!text || (exp.description.toLowerCase().includes(text.toLowerCase())) 
                          || (exp.note.toLowerCase().includes(text.toLowerCase())) 
        return startDateMatch && endDateMatch && textmatch
    }).sort((a,b)=> {
      if (!!!sortBy)  {
        return 0;
      } 
      else if (sortBy==='date')  { 
        return a.createdAt<b.createdAt?1:-1;
      } else if (sortBy==='amount') {
        return a.amount<b.amount?1:-1;
      }
    })
};