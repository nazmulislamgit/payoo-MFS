// step - 1 set event handler
document.getElementById('btn-login').addEventListener('click', function(event){
    // step -2 prevent default behavior (prevent reloading browser)
    event.preventDefault(); // <-- form submit 

    // step - 3 get the phone number

    const mobileNumber = document.getElementById('mobile-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    // step - 4 
    if(mobileNumber=== '828282' && pinNumber=== '1234'){
        window.location.href = './home.html'
    }
    else{
        alert('Wrong Phone Number and Pin')
    }
})