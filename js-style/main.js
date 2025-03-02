document.getElementById('btn-login-shit').addEventListener('click',
    function () {
        window.location.href = "login.html";
    }
)


const btnRandome = document.getElementById('btn-randome');
const mainContainer = document.getElementById('main-container');
btnRandome.addEventListener('click', function () {
    mainContainer.style.backgroundColor = randomeColor();
})

function randomeColor() {
    let redColor = Math.floor(Math.random() * 225)
    let greenColor = Math.floor(Math.random() * 225)
    let blueColor = Math.floor(Math.random() * 225)
    return `rgb(${redColor}, ${greenColor}, ${blueColor})`
}

const now = new Date()
const date = now.toLocaleDateString("en-US", { dateStyle: "long" });
const dayName = now.toLocaleDateString("en-US", { weekday: "short" })
document.getElementById('real-date').innerHTML = `${dayName},<br><span class="font-bold">${date}</span>`





const buttonDisabled = document.querySelectorAll('#btn-complete');
for (j = 0; j < buttonDisabled.length; j++) {
    const buttonD = buttonDisabled[j];

    console.log()
    // console.log(buttonD.parentNode.parentNode.getElementsByTagName("h2")[0].innerText)
    buttonD.addEventListener('click', function () {
        // alert('Board Update Successfully');
        buttonD.disabled = true;
        buttonD.style.backgroundColor = 'gray';
        const taskNumber = document.getElementById('task-completed-number').innerText;
        const convertTaskNumber = parseFloat(taskNumber);

        const substract = convertTaskNumber - 1;
        document.getElementById('task-completed-number').innerText = substract;


        const navNumber = document.getElementById('nav-number').innerText;
        const convertNavNumber = parseFloat(navNumber);
        const addNumber = convertNavNumber + 1;
        document.getElementById('nav-number').innerText = addNumber;
        const p = document.createElement('p');
        p.classList.add("mb-2")
        p.innerText = `You have Complete The Task ${buttonD.closest(".card-body").querySelector("h2").innerText} at ${(new Date()).toLocaleTimeString()}`;
        document.getElementById('history-list').appendChild(p);

    })
}
document.getElementById('clear-history').addEventListener('click', function(){
     document.getElementById('history-list').innerHTML = '';
   
    
})




