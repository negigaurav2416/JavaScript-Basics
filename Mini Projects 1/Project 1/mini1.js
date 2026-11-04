let buttons = document.querySelectorAll('.button');
let body = document.querySelector('body');
buttons.forEach(function(x){
    x.addEventListener('click', function(e){
        if (e.target.id === 'green'){
            body.style.backgroundColor = "green";
        }
        if (e.target.id === 'grey'){
            body.style.backgroundColor = "grey";
        }
        if (e.target.id === 'yellow'){
            body.style.backgroundColor = "yellow";
        }
        if (e.target.id === 'purple'){
            body.style.backgroundColor = "purple";
        }
    });
});