
function button (){
    document.getElementById("agradecimento").innerHTML="Obrigado por clicar";
    /*alert("obrigado por clicar")*/
}
function redirecionar(){
    window.open("http://www.google.com");
    //window.location.href="http://www.github.com";/*abre na mesma aba*/
}
function trocar(){
    document.getElementById("mousemove").innerHTML="Olá valeu";
    //alert("trocar texto");
}

function voltar(elementos){
    document.getElementById("mousemove").innerHTML="eita";



}
function load(){
    alert("Página carregada");
}
function funcaochange(elemento){
    console.log(elemento.value)
}
/*function soma(n1,n2){
    return n1+n2;

}
*/
/*function validaIdade(idade){
    var validar ;
    if (idade>=18){
        validar=true;

    }else{
        validar=false;
    }
    return validar;

}
/
var idade=prompt("Qual é sua idade ? ");
console.log(validaIdade(idade));
/*function setReplace(frase,nome,novo_nome){
    return  frase.replace(nome,novo_nome)

}
alert(setReplace("Vai Japão ", "Japão","Brasil"));
alert(soma(5,10));*/

/*var d = new Date();
alert(d);*/

/*var count ;
for(count = 0; count <=5; count++) {
    alert(count);
};
*/

/*var count = 0;
while (count <= 5 ){
    console.log(count);
    count= count+1;
}
*/


/*var idade = prompt("Qual a sua idade ? ");

if (idade >= 18){
    alert("Maior de idade");

}else{
    alert("Menor de idade");
};*/




/*var frutas = [{nome :"Maça", cor:"vermelha"},{nome :"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);*/




/*
var fruta ={nome :"Maça", cor:"vermelha"};
console.log(fruta.nome);
*/



//var nome = "Karine Fernanda"
//var idade = 24;

//alert(" A " + nome + " tem " + idade   + " anos" );
//var lista = ["Karine","Sarah"," Ester","Rogério"];
//lista.push("Karen"); //coloca elemento
//lista.pop(); remove elemento
//lista.length(); tamanho do array 
//lista.reverse(); traz o elementos ao contrario
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join("**"))