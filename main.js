const form = document.getElementById('form-contact')

let lists = ''
const contacts = [
   
]

form.addEventListener('submit', (e) => {
    e.preventDefault()

    createContact()
})

function createContact() {
    const name = document.getElementById('name-contact').value
    const tel = document.getElementById('tel-contact').value

    const contact = contacts.find(contact => contact.name === name)

    if (contact) {
        alert('Contato ja cadastrado com esse nome')
    } else {
        contacts.push({
            name,
            tel
        })

        addToList(name, tel)
    }
}

function addToList(name, tel) {
        let list = `<tr> <td>${name}</td> <td>${tel}</td> </tr>`

        lists += list

        const corpoTabela = document.querySelector('tbody')
        corpoTabela.innerHTML = lists
}