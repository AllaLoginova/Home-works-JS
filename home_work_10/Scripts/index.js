document.body.addEventListener('click', event => {
    let check = document.getElementById('button').innerHTML; // в каком состоянии кнопка
    let elem = event.target; // на что нажали
    
    let el = event.target.id; // название

    if (check == 'OFF' && el == 'button') {
        document.getElementById('button').innerText = 'ON';
        
    };

    if (check == 'ON' && el == 'button') {
        document.getElementById('button').innerText = 'OFF';
        red.style.backgroundColor = '#666';
        yellow.style.backgroundColor = '#666';
        green.style.backgroundColor = '#666';
    };

    if (check == 'ON' && el != 'button') {
        red.style.backgroundColor = '#666';
        yellow.style.backgroundColor = '#666';
        green.style.backgroundColor = '#666';

        elem.style.backgroundColor = el;
        
    };
    
    
});


