(function(){const container = document.getElementsByClassName("container")[0]
for(let i = 0; i < 12; ++i){
    const item = document.createElement("div")
    const cat = document.createElement("img")
    cat.src = 'https://cataas.com/cat?' + Math.random()
    item.appendChild(cat)
    container.appendChild(item)
}
})()