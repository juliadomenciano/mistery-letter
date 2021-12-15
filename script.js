const input = document.getElementById('carta-texto')
const button = document.getElementById('criar-carta')
const p = document.getElementById('carta-gerada')
let count = document.getElementById('carta-contador')


button.addEventListener('click', addText)
p.addEventListener('click', spanClick)

function addText(){
    let trim = input.value.trim()

    if(input.value === '' || trim === ''){
        p.innerHTML = 'Por favor, digite o conteúdo da carta.'
    }

    else{

        p.innerHTML = ''
        let str = input.value
        let arr = str.split(' ')
        count.innerHTML = arr.length
        let newArr = []
        for(let i in arr){
            let span = document.createElement('span')
            span.innerHTML = arr[i]
            p.appendChild(span) 
        }
        addClass()

    }
}

function addClass(){
    for(let i = 0; i < p.children.length; i++){

        let group1 = Math.floor((Math.random()*3)+ 1)
        let group2 = Math.floor((Math.random()*3)+ 1)
        let group3 = Math.floor((Math.random()*2)+ 1)
        let group4 = Math.floor((Math.random()*2)+ 1)

        switch(group1){
            case 1:
                p.children[i].classList.add('newspaper')
                break;
            case 2:
                p.children[i].classList.add('magazine1')
                break;
            case 3:
                p.children[i].classList.add('magazine2')
                break;  
        }
        switch(group2){
            case 1:
                p.children[i].classList.add('medium')
                break;
            case 2:
                p.children[i].classList.add('big')
                break;
            case 3:
                p.children[i].classList.add('reallybig')
                break;  
        }
        switch(group3){
            case 1:
                p.children[i].classList.add('rotateleft')
                break;
            case 2:
                p.children[i].classList.add('rotateright')
                break;  
        }
        switch(group4){
            case 1:
                p.children[i].classList.add('skewleft')
                break;
            case 2:
                p.children[i].classList.add('skewright')
                break;    
        }
    }
}
function spanClick(event){
    console.log(event.target)
    event.target.removeAttribute('class')

    let group1 = Math.floor((Math.random()*3)+ 1)
    let group2 = Math.floor((Math.random()*3)+ 1)
    let group3 = Math.floor((Math.random()*2)+ 1)
    let group4 = Math.floor((Math.random()*2)+ 1)

    switch(group1){
        case 1:
            event.target.classList.add('newspaper')
            break;
        case 2:
            event.target.classList.add('magazine1')
            break;
        case 3:
            event.target.classList.add('magazine2')
            break;  
    }
    switch(group2){
        case 1:
            event.target.classList.add('medium')
            break;
        case 2:
            event.target.classList.add('big')
            break;
        case 3:
            event.target.classList.add('reallybig')
            break;  
    }
    switch(group3){
        case 1:
            event.target.classList.add('rotateleft')
            break;
        case 2:
            event.target.classList.add('rotateright')
            break;  
    }
    switch(group4){
        case 1:
            event.target.classList.add('skewleft')
            break;
        case 2:
            event.target.classList.add('skewright')
            break;    
    }
}