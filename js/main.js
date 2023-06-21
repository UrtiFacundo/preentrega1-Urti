let compra = prompt ("BienveniodoDesea adquirir un servicio o un box?");
if(compra === "servicio"){
    console.log("1: branding");
    console.log("2: publicidad");
    console.log("3: social media");
    console.log("4: web development");
    
    let op = prompt ("ingrese el numero del servicio que desea comprar: \n1. Brandin. \n2. Publicidad. \n3. Social Media. \n4. Web Development.");
 
switch(op){
    case "1":
        let tarjeta =( prompt("para adquirir el servicio de branding, ingrese num de tarjeta"))
    if(Number(tarjeta)){
    alert('Felicidades, usted adquirio el servicio de Branding');
    }
    if(isNaN(tarjeta)){
        alert('ingrese una tarjeta valida');
    }
    }
    switch(op){
        case "1":
            let tarjeta =( prompt("para adquirir el servicio de branding, ingrese numero de tarjeta"))
        if(Number(tarjeta)){
        alert('Felicidades, usted adquirio el servicio de Branding');
        }
        if(isNaN(tarjeta)){
            alert('ingrese una tarjeta valida');
        }
        }
        switch(op){
    case "2":
        let tarjeta =( prompt("para adquirir el servicio de publicidad, ingrese numero de tarjeta"))
    if(Number(tarjeta)){
    alert('Felicidades, usted adquirio el servicio de publicidad');
    }
    if(isNaN(tarjeta)){
        alert('ingrese una tarjeta valida');
    }
    }
    switch(op){
        case "3":
            let tarjeta =( prompt("para adquirir el servicio de Social Media, ingrese numero tarjeta"))
        if(Number(tarjeta)){
        alert('Felicidades, usted adquirio el servicio de Social Media');
        }
        if(isNaN(tarjeta)){
            alert('ingrese una tarjeta valida');
        }
        }
        switch(op){
            case "4":
                let tarjeta =( prompt("para adquirir el servicio de Web Development, ingrese numero tarjeta"))
            if(Number(tarjeta)){
            alert('Felicidades, usted adquirio el servicio de Web Development');
            }
            if(isNaN(tarjeta)){
                alert('ingrese una tarjeta valida');
            }
            }


} else if (compra === "box"){
    console.log("a: Branding & web Development");
    console.log("b: Social Media & Publicidad");
 let op = prompt ("ingrese la letra del BOX que desea comprar: \nA. Brandin & Web Development. \nB. Social Media & Publicidad");

 switch(op){
    case "a":
        let tarjeta =( prompt("para adquirir el BOX de Branding & Web Development, ingrese numero de tarjeta"))
    if(Number(tarjeta)){
    alert('Felicidades, usted adquirio el BOX de Branding & Web Development');
    }
    if(isNaN(tarjeta)){
        alert('ingrese una tarjeta valida');
    }
    }
    switch(op){
        case "b":
            let tarjeta =( prompt("para adquirir el BOX de Social Media & Publicidad, ingrese numero de tarjeta"))
        if(Number(tarjeta)){
        alert('Felicidades, usted adquirio el BOX de Social Media & Publicidad');
        }
        if(isNaN(tarjeta)){
            alert('ingrese una tarjeta valida');
        }
        }
}
