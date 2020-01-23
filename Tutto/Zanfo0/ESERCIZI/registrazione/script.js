function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function validateForm() {
    //trim elimina gli spazzi all'inizio e alla fine
    var firstname=$('#firstname').val().trim();
    var lastname=$('#lastname').val().trim();
    var username=$('#username').val().trim();                              //creo delle variabili a cui associare il valore(.val()) degli id dell'html 
    var password=$('#password').val().trim();
    var confirmpassword=$('#confirmpassword').val().trim();
    var email = $('#email').val().trim();

                                                                        //eseguo i controlli necessari su ogni dato inserito 

    if(firstname.length < 4){
        return false;
    }

    if(lastname.length < 4){
        return false;
    }

    if(username.length < 4 || username.length > 20){                      //dopo tutti i controlli se nessuno è errato la funzione sarà true e quindi l'utente sarà registrato
        return false;                                                     
    }

    if(password != confirmpassword){
        return false;
    }
    
    if(!validateEmail(email)){
        return false;
    }
    return true;
};
                                                                            //dopo la funzione esegue l'istruzione di bloccare la registrazione se anche solo uno dei campi sopra è errato
$('#form').submit(function (e) {

    if (! validateForm()) {    //il punto esclamatativo vale come not
        e.preventDefault();
        alert("paccone");
    }
});
