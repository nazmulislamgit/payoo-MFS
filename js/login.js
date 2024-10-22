// step - 1 set event handler
document.getElementById('btn-login').addEventListener('click', function(event){
    // step -2 prevent default behavior (prevent reloading browser)
    event.preventDefault(); // <-- form submit 
    console.log('Login Okay');

    // step - 3 get the phone number

    const phoneNumber = document.getElementById('mobile-number');
    
})