const buttons = document.getElementsByClassName('key')

const boxes = document.querySelector('.box')

    for (const button of buttons) {
        button.addEventListener ('click', function() {
            boxes.textContent = button.textContent
            console.log(boxes.textContent)
        })
    }  