function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(formAno.value.length == 0 || formAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!' )
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img =document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
               genero = 'Mulher'
               if (idade>=0 && idade <= 12) {
                // Menina
                img.setAttribute('src', 'images/mulherCrianca.png')
               } else if (idade < 21) {
                //Mulher jovem
                img.setAttribute('src', 'images/mulherJovem.png')
               } else if (idade < 50) {
                //Mulher adulta
                img.setAttribute('src', 'images/mulherAdulta.png')
               } else {
                //Mulher idosa
                img.setAttribute('src', 'images/mulherIdosa.png')
               }
        } else  if (fsex[1].checked) {
            genero = 'Homem'
            if (idade>=0 && idade <= 12) {
                // Menino
                img.setAttribute('src', 'images/homemCrianca.png')
               } else if (idade < 21) {
                //Homem jovem
                img.setAttribute('src', 'images/homemJovem.png')
               } else if (idade < 50) {
                //Homem adulto
                img.setAttribute('src', 'images/homemAdulto.png')
               } else {
                //Homem idoso
                img.setAttribute('src', 'images/homemIdoso.png')
               }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        res.appendChild(img)
        }
         
}
    
