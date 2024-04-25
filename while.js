let num=645475;
let nod=0
while(num>0){
    let ld=Math.floor(num%10)
    console.log(ld)
    num=Math.floor(num/10)
    nod=nod+1
}
console.log(nod)