document.getElementById('btnEpi').addEventListener('click', ()=>{
    const cod = 1221
    if(document.getElementById('senha').value == cod){
        document.getElementById('cx_verso').classList.add('destaque')
        document.getElementById('login').classList.add('semdestaque')
    }else if(document.getElementById('senha').value == ''){
        alert('Preencha os dados solicitados')
    } else{
        alert('Senha incorreta')
    }
})