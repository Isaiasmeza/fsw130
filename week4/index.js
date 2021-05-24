const intitialState = {
    contacts: []
}

function reducer(state = intitialState, action) {
    switch (action.type) {
        case "ADD_NEW_CONTACT":
            var newArr = state.state.contacts
            newArr.push(action.payload)
            return {
                state: {
                    contacts: newArr,
                    newContact: action.payload
                }
            }
        case "DELETE_CONTACT":
            const arrCopy = state.state.contacts
            let del = parseInt(action.payload)
            const newArr2 = arrCopy.filter(person => person.id !== del)
            return {
                state: {
                    contacts: newArr2
                }
            }
        default: return {
            state
        }

    }
}
const store = Redux.createStore(reducer)

function addNewContact(person) {
    return {
        type: "ADD_NEW_CONTACT",
        payload: person
    }
}
function delPerson(person) {
    return {
        type: "DELETE_CONTACT",
        payload: person
    }
}
store.subscribe(() => console.log(store.getState()))

function render() {
    const contacts = document.getElementById("contacts")
    let state = store.getState()
    let C = state.state.newContact
    let div = document.createElement("div")
    let h2 = document.createElement("h2")
    let phoneTag = document.createElement("h3")
    let emailTag = document.createElement("h4")
    h2.innerHTML = `Name: ${C.name}`
    let button = document.createElement("button")
    button.classList.add("del")
    button.textContent = "Delete"
    phoneTag.innerHTML = `Phone Number: ${C.phone}`
    emailTag.innerHTML = `Email Address : ${C.email}`
    div.id = state.state.contacts.length - 1
    button.id = state.state.contacts.length - 1
    button.addEventListener("click", function (e) {
        let del = button.parentNode
        console.log(del)
        if (e.target.id == button.id) {
            contacts.removeChild(del)
            store.dispatch(delPerson(del.id))
        }
    })
    div.append(h2)
    div.append(phoneTag)
    div.append(emailTag)
    div.append(button)

    contacts.append(div)
}

document.getElementById("newEntry")
// tried e.preventDefault() here 
    .addEventListener("click", function (e) {
        // I also tried e.preventDefault() here but would not work
        const name = document.getElementById("add-Name").value
        const email = document.getElementById("add-email").value
        const phone = document.getElementById("add-phone").value


        store.dispatch(addNewContact({
            name: name,
            email: email,
            phone: phone,
            id: store.getState().state.contacts.length
        }))
        render()
    })
