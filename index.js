import {Pokemon} from './asset/js/pokemon.js'

(async () => {
    
    let poke = await Pokemon.get( Pokemon.rand() )
    let $image = document.querySelector('.js-image')
    $image.src = poke.image
    let poke_2 = await Pokemon.get( Pokemon.rand() )
    let poke_3 = await Pokemon.get( Pokemon.rand() )
    let lista_nomes = [poke.name,poke_2.name, poke_3.name  ]
    let lista = lista_nomes.sort()
    let option_1 = document.querySelector('.js-pode-1')
    let option_2 = document.querySelector('.js-pode-2')
    let option_3 = document.querySelector('.js-pode-3')

    let $win = document.querySelector('.js-win')
    let $lose = document.querySelector('.js-lose')

    let $pontuacao = document.querySelector('.js-pontuacao') 
    let $record = document.querySelector('.js-record') 

    $record.innerHTML = localStorage.getItem('record')
    $pontuacao.innerHTML = localStorage.getItem('pontuacao')
    
    option_1.innerHTML = lista[0] 
    option_2.innerHTML = lista[1] 
    option_3.innerHTML = lista[2]
    
    const escolher = function() {
        let escolha = this.innerHTML
        if( escolha == poke.name ) {
            $image.classList.add( 'revela' )
            $win.play()
            localStorage.setItem( 'pontuacao', +localStorage.getItem('pontuacao') + 1  )
            if( localStorage.getItem('pontuacao') > localStorage.getItem('record') || 0 ) {
                localStorage.setItem( 'record', localStorage.getItem('pontuacao') )
            }
        }else {
            localStorage.setItem( 'pontuacao', 0  )
            $image.classList.remove( 'revela' )
            $lose.play()
            $image.src = "./asset/image/pokemon.svg"
        }
        setTimeout( () => {
            document.location.reload(true)
        }, 3000 )
    }

    option_1.addEventListener('click', escolher )
    option_2.addEventListener('click', escolher )
    option_3.addEventListener('click', escolher )

})()