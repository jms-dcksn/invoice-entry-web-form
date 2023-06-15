const inputForm = document.querySelector('#invoice_form')
const vendorInput = document.querySelector('#vendor')


inputForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const vendor = vendorInput.value
    fetch('/provision?email=' + vendor)
    .then((response) => {
        response.json().then((data)=>{
            console.log(data.message)
            document.querySelector('#message').innerHTML = data.message;
            
        })
        
    })
    alert('Invoice Submitted!');
    inputForm.reset();
})