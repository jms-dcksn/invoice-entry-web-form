const inputForm = document.querySelector('#user_form')
const emailInput = document.querySelector('#inputEmail4')


inputForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = emailInput.value
    fetch('/provision?email=' + email)
    .then((response) => {
        response.json().then((data)=>{
            console.log(data.message)
            document.querySelector('#message').innerHTML = data.message;
            
        })
        
    })
    alert('Created!');
    inputForm.reset();
})