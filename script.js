let screan = document.getElementById('inText');
let mybtn = document.querySelectorAll('button');
let screanValue = '';

for (items of mybtn) {
    items.addEventListener('click', (e) => {
        /* btnText = e.target.value; */
        var btnText = e.target.value;

        if (btnText == '*') {
            screanValue += btnText;
            screan.value = screanValue;
        }

        else if (btnText == 'MC') {
            screanValue = "";
            screan.value = screanValue;
        }

        else if (btnText == 'DEL') {
            screanValue = screanValue.slice(0, screanValue.length - 1);
            screan.value = screanValue;
        }

        else if (btnText == '=') {
            screan.value= eval(screanValue);
        }
        else {
            screanValue += btnText;
            screan.value = screanValue;
        }
    })
}

