function toggleMode() {
    
    const html = document.documentElement
    html.classList.toggle("dark-mode")
    
    const img = document.querySelector("#profile img")

    if(html.classList.contains('dark-mode')) {
        img.setAttribute("src","./assets/avatar-dark.png") 
    } else {
        img.setAttribute("src","./assets/avatar.png")
    }

    if(html.classList.contains('dark-mode')) {
        img.setAttribute("alt",('Foto de Misael, gerada por IA, com oculos e traje de astronauta, fundo neutro azul escuro.')) 
    } else {
        img.setAttribute("alt",('Foto de Misael, gerada por IA, com oculos e traje de astronauta, fundo neutro azul claro.'))
    }
}