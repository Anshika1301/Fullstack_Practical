//selector
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');

const next1 = document.getElementById('next1');
const next2 = document.getElementById('next2');
const back1 = document.getElementById('back1');
const back2 = document.getElementById('back2');

const progressbar = document.getElementById('progress');



//event handler

next1.addEventListener('click',function(){
    form1.style.left = "-450px";
    form2.style.left = "30px";
    progressbar.style.width = "260px";
});

next2.addEventListener('click',function(){
    form2.style.left = "-450px";
    form3.style.left = "30px";
    progressbar.style.width = "390px";
});

back1.addEventListener('click',function(){
    form1.style.left = "30px";
    form2.style.left = "450px";
    progressbar.style.width = "130px";
});

back2.addEventListener('click',function(){
    form2.style.left = "30px";
    form3.style.left = "450px";
    progressbar.style.width = "260px";
});