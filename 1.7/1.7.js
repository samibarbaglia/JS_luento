let dice_amount = parseInt(prompt('Input number of dices.'))
let sum = 0
for (let v = 0; v !== dice_amount; v++)
{
    let dice_total = Math.floor(Math.random()*6)+1
    sum = sum + dice_total
}
kohde.innerHTML = 'Result of the dices: ' + sum;