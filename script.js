// var div = document.createElement('div')
// div.setAttribute("class", "square");
    
// document.getElementById('container').appendChild(div);


// console.log(div) 


// var test = document.createElement('h3')
// test.textContent = ('hello world');
// document.getElementsByClassName('square')[0].appendChild(test)

function createDivs() {
    for (let i = 0; i < 256; i++) {
        var div = document.createElement('div')
        div.setAttribute("class", "square");
    
        document.getElementById('container').appendChild(div);
        console.log(div) 
    }
}

console.log(createDivs());