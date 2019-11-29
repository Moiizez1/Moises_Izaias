function tempo(data1,data2, unidade){
    inicio= Date.parse(data1);
    fim = Date.parse(data2);
    time = Math.abs(fim-inicio);
    
    switch (unidade){
        case "dia":
        return Math.ceil(time/(1000 * 60 *60 *24));
    
        case "mês":
        return Math.ceil(time/(1000*60*60*760));
        
        case "ano":
        return Math.ceil(time/(1000*600*600*100));
    }

}

