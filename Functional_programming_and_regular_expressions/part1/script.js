function sum(a){    
   return a.reduce((sum,element)=>sum+element);
}

function multiply(a){    
    return a.reduce((sum,element)=>sum*element);
 }

function reverse(str){
    return str.split('').reduce((reversed,element)=>element+reversed,"");
    
}

function  filterLongWords(str , val){
    return  str.filter(x=>x.length>val);
}