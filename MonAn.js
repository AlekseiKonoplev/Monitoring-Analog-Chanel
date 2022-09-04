const slider = document.getElementById('slide');
const output = document.getElementById('V');
const AHinput = document.getElementById('AH')
const WHinput = document.getElementById('WH')
const WLinput = document.getElementById('WL')
const ALinput = document.getElementById('AL')
const statusDisplay = document.getElementById('display')

statusDisplay.textContent = "Set PV";

output.value = 50
slider.value = 50
AHinput.value = 75
WHinput.value = 63
WLinput.value = 37
ALinput.value = 25


slider.addEventListener('mousemove', () => {
    console.log(slider.value)

    if (slider.value <= ALinput.value) {
        console.log('AL')
        statusDisplay.textContent = "AL";
        statusDisplay.className = 'alarm'
        output.style.backgroundColor = 'lightpink'
    }

    else if (slider.value <= WLinput.value) {
        console.log('WL')
        statusDisplay.textContent = "WL";
        statusDisplay.className = 'warning'
        output.style.backgroundColor = 'moccasin'
    }

    else if (slider.value >= AHinput.value) {
        console.log('AH')
        statusDisplay.textContent = "AH";
        statusDisplay.className = 'alarm';
        output.style.backgroundColor = 'lightpink'
    }

    else if (slider.value >= WHinput.value) {
        console.log('WH')
        statusDisplay.textContent = "WH";
        statusDisplay.className = 'warning'
        output.style.backgroundColor = 'moccasin'
    }

    else{
        console.log('Normal')
        statusDisplay.textContent = "Normal";
        statusDisplay.className = 'normal'
        output.style.backgroundColor = 'lightsteelblue'
    }
    
})

slider.addEventListener('touchmove', () => {
    console.log(slider.value)

    if (slider.value <= ALinput.value) {
        console.log('AL')
        statusDisplay.textContent = "AL";
        statusDisplay.className = 'alarm'
        output.style.backgroundColor = 'lightpink'
    }

    else if (slider.value <= WLinput.value) {
        console.log('WL')
        statusDisplay.textContent = "WL";
        statusDisplay.className = 'warning'
        output.style.backgroundColor = 'moccasin'
    }

    else if (slider.value >= AHinput.value) {
        console.log('AH')
        statusDisplay.textContent = "AH";
        statusDisplay.className = 'alarm';
        output.style.backgroundColor = 'lightpink'
    }

    else if (slider.value >= WHinput.value) {
        console.log('WH')
        statusDisplay.textContent = "WH";
        statusDisplay.className = 'warning'
        output.style.backgroundColor = 'moccasin'
    }

    else{
        console.log('Normal')
        statusDisplay.textContent = "Normal";
        statusDisplay.className = 'normal'
        output.style.backgroundColor = 'lightsteelblue'
    }
    
})
