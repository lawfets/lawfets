// display dat getoond wordt bovenaan, wordt gebruikt om de gedrukte buttons te tonen
const display = document.getElementById('display')
// meerdere buttons instellen
const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === "btn_equals") {
            // btn_equals moet gebruikt worden voor math, niet
            // om gegevens toe te voegen tot de string.
            try {
                display.value = math.evaluate(display.value);
            } catch (err) {
                display.value = "Error";
            } 
        } else if (button.id == 'btn_clear') {
            // btn_clear is om de string terug naar 0 characters te brengen
            display.value = '';
        }  else if (button.id == 'btn_remove') {
            if (display.value.length > 0) {
                display.value = display.value.slice(0, -1);
            }
        } else if (button.id == "btn_power") {
            display.value = math.pow(math.evaluate(display.value), 2);
        } else if (button.id == "btn_sqrt") {
            display.value = math.sqrt(math.evaluate(display.value));
        }
        else {
            display.value += button.textContent; 
            // dit voegt de tekst uit de knop erbij
        }
    });
});