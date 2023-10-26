function createDivs() {
    for (let i = 0; i < 256; i++) {
        var div = document.createElement('div')
        div.setAttribute("class", "square");
        div.addEventListener("mouseover", function() {
            return (this.style.backgroundColor = 'red');
        });
        document.getElementById('container').appendChild(div);
        console.log(div) 
    }
}

// console.log(createDivs());

createDivs()