

function sliderMenu ()
{
    
    const menuBtn = document.querySelector('.menuBtn');
    const nav= document.querySelector('.menu');

    function slider()
    {
        nav.classList.toggle('menuActive');
    }
    menuBtn.addEventListener('click',slider);
    if(slider)
    {
        document.querySelector('stopScrolling')
    }
    
}

sliderMenu();