function ateZero(num){
//negativo
if (num<0){
    console.log(num);
    do {
        num++;
        console.log(num);
}   while (num<0);
}
//positivo
else {
       console.log(num);
    do {
        num--;
        console.log(num);
}   while (num>0);
}
}
