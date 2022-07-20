var interval = 0;

var maxSlider = document.querySelectorAll('.box-image').length - 1;


 sumir()

 function sumir(){
     let img = document.querySelectorAll('.box-image img')
     let span = document.querySelector('.bolinhas')
    
     

     img[1].style.display = 'none';
     img[2].style.display = 'none';   


     for(var i = 0; i < maxSlider+1; i++){

        if(i == 0){

            span.innerHTML += '<span class="marcador"></span>'
        }else{

            span.innerHTML += '<span></span>'
        }
     }     
     

     

 }

 acao();


function acao(){

    let img = document.querySelectorAll('.box-image img')
    let span = document.querySelectorAll('.bolinhas span')

    setInterval(function(){

        img[interval].style.display = 'none';
        span[interval].classList.remove('marcador')
        interval++; 
        if(interval > maxSlider){

            interval = 0;
        }
        img[interval].style.display = 'block';
        span[interval].classList.add('marcador')

}, 2000)

}


