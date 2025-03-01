document.getElementById('btn-login-shit').addEventListener('click', 
    function () {
        window.location.href = "/login.html";
    }
)
const btnComplete = document.querySelectorAll('.btn-complete-c');

for(i = 0; i < btnComplete.length; i++){
    const btnCom = btnComplete[i];
    btnCom.addEventListener('click', function(){
        alert('Board Update Successfully');   
    })
}
const btnRandome = document.getElementById('btn-randome');
const mainContainer = document.getElementById('main-container');
btnRandome.addEventListener('click', function(){
    mainContainer.style.backgroundColor = randomeColor();
})

function randomeColor(){
    let redColor = Math.floor(Math.random() * 225)
    let greenColor = Math.floor(Math.random() * 225)
    let blueColor = Math.floor(Math.random() * 225)
    return `rgb(${redColor}, ${greenColor}, ${blueColor})`
}

const buttonDisabled = document.querySelectorAll('#btn-complete');
for(j = 0; j < buttonDisabled.length; j++){
    const buttonD = buttonDisabled[j];
    buttonD.addEventListener('click', function(){
        buttonD.disabled = true;
        buttonD.style.backgroundColor = 'gray';
    })
}




