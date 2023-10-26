
    function createDivs() {
        for (let i = 0; i < 256; i++) {
            var div = document.createElement('div')
            div.setAttribute("class", "square");
            div.addEventListener("mouseover", function() {
                return (this.style.backgroundColor = 'red');
            });
            document.getElementById('container').appendChild(div);
            // console.log(div) 
        }
    }

const grid = document.getElementById('container');

grid.style.gridTemplateColumns = 'repeat(16, 1fr)';



createDivs()



function gridSizeButtonClicked() {
    let userNumber = prompt("Please enter a number between 1 and 100:");
    console.log(userNumber);
    const grid = document.getElementById('container');
        while (grid.hasChildNodes()) {
            grid.removeChild(grid.firstChild);
        }
    function createDivs() {
        for (let i = 0; i < (userNumber*userNumber); i++) {
            var div = document.createElement('div')
            div.setAttribute("class", "square");
            div.addEventListener("mouseover", function() {
                return (this.style.backgroundColor = 'red');
            });
            document.getElementById('container').appendChild(div);
            console.log(div) 
        }
        const grid = document.getElementById('container');

        grid.style.gridTemplateColumns = `repeat( ${userNumber}, 1fr)`;

    }
    createDivs()
}


