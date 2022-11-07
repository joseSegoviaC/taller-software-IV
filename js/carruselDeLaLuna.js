const d = document;

function carruselLuna(){
    const $btnNext = d.querySelector('.next'), $btnPrev = d.querySelector('.prev');
    const $slides = d.querySelectorAll('.slider-slide'); 
    for(let a = 0; a<$slides.length; a++){
        let ball = `<a class="ball button ${ a==0? 'active': ''}" id="${a}" href="#"></a>`
        $btnNext.insertAdjacentHTML('beforebegin', ball);
    }
    const $balls = d.querySelectorAll('.ball');
    let pos =0;
    d.addEventListener('click', e=>{
        
        if(e.target == $btnNext){
            e.preventDefault();
            $slides[pos].classList.remove('active');
            $balls[pos].classList.remove('active');
            pos== 3? pos = 0: pos+=1;
            $slides[pos].classList.add('active');
            $balls[pos].classList.add('active');
        }
    });
    d.addEventListener('click', e=>{
        
        if(e.target == $btnPrev){
            e.preventDefault();
            $slides[pos].classList.remove('active');
            $balls[pos].classList.remove('active');
            pos== 0? pos = 3: pos-=1;
            $slides[pos].classList.add('active');
            $balls[pos].classList.add('active');
            console.log(pos);
        }
    });
    d.addEventListener('click', e=>{
        
        if(e.target.matches('.ball')){
            e.preventDefault();
            $slides[pos].classList.remove('active');
            $balls[pos].classList.remove('active');
            pos = parseInt(e.target.id);
            $slides[pos].classList.add('active');
            $balls[pos].classList.add('active');
        }
        
    });

}

d.addEventListener('DOMContentLoaded', carruselLuna());
