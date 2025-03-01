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
