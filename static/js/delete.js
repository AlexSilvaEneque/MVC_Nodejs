function eliminar(id) {
    fetch('/delete/'+id,{
        method: 'DELETE'
    })
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        location.href = '/'
    })
}