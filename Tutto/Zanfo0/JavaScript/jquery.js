$('#mio-id').addClass("classe1");
$('#mio-id').removeClass("classe1");
//$('#mio-id').hide();
$('#mio-btn').click(function(){
    if($('#mio-id').hasClass('hidden')){  
       
        $('#mio-id').fadeIn(2000);
       //$('#mio-id').addClass("hidden");   
    }else{
        $('#mio-id').fadeOut(2000);
        //$('#mio-id').addClass("hidden");    
    }
    $('#mio-id').toggleClass('hidden'); //il toggle aggiunge la classe se non c'è e la rimuove se c'è.
});

$('#mio-btn2').click(function(){        //cosi facendo dopo aver premuto il pulsante il link di riferimento non sarà più google ma amazon
//$('a').attr('href', 'https://www.amazon.it/')
//$('<a>Test</a>').attr('href', "https://www.google.it/")
//.appendTo($('body')); //appendTo serve a mettere infondo al body il comando 
// window.location='https://www.amazon.it/';//cosi facendo collego direttamente il bottone al link
setTimeout(function(){
  //  window.location='https://www.amazon.it/';
//},3000);



var link=$('<a>Test</a>').attr('href', "https://www.google.it/")  //così facendo apro un altra pagina col link di riferimento senza sovrascrivere la pagina corrente
.attr('target','_blank')
.hide()
.appendTo($('body'));

link[0].click();

},3000);

$('#mio-a').click(function(e){
    e.preventDefault();

    alert ("sta qua").hide()
})




});
