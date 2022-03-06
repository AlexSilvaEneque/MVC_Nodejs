let btn = document.querySelector('#btn-guardar')

let idUser = window.location.pathname.split('/')[2]

let form = document.querySelector('#frmE')

btn.addEventListener('click', () => {
    let data = {
        name: form.name.value,
        email: form.email.value,
        genero: form.genero.value
    }
    
    fetch('/update/'+idUser,{
        method:'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((res) => {
        location.href = '/'
        return res.json()
    })
    .then((data) => {
        location.href = '/'
    })
})