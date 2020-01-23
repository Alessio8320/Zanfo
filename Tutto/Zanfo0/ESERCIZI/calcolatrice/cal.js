var numero1= 0;
var numero2= 0;
var oper= "";



$('.number').click(function (){  //creo una funzione che al click degli elementi "$()" con la classe number"('.number)"
    var num=$(this).val();  //associa alla nuova variabile "num" il value dell'elemento "$()" specificato, ovvero .number"(this)"
    var numero=$('#display').val(); //associo ad un'altra variabile il valore del display(che è string)
   
    numero= parseInt(numero+num);//concateno le string con il valore del display così da permettere più inseriemnti e li rendo int
   
    $('#display').val(numero)//qui restitusco nell'elelemnto "$()" display, il value "old()" appena cliccato della classe number appena associato alla variabile num
    console.log('ok')
}); 




$('.operatore').click(function (){
oper=$(this).val(); // associo ad oper il valore dell'operatore cliccato
var old=$('#display').val(); //assegno alla variabile old il valore dell'elemento display

numero1=parseInt(old);//trasformo la stringa "old" (ovvero il valore del display) in intero nella variabile numero1

$('#display').val('');//resetto il contenuto del display
})





$('.uguale').click(function (){
    var old=$('#display').val(); //assegno alla variabile old il valore dell'elemento display

    numero2=parseInt(old);//trasformo la stringa "old" (ovvero il valore del display) in intero nella variabile numero2

    var risultato=calcolatrice(); //creo la variabile risultato che è uguale al prodotto della funzione "calcolatrice"

    $('#display').val(risultato); //associo al valore di display il valore di risultato
});





function calcolatrice(){
    
    console.log(numero1);
    console.log(numero2);
    console.log(oper);
    

    switch(oper){
           
        case "+":
        return numero1+numero2;
        break;

        case "-":
        return numero1-numero2;
        break;

        case "*":
        return numero1*numero2;
        break;

        case "/":
        return numero1/numero2;
        break;
    }
}    