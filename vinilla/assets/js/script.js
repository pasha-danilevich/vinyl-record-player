
const alert = document.querySelector('.alert')

function log(foo) {
    console.log(foo)
}



const windowInnerWidth = window.innerWidth
const windowInnerHeight = window.innerHeight

let audio = document.querySelector('.audio')
let album_img = document.querySelectorAll('.album-img')
let audio_block = document.querySelectorAll('.audio-block')
let player = document.querySelectorAll('.player')
let content = document.querySelectorAll('.content')
let track_name = document.querySelectorAll('.track-name')
let vanilla_plate = document.querySelectorAll('.vanilla-plate')
let text = document.querySelectorAll('.text')
let song_text = document.querySelectorAll('.song-text')
let lirika = document.querySelectorAll('.lirika')
let link = document.querySelectorAll('.link')


let top_pos = 0
let setTime = true
let track_number = 0 


// hover -------------

audio.addEventListener("mouseover", (event) => {

    let class_name = event.target.classList[0]
    
    if (class_name == 'player'){


    }

    
}, false);

audio.addEventListener("mouseout", (event) => {

    let class_name = event.target.classList[0]
    if (class_name == 'player'){

    }

    
}, false);
  

audio_block.forEach(el => el.style.height = windowInnerHeight + "px")

album_img.forEach(el => el.style.top = windowInnerHeight/2 - 250  + "px")
album_img.forEach(el => el.style.left = windowInnerWidth/2 - 250  + "px")
// album_img.forEach(el => el.style.display = "none")
content.forEach(el => el.style.top = windowInnerHeight/2 - 200  + "px")
content.forEach(el => el.style.left = windowInnerWidth/2 - 200  + "px")

player.forEach(el => el.style.top = windowInnerHeight/2 + 165  + "px")
player.forEach(el => el.style.left = windowInnerWidth/2 - 150  + "px")

track_name.forEach(el => el.style.top = windowInnerHeight/2 - 230  + "px")
track_name.forEach(el => el.style.left = windowInnerWidth/2 - 230  + "px")

lirika.forEach(el => el.style.opacity = "1")

vanilla_plate.forEach(el => el.style.top = windowInnerHeight/2 - 220  + "px")
vanilla_plate.forEach(el => el.style.left = windowInnerWidth/2 - 210  + "px")








// scroll ------------------------------------------------------


window.addEventListener('wheel', function(event) {
    setTimeout(() => { setTime = true;}, 600)
    
    
    if (setTime){
        if(track_number != 0){
            scrollUp(event) 

        }
        if(track_number != audio.childElementCount - 1){
            scrollDown(event)  
            
        }
        setTime = false  


           
        

                                                          
    }

})




// player event ---------------------------------------------------------

player.forEach(el => el.addEventListener('play', (event) => {

    expandAlbum(track_number)
    
    setSongText(0, 15, 7)
    setSongText(1, 14, 12)
    setSongText(2, 12, 14)
    setSongText(3, 36, 12)
    setSongText(4, 122, 11)
    setSongText(5, 17, 20)
    
}))

player.forEach(el => el.addEventListener('ended', (event) => {

    collapseAlbum(track_number)
}))





let expand = false


// function ------------------------------------------------------------



function linckOpen(track_number) {
    audio.children[track_number].children[1].children[1].pause() 
}

function setSongText(track_number, time, delay) {
    setInterval(() => {
        if(player[track_number].currentTime > time & player[track_number].currentTime < time + 1){
            viewText(track_number, delay)
        }
    }, 1000)
}

function midVanillaPosition(track_number, time) {
    setTimeout(() => { 
        // vanilla_plate
        let father = audio.children[track_number]
        father.children[2].style.animationDuration = "4s"
        father.children[2].style.transitionDuration = "1500ms"
        father.children[2].style.left = windowInnerWidth/2 - 235  + "px"
    }, time * 1000)
}
function leftVanillaPosition(track_number,time) {
    setTimeout(() => { 
        // vanilla_plate

        let father = audio.children[track_number]

        father.children[2].style.transitionDuration = "600ms"
        father.children[2].style.left = windowInnerWidth/2 - 450  + "px"
    }, time * 1000)
}

function expandAlbum(track_number) {

    let father = audio.children[track_number]

    expand = true

    leftVanillaPosition(track_number, 0)
    midVanillaPosition(track_number, 1)

    // album_img
    father.children[0].style.left = windowInnerWidth/2  -500 + "px"
    
    // album-meta / track-name
    father.children[1].children[0].style.opacity = "1"
    father.children[1].children[0].style.left = windowInnerWidth/2 - 470  + "px"

    // album-meta / player
    father.children[1].children[1].style.left = windowInnerWidth/2 - 400  + "px"
    father.children[1].children[1].addEventListener('pause', (event) => {

        if (expand){
            leftVanillaPosition(track_number, 0)
        }
        
    })

    // content 
    father.children[3].style.top = windowInnerHeight/2 - 250  + "px"
    father.children[3].style.left = windowInnerWidth/2  + "px"
    // content / text
    father.children[3].children[0].style.opacity = "1"
 
    
}

function collapseAlbum(track_number) {

    let father = audio.children[track_number]
    expand = false

    // album_img
    father.children[0].style.left = windowInnerWidth/2  - 250 + "px"

    // album-meta / track-name
    father.children[1].children[0].style.opacity = "0"
    father.children[1].children[0].style.left = windowInnerWidth/2 - 230  + "px"
    father.children[1].children[0].style.top = windowInnerHeight/2 - 230  + "px"




    // album-meta / player
    father.children[1].children[1].style.left = windowInnerWidth/2 - 150  + "px"

    father.children[1].children[1].pause()
    midVanillaPosition(track_number, 0)
    // content
    father.children[3].style.top = windowInnerHeight/2 - 200  + "px"
    father.children[3].style.left = windowInnerWidth/2 - 200  + "px"

    // content / text
    father.children[3].children[0].style.opacity = "0"
    

    
}


function viewText(track_number, delay){

    audio.children[track_number].children[3].children[0].style.opacity = '0'
    setTimeout(() => {
        audio.children[track_number].children[3].children[1].style.opacity = '1'
        },600)
    

    setTimeout(() => {
        audio.children[track_number].children[3].children[1].style.opacity = '0'
        },delay * 1000)
    setTimeout(() => {
        audio.children[track_number].children[3].children[0].style.opacity = '1'
        }, delay * 1000 + 600)
}

function scrollUp(event) {
    if (event.deltaY < 0) {
        collapseAlbum(track_number)   
        top_pos = top_pos + windowInnerHeight
        audio.style.top = top_pos + "px"
        track_number -= 1
          
    }
}
function scrollDown(event) {
    if (event.deltaY > 0){
        collapseAlbum(track_number)
        top_pos = top_pos - windowInnerHeight
        audio.style.top = top_pos + "px"
        track_number += 1
        
    } 
}
