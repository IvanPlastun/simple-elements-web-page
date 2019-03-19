let popupsToggle = document.querySelectorAll('.open-popup'),
    popupClose = document.querySelectorAll('.close');

    popupsToggle.forEach(function(item) {
        item.addEventListener('click', function() { 
            let popupName = item.getAttribute('data-popup');
            document.getElementById(popupName).style.display = 'block';
        })
    });
    popupClose.forEach(function(item) {
        item.addEventListener('click', function() { 
            let popup = item.closest('.popup');
            popup.style.display = 'none';
        })
    });

    window.addEventListener('click', function(event) {
        if(event.target.classList.contains('popup'))
            event.target.style.display = 'none';
    });   

