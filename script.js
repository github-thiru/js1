// write a programm to add two even number if only both are even numbers
let n1=2
let n2=2
if (n1%2==0&&n2%2==0){
     a=n1+n2
    console.log(a,"even number")
}
else{
   console.log("not valid")
}



// Write a program to check whether the number is positive, negative, or zero. Additionally, if the number is positive, check if it is even or odd.
// eg: num=6 positive,even

   num=-5
    if (num==0){
      console.log(num,"zero")
    }
    else if(num>0){
       if(num%2==0){
        console.log("+ve even")
       }
       else{
        console.log("+ve odd")
       }
    }
    else {
         console.log(num,"negative")
    }

   // Write a program with a num prints the multiplication table for that number from 1 to 10 using a loop.


var num=5
for(i=1;i<=10;i++){
   console.log(num,"x",i,"=",num*i)
}

for( i=1; i<=10;i++){
   for( j=1; j<=10;j++){
       console.log(i,"x",j,"=",i*j)
   }
}
