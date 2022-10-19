// console.log("hello");
// varName='Oryan';
// console.log(varName);
// varGreet='sup';
// console.log(varGreet);

// function sayMyName(myName){
//     if(myName=="oryan"){
//         console.log("what up", myName);
//     }
//     else{
//         console.log("Fuckin Loser");
//     }
// }
// sayMyName("oryan")

// function upToSix(start,end){
//     var i=start;
//     while(i<=end){
//         console.log(i);
//         i++;
//         if(i>27){
//             console.log("we are done");
//         }
//     }
// }
// upToSix(1,27)

// function upToSix(start,end){
//     for(var i=start; i<=end; i++){
//         if(i<=27){
//             console.log(i);
//             }
//         if(i%5==0){
//             console.log("fuck off!");
//         }
//     }
// }
// upToSix(1,28)

// function evenNumbers(arr,start,end){
//     for(var i=start; i<=end; i++){
//         if(i%2==0 && !arr.includes(i)){
//             console.log(i);
//         }
//     }
// }
// evenNumbers([6,8,10],1,1000)

// function numSwap(start,end){
//     for(let i=start; i<=end; i++){
//         console.log(i)
//         if(i==42){
//             console.log("ORyan");
//         }
        
//     }
    
// }   

// numSwap(1,43)

// function countUp(start,end){
//     for(var i=start; i<=end; i++){
//         console.log(i);
//     }
// }
// countUp(-52,1066)

// function beHappy(start,end){
//     for(let i=start; i<=end; i++){
//         if(i<=98){
//             console.log("good morning");
//         }
//     }
// }
// beHappy(1,98)

// function negMultiples(arr,start,end){
//     for(var i=start; i<=end; i++){
//         if(i%3==0 && !arr.includes(i)){
//             console.log(i);
//         }
//     }
// }
// negMultiples([-3,-6],-300,0)

function addOdd(start,end){
    var sum=0;
    for(var i=start; i<=end; i++){
        if(i%2!=0){
            sum+=i;
            console.log("This is the number "+i);
        }
    }
    console.log(sum);
}
// addOdd("sup",20000)

// Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

function countDown(start){
    var i=start;
    while(i>0){
        console.log(i);
        i-=4;
    }

}
// countDown(2016)


function wifeSwap(arr){
    var i=arr[1];
    console.log(i);
    arr[1]=arr[3];
    console.log(arr);
    arr[3]=i;
    console.log(arr);

}
// wifeSwap([2,10,6,8])

function arrShift(arr){
    var temp=arr[arr.length-1];
    for(var i=arr.length-2; i>=0; i--){
        arr[i+1]=arr[i];
        console.log(arr);
    }
    arr[0]=temp;
    console.log(arr);
}
// arrShift([2,10,6,8])

function printUp(start,end){
    for(var i=start; i<=end; i++){
        if(i%5==0){
            console.log("Coding");
        }
        if(i%10==0){
            console.log("Dojo");
        }
        else{
            console.log(i);
        }
    }
}
// printUp(1,100)

// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem
// is essentially identical; don’t be thrown off! Given 4 parameters
// (param1,param2,param3,param4) , print the multiples of param1 , starting at param2 and
// extending to param3 . One exception: if a multiple is equal to param4 , then skip (don’t print) it.
// Do this using a WHILE . Given (3,5,17,9) , print 6,12,15 (which are all of the multiples of 3
// between 5 and 17 , and excluding the value 9 ).

function tripUp(param1,param2,param3,param4){
    
    while(param2%param1==0){
        console.log(param2);        
        if(param2<=param3){
            param2++;
        }
        if(param2==param4){
            console.log("void");
        }
    }
}
tripUp(3,5,17,9)