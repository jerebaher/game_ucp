let musicBtn = document.getElementById('music-btn')
let textMusicBtn = document.getElementById('music-btn')[0]
let music = document.getElementById('music')

const isPaused = () => {
    return music.paused
}

musicBtn.addEventListener('click', (e) => {
    if(isPaused()){
        musicBtn.childNodes[0].remove()
        music.play()
        musicBtn.appendChild(document.createTextNode('Desactivar sonido'))
    }else{
        musicBtn.childNodes[0].remove()
        music.pause()
        musicBtn.appendChild(document.createTextNode('Activar sonido'))
    }
})