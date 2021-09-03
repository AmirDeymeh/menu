var am=document.querySelectorAll('.pla');
am.forEach(ad => {
    ad.addEventListener('click',()=>{
        amber();    
        ad.classList.add('activ');
    })
});
function amber(){
    am.forEach(ad => {
        ad.classList.remove('activ');
    })
}