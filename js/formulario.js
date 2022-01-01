const form=document.querySelector("#formulario");

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event){
    event.preventDefault()
    const dataForm = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: dataForm,
        headers: {
            'Accept': 'application/json'
        }
    })

    if(response.ok){
        this.reset();
        alert('Gracias por contactarme, te escribiré a la brevedad!!');
    }
}