console.log('hey');

const allBtns = document.querySelectorAll('.cardBtn')

let choices = ['pierre','feuille','ciseaux']

let winTable = [
    ['ciseaux','pierre','feuille'], // pierre
    ['pierre','feuille','ciseaux'], // feuille
    ['feuille','ciseaux','pierre'], // ciseaux
]



for (let i = 0; i < allBtns.length; i++) {
    let unBtn = allBtns[i]
    unBtn.addEventListener('click',function(){
        console.log(i)
        let ordiNumber = getRandomInt(allBtns.length)
        console.log('ordi tire : >',choices[ordiNumber])
        console.log(checkWin(choices[i],i,choices[ordiNumber]))
    })
}



function checkWin(playerChoice,indexWinTable,choixOrdi){
    console.log('winTable ',indexWinTable )
    if(playerChoice ==  choixOrdi){
        return 'even'
    }
    if(winTable[indexWinTable].indexOf(playerChoice) > winTable[indexWinTable].indexOf(choixOrdi) ){
        document.querySelector('.wining').style.display='block'
        return 'win'
    }else{
        return 'loose'
    }

}

// cette fonction "lance un dé"

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}