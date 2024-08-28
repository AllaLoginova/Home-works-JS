function party(num) { 
    let current = 1;

    setTimeout(function go() {
        let div = document.createElement('div');
        div.className = 'circle';
        div.style.backgroundColor = 'rgb(' + 
        Math.floor(Math.random() * 256) + ', ' +
        Math.floor(Math.random() * 256) + ', ' +
        Math.floor(Math.random() * 256) + ')';
        div.style.top = Math.floor(Math.random() * 550) + 'px';
        div.style.left = Math.floor(Math.random() * 550) + 'px';

        document.body.append(div);

        if (current < num) {
            setTimeout(go, 300);
        }
        current++;
    }, 300);
}

party(5);
