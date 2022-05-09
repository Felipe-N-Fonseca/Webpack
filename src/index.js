import './style.scss'
import img from './matrix.png'

function titleComponents(){
    const elemH1 = document.createElement('h1')
    elemH1.innerHTML = 'hello world'
    return elemH1
}

function imageComponent(){
    const elemImg = new Image(1200,800)
    elemImg.src = img
    return elemImg
}

function root(){
    const elemRoot = document.getElementById('root')
    elemRoot.classList.add('container')
}

root()
document.body.appendChild(titleComponents())
document.body.appendChild(imageComponents())
