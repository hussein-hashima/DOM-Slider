
var imageItem=Array.from(document.querySelectorAll(".imageItem img"));
var lightBox= document.querySelector(".lightBox-container");
var box = document.querySelector('.box');
var closeBtn=document.getElementById('close');
var nextBtn=document.getElementById('next');
var prevBtn=document.getElementById('prev');
var currentIndex;
for(var i =0; i<imageItem.length;i++){
    imageItem[i].addEventListener("click",function(e){
        var imgSrc=e.target.getAttribute('src');
        box.style.backgroundImage=`url(${imgSrc})`;
        lightBox.style.display='flex';
        currentIndex=imageItem.indexOf(e.target);
    });
}
closeBtn.addEventListener('click',function(){closeSlide();});
nextBtn.addEventListener('click',function(){slide(1);});
prevBtn.addEventListener('click',function(){slide(-1);});
function slide(i){
    currentIndex= currentIndex + i;
    if(currentIndex==-1){
        currentIndex=imageItem.length-1;
    }
    if(currentIndex==imageItem.length){
        currentIndex=0;
    }
    var imgSrc=imageItem[currentIndex].getAttribute('src');
    console.log(imgSrc);
    box.style.backgroundImage=`url(${imgSrc})`;
}
function closeSlide(){
    lightBox.style.display='none';
}
document.addEventListener('keydown',function(e){
    if(e.key=='ArrowRight'){
        slide(1);
    }
    else if(e.key=='ArrowLeft'){
        slide(-1);
    }
    else if(e.key=='Escape'){
        closeSlide();
    }

});
// function nextSlide(){
//     currentIndex++;
//     if(currentIndex==imageItem.length){
//         currentIndex=0;
//     }
//     console.log(currentIndex);
    
//     var imgSrc=imageItem[currentIndex].querySelector('img').getAttribute('src');
//     console.log(imgSrc);
//     box.style.backgroundImage=`url(${imgSrc})`;
// }

// function prevSlide(){
//     currentIndex--;
//     if(currentIndex==-1){
//         currentIndex=imageItem.length-1;
//     }
//     console.log(currentIndex);
    
//     var imgSrc=imageItem[currentIndex].querySelector('img').getAttribute('src');
//     console.log(imgSrc);
//     box.style.backgroundImage=`url(${imgSrc})`;
// }