const makeBins = (exp)=>{
    let  bins = [];
    let  binCount = 0;
    let  interval = 100;
    let  numOfBuckets = 1000;

    //Setup Bins
    for(let  i = 0; i < numOfBuckets; i += interval){
        bins.push({
            binNum: binCount,
            minNum: i,
            maxNum: i + interval,
            count: 0
        })
        binCount++;
    }

    //Loop through data and add to bin's count
    for (let  i = 0; i < exp.length; i++){
        const  item = exp[i].amount;
        for (let  j = 0; j < bins.length; j++){
            const  bin = bins[j];
            if(item > bin.minNum && item <= bin.maxNum){
                bin.count++;
            }
        }  
    }
    
    return bins.map(item=>({x:item.maxNum, y:item.count}))
    
}
export default makeBins;