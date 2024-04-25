for(let i=1; i<=10; i++){
    if(i %2=== 0){
        console.log("even number",i)
        continue;
    }
    if(i>5){
        console.log("breaking the loop ",i);
        break;

    }
    console.log("the number is odd ",i)
}