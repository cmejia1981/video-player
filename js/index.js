/* Declaramos variable para capturar etiqueta HTML */
const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

/* Ejecutamos evento */
$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)


/* Creamos funcion */
function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    /* Este es un ejemplo para ver la accio al presionar pause */
    console.log('Le diste clic al boton Play')
}

function handlePause() {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    /* Este es un ejemplo para ver la accio al presionar play */
    console.log('Le diste clic al boton Pausa')
}


function handleBackward() {
    // $video.currentTime = $video.currentTime - 10 
    $video.currentTime -= 10
    /* Este es un ejemplo para ver la accio al presionar Backwars */
    console.log('Para atras 10 segundos')
}

function handleForward() {
    $video.currentTime = $video.currentTime + 10
    /* Este es un ejemplo para ver la accio al presionar play */
    console.log('Para adelante 10 segundos')
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded() {
    $progress.max = $video.duration
    console.log('ha cargado mi video', $video.duration)
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime
    // console.log('tiempo actual', $video.currentTime)
}

$progress.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime = $progress.value
    console.log($progress.value)
}