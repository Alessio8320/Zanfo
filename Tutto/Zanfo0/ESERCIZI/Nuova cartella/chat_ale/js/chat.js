function hideLoadingSpinner() {
    var loadingSpinner = $('.loadingSpinner');
    var body = $('body');

    loadingSpinner.fadeOut();
    body.removeClass('no-scroll');
}


function createContact(contact) { //con questa funzione riesco a creare contatti automaticamente
    var container = $('<div></div>'); //crea una nuova variabile container; dove crea un nuovo div vuoto a cui viene data la classe user
    container.addClass('user');

    //add id of the user
    container.data('id', contact.id) //data permette di costruire un attributo custom (creato manualmente)

    var UserPicContainer = $('<div></div>');
    UserPicContainer.addClass('user-pic-container');

    UserPicContainer.append( //con append inserisco un elemento dopo tutto il contenuto
        $('<img>').addClass('img img--rounded user-pic') //recupero l'elemento 'img' da 'json'e gli aggiungo una classe e un attributo
        .attr('src', contact.img)
    )

    var texts = $('<div></div>');
    texts.addClass('texts d-none d-md-block');

    container.append(UserPicContainer);
    container.append(texts);

    UserPicContainer.prepend(createContactStatus(contact.status));

    //username
    texts.append(
        $('<p></p>').addClass('username')
        .html(contact.name)
    )
    //Last message
    texts.append(
        $('<p></p>').addClass('last-message')
        .html(contact.lastMessage)
    )

    container.append(UserPicContainer);
    container.append(texts);

    $('.users').append(container);
}

function createContactStatus(status) {
    var statusContainer = $('<div></div>');
    statusContainer.addClass('status status--small status--rounded'); //prendo il nome della classe nell'index

    switch (status) {
        case 'available':
            statusContainer.addClass('status--available');
            break;
        case 'not-available':
            statusContainer.addClass('status--not-available');
            break;
        case 'offline':
            statusContainer.addClass('status--offline');
            break;
        case 'busy':
            statusContainer.addClass('status--busy');
            break;

        default:
            statusContainer.addClass('status--not-available')
    }

    return statusContainer;
}

/*$.get('json/messages.json', function (messages) {
    //console.log(messages);
    $.each(messages, function (index, message) {
        createMessage(message);

    });
});*/

function createMessage(message) {
    var messageContainer = $( //la riga sotto div...ecc...comprende un if per constatare se il messagio è stato inviato o ricevuto
        `<div class="message ${message.recived ? 'message--received' : '' }">                               
                <img class="img img--rounded message-pic" src="${message.img}">
                <p class="text">${message.message}</p>
            </div>`
    );

    $('.messages').append(messageContainer);

}

function resetMessages() {
    $('.messages').empty();
}

$(document).on('click', '.user', function () {

    var id = $(this).data('id')
    console.log(id);

    loadMessages(id);
});

function loadMessages(id, callback) {

    resetMessages(id);

    $.get('json/messages' + id + '.json', function (messages) {
        //console.log(contacts);
        $.each(messages, function (index, message) {
            createMessage(message);
        });
        if (typeof callback == 'function') {
            callback();
        }

    });
}

function loadContacts(callback) {
    $.get('json/contacts.json', function (contacts) {
        $.each(contacts, function (index, contact) {
            createContact(contact);
        });
        //execute call back function
        callback(contacts);
    });
}

$(document).ready(function () {
    loadContacts(function () {
        console.log('Sono stata chiamata!');
    });

})

$(document).ready(function () {
    loadContacts(function (contacts) {
        loadMessages(contacts[0].id, function () {
            setTimeout(function () {
                hideLoadingSpinner();
            }, 500);

        });
    });
});

//al click del pulsante "btn-send" esegui una funzione che mi dà un alert
$('.btn-send').click(function () {
    //alert('cliccato');

    var content = $('.send-input').val();

    if (content != "") {

        var message = {
            message: content,
            img: "img/profile.png",
            recived: false
        };

        createMessage(message);

    }

    $('.send-input').val("");
    $('.messages').scrollTop($('.messages').prop("scrollHeight"));


});

$('.send-input').on('keypress', function (e) {
    if (e.which == 13) {

        var content = $('.send-input').val();

        if (content != "") {

            var message = {
                message: content, 
                img: "img/profile.png",
                recived: false
            };
            createMessage(message);
        }

        $('.send-input').val("");
        $('.messages').scrollTop($('.messages').prop("scrollHeight"));
    }
});