let kohde = document.querySelector('#kohde');

let user_q = confirm('Should I calculate the square root?')
    if (user_q === false) {
        kohde.innerHTML = 'The square root is not calculated.';}

    else {
        let num = parseInt(prompt('Give number.'))
        if (num < 0 ) {
            kohde.innerHTML = 'The square root of a negative number is not defined'}
        else
        {
            let result = Math.sqrt(num);
            kohde.innerHTML = 'Square ' + num + ' is ' + result;
        }
    }