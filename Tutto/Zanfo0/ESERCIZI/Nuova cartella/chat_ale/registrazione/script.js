function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function validateForm() {
    //return false;
    var firstname=($('#firstname').val().trim);
    var lastname=$('lastname').val();
    
    if(firstname.length < 4){
        return false;
    }

    if(lastname.length < 4){
        return false;
    }

    if(username.length < 4 || username.length > 20){
        return false;
    }

    if(password =! confirimpassword){
        return false;
    }
}


$('#form').submit(function (e) {
    e.preventDefault();
    console.log("ok");

    if (!validateForm()) {    //il punto esclamatativo vale come not, se validateForm fosse true restituirebbe false, e viceversa
        e.preventDefault();
    }
});

