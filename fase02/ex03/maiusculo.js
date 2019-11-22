function maiusculo(palavra){
    grande=palavra.toUpperCase();
    resto= palavra.substring(3);
    return grande.substring(0,3)+resto;
    
}
