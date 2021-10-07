//scrollscreen

var scrcon=document.querySelector('.scrolimg')
var scrimg=document.querySelectorAll('.scrolimg img')
var btn=document.querySelector('.nex')
var btn1=document.querySelector('.pre')

let counter=1
 var size=scrimg[0].clientWidth
 scrcon.style.transform='translateX(' + (-size * counter) + 'px)'
 
 btn.addEventListener('click',()=>{

     scrcon.style.transition="transform 0.4s ease-in-out"
     counter++
     scrcon.style.transform='translateX(' + (-size * counter) + 'px)'
 })

 btn1.addEventListener('click',()=>{
     scrcon.style.transition="transform 0.4s ease-in-out"
     counter--
     scrcon.style.transform='translateX(' + (-size * counter) + 'px)'
 })

 scrcon.addEventListener('transitionend',()=>{
     if(scrimg[counter].id === 'lastclone'){
         scrcon.style.transition="none"
         counter=scrimg.length -2
        scrcon.style.transform='translateX(' + (-size * counter) + 'px)'
     }

     if(scrimg[counter].id === 'firstclone'){
         scrcon.style.transition="none"
         counter=scrimg.length -counter
         scrcon.style.transform='translateX(' + (-size * counter) + 'px)'
         
     }
 })

 //modal
 var rate=document.querySelector('.ratebtn')
 var rate1=document.querySelector('.ratebtn1')
 var rate2=document.querySelector('.ratebtn2')
 var rate3=document.querySelector('.ratebtn3')
 var mod=document.querySelector('.model')
 var closebt=document.querySelector('.clbtn')
 
 
 rate.addEventListener('click',()=>{
mod.classList.add('modalactive')
})

 closebt.addEventListener('click',()=>{
     mod.classList.remove('modalactive')
 })

 rate1.addEventListener('click',()=>{
    mod.classList.add('modalactive')
     })
    
     closebt.addEventListener('click',()=>{
         mod.classList.remove('modalactive')
     })

rate2.addEventListener('click',()=>{
        mod.classList.add('modalactive')
         })
        
         closebt.addEventListener('click',()=>{
             mod.classList.remove('modalactive')
         })

rate3.addEventListener('click',()=>{
            mod.classList.add('modalactive')
             })
            
             closebt.addEventListener('click',()=>{
                 mod.classList.remove('modalactive')
             })

//animation
var flight={
    curviness:1.25,
    autoRotate:true,
    values:[
        {x:100, y:-20},
        {x:300, y:10},
        {x:500,y:100},
        {x:500,y:100},
            {x:750,y:-100},
            {x:350,y:-50},
            {x:600,y:100},
            {x:800,y:0},
    {x:window.innerWidth, y:-250}
    ]

}
var flying=new TimelineLite()
flying.add(
    TweenLite.to('.space-trav',1,{
        bezier:flight,
        ease:Power1.easeInOut
    })
)
var controller=new ScrollMagic.Controller()
var scene=new ScrollMagic.Scene({
    triggerElement:'.anim',
    duration:1500,
    TriggerHook:0
})
.setTween(flying)
.setPin('.anim')
.addTo(controller)

//3d animation
var ratecont=document.querySelector('.cont')
var contcard=document.querySelector('.contcard')
var got=document.querySelector('.fil1')
var gotbtn=document.querySelector('.ratebtn')


ratecont.addEventListener('mousemove',(e)=>{
    let xAxis=(window.innerWidth / 2 -e.pageX ) /10
    let yAxis=(window.innerHeight / 2 -e.pageY) /10
    got.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

ratecont.addEventListener('mouseenter',e=>{
got.style.transition='none'
gotbtn.style.transform='translateZ(100px)'



})

ratecont.addEventListener('mouseleave',e=>{
    got.style.transition='all 0.5s ease'
    got.style.transform=`rotateY(0deg) rotateX(0deg)`
    gotbtn.style.transform='translateZ(0px)'
    
    })

    var ratecont1=document.querySelector('.cont1')
    var got1=document.querySelector('.fil2')
    var gotbtn1=document.querySelector('.ratebtn1')
    
    
    ratecont1.addEventListener('mousemove',(e)=>{
        let xAxis=(window.innerWidth / 2 -e.pageX ) /10
        let yAxis=(window.innerHeight / 2 -e.pageY) /10
        got1.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    })
    
    ratecont1.addEventListener('mouseenter',e=>{
    got1.style.transition='none'
    gotbtn1.style.transform='translateZ(100px)'
    
    
    
    })
    
    ratecont1.addEventListener('mouseleave',e=>{
        got1.style.transition='all 0.5s ease'
        got1.style.transform=`rotateY(0deg) rotateX(0deg)`
        gotbtn1.style.transform='translateZ(0px)'
        
        })

        var ratecont2=document.querySelector('.cont2')
var got2=document.querySelector('.fil3')
var gotbtn2=document.querySelector('.ratebtn2')


ratecont2.addEventListener('mousemove',(e)=>{
    let xAxis=(window.innerWidth / 2 -e.pageX ) /10
    let yAxis=(window.innerHeight / 2 -e.pageY) /10
    got2.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

ratecont2.addEventListener('mouseenter',e=>{
got2.style.transition='none'
gotbtn2.style.transform='translateZ(100px)'



})

ratecont2.addEventListener('mouseleave',e=>{
    got2.style.transition='all 0.5s ease'
    got2.style.transform=`rotateY(0deg) rotateX(0deg)`
    gotbtn2.style.transform='translateZ(0px)'
    
    })

    var ratecont3=document.querySelector('.cont3')
var got3=document.querySelector('.fil4')
var gotbtn3=document.querySelector('.ratebtn3')


ratecont3.addEventListener('mousemove',(e)=>{
    let xAxis=(window.innerWidth / 2 -e.pageX ) /10
    let yAxis=(window.innerHeight / 2 -e.pageY) /10
    got3.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

ratecont3.addEventListener('mouseenter',e=>{
got3.style.transition='none'
gotbtn3.style.transform='translateZ(100px)'



})

ratecont3.addEventListener('mouseleave',e=>{
    got3.style.transition='all 0.5s ease'
    got3.style.transform=`rotateY(0deg) rotateX(0deg)`
    gotbtn3.style.transform='translateZ(0px)'
    
    })


    //anime
    var anbtn1=document.querySelector('.bt1')
    anbtn1.addEventListener('click',(e)=>{
        var que=e.currentTarget.parentElement.parentElement
        que.classList.toggle('showinfo')
    })
    var anbtn2=document.querySelector('.bt2')
    anbtn2.addEventListener('click',(e)=>{
        var que1=e.currentTarget.parentElement.parentElement
        que1.classList.toggle('showinfo2')
    })

    var anbtn3=document.querySelector('.bt3')
    anbtn3.addEventListener('click',(e)=>{
        var que2=e.currentTarget.parentElement.parentElement
        que2.classList.toggle('showinfo3')
    })

    var anbtn4=document.querySelector('.bt4')
    anbtn4.addEventListener('click',(e)=>{
        var que3=e.currentTarget.parentElement.parentElement
        que3.classList.toggle('showinfo4')
    })