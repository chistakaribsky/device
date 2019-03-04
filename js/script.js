var link = document.querySelector('.write-us-btn');
var popup = document.querySelector('.modal-write-us');
var close = document.querySelector('.modal-close');
var form = popup.querySelector('form');
var isStorageSupport = true;
var storage = '';

var name = popup.querySelector('[name=name]');
var email = popup.querySelector('[name=email]');
var comment = popup.querySelector('[name=comment]');

try
    {
        storage = localStorage.getItem('name');
    }
catch (err)
    {
        isStorageSupport = false;
    }

link.addEventListener('click', function(evt){
    evt.preventDefault();
    popup.classList.add('modal-show');

    if (storage)
        {
            name.value = storage;
            email.value = storage;
            comment.value = storage;
        }
    else
        {
            name.focus();
        }
});

close.addEventListener('click', function(evt){
    evt.preventDefault();
    popup.classList.remove('modal-show');
    popup.classList.remove('modal-error');
});

window.addEventListener('keydown', function(evt)
{
    if(evt.keyCode===27)
        {
            evt.preventDefault();
            if(popup.classList.contains('modal-show'))
                {
                    popup.classList.remove('modal-show');
                    popup.classList.remove('modal-error');
                }
        }
});

var mapLink = document.querySelector('.location-map');
// var mapLinkFooter = document.querySelector('.contacts-link-map');

var mapPopUp = document.querySelector('.modal-map');

var mapClose = mapPopUp.querySelector('.modal-close');

mapLink.addEventListener('click', function(evt){
    evt.preventDefault();
        mapPopUp.classList.add('modal-show');
    });

// mapLinkFooter.addEventListener('click', function(evt){
//     evt.preventDefault();
//         mapPopUp.classList.add('modal-show');
//     });

mapClose.addEventListener('click', function(evt){
    evt.preventDefault();
    mapPopUp.classList.remove('modal-show');

});

window.addEventListener('keydown', function(evt)
{
    if(evt.keyCode===27)
        {
            evt.preventDefault();
            if(mapPopUp.classList.contains('modal-show'))
                {
                    mapPopUp.classList.remove('modal-show');
                }
        }
});