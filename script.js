let screan = document.getElementById('inText');
 let mybtn = document.querySelectorAll('button');
let screanValue = '';

for (items of mybtn) {
    items.addEventListener('click', (e) => {
       /* btnText = e.target.value; */
        btnText = e.target.innerText;

        if (btnText == 'X') {
           btnText = '*';
            screanValue +=btnText;
            screan.value = screanValue;
        }

       else if (btnText == 'C') {
            screanValue = "";
            screan.value = screanValue;
        }
        
       else if (btnText == 'DEL') {
            screanValue = screanValue.slice(0, screanValue.length - 1);
            screan.value=screanValue;
        }

        else if (btnText == '=') {
            screan.value = eval(screanValue);
            console.log(eval(screanValue))

        }
        else{
            screanValue+=btnText;
            screan.value=screanValue;
        }
    })
    screanValue='';
    screan.value=screanValue;
}

