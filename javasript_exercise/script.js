
function max(a,b){ //first question
    if(a>b)
    return a;
    else
    return b;
}


function maxOfThree(a,b,c){
    if(a>b){
        if(a>c)
            return a;
        else
            return c;
    }
    else{
        if(b>c)
            return b;
        else
            return c;
    }
}

function isVowel(a){
    switch(a){
        case 'a' : return true; 
        case 'e' : return true; 
        case 'i' : return true; 
        case 'o' : return true;
        case 'u' : return true;
        default: return false;    
    }
    
}

function sum(a){
    var sum=0;
    a.forEach(element=>{
        sum+=element;
    });
    multiply(a);
    return sum;


}
function multiply(a){
    var result=1;
    a.forEach(element=>{
        result*=element;
    });
    return result;
}

function reverse(str){
    var reversed=""
    for(var i=str.length-1; i>=0; i--){
        reversed+=str[i];
    }
    return reversed;
}

function findLongestWord(str){
    var maxLength=str[0].length;
    for(var i=1; i<str.length; i++){
       if(str[i].length>maxLength){
        maxLength=str[i].length;
       }
    }
    return maxLength;
}

function  filterLongWords(str , val){
    return  str.filter(x=>x.length>val)
}

function jsfiddle(a){
    const b = a.map(function(elem, i, array) {
        return elem * 10;
      })
      console.log(b);
      const c = a.filter(function(elem, i, array){
        return elem === 3;});
        console.log(c);
      const d = a.reduce(function(prevValue, elem, i, array){
        return prevValue * elem;
      });
      console.log(d);
}
function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }


  console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10))); //max(a,b)
  console.log("Expected output of maxOfThree(20,10,30) is 30  " + myFunctionTest(30, maxOfThree(20,10,30))); //maxOfThree(a,b,c)
  console.log("Expected output of isVowel('a') is true  " + myFunctionTest(true, isVowel('a'))); //isVowel(a)
  console.log("Expected output of sum([1,2,3,4,5]) is 15" + myFunctionTest(15, sum([1,2,3,4,5]))); //sum(a)
  console.log("Expected output of multiply([1,2,3,4,5]) is 120" + myFunctionTest(120, multiply([1,2,3,4,5]))); //multiply(a)
  console.log("Expected output of reverse(Alazar) is razalA  " + myFunctionTest("razalA", reverse("Alazar"))); //reverse(str)
  console.log("Expected output of findLongestWord([JS,is,hard,for,Noobs]) is 5 that is length of Noobs  " + myFunctionTest(5, findLongestWord(["JS","is","hard","for","Noobs"]))); //findLongestWord(str)
  console.log("Expected output of filterLongWords([JS,is,hard,for,Noobs] , 3) is ['hard', 'Noobs']  " + myFunctionTest(["hard", "Noobs"], filterLongWords(["JS","is","hard","for","Noobs"] , 3))); //filterLongWords(str , val)
  console.log("Expected output of jsfiddle([1,2,3,4,5,6]) is [10, 20, 30, 40, 50, 60]  " + myFunctionTest(720, jsfiddle([1,2,3,4,5,6]))); //jsfiddle(a) //not working
  