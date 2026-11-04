let form = document.querySelector('form');
// let height = parseInt(document.querySelector('height').value) -> this will give an empty array

form.addEventListener('submit', function(e){

    e.preventDefault(); // is used to stop the browser's default action for an event
    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)
    let results = document.querySelector('#results')
    if (height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height*height) / 10000)).toFixed(2);
        if (bmi <= 18.6){
            results.innerHTML = `<span>${bmi} You are Under Weight </span>`;
        }
        else if (bmi > 18.6 && bmi <= 24.9){
            results.innerHTML = `<span>${bmi} You are in Normal Range </span>`;
        }
        else{
            results.innerHTML = `<span>${bmi} You are Overweight </span>`;
        }
    }
})