// setTimeout() runs a function once after a specified delay 
const changeMe = function(){
    document.querySelector('h1').innerHTML = "Take You Forward";
}
setTimeout(changeMe, 2000);

// clearTimeout() cancels a scheduled timeout before its callback runs
document.querySelector('#stop').addEventListener('click', function(){
    clearTimeout(changeMe);
})
