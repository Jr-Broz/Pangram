function isItPangram() { 

let alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x",'w','y','z']

let usuario = prompt('escreva uma sentença');
let regex = /[A-Za-z]/g;
let usuario2 = usuario.match(regex);
 
  if(usuario2.length >= 26){

    console.log("é um pangrama");
  }
  else if(usuario.length === typeof "Number"){
      console.log("Nao é um pangrama.");
  }
}

isItPangram();
