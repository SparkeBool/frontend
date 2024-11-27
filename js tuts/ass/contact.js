let contacts = [];
let addContactBtn = document.getElementById('addContactBtn');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let phoneInput = document.getElementById('phone');
let addressInput = document.getElementById('address');
let dobInput = document.getElementById('dob');
let contactsTable = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];

function displayContacts() {
    contactsTable.innerHTML = '';
    for (let i = 0; i < contacts.length; i++) {
        let contact = contacts[i];
        let row = contactsTable.insertRow();
        row.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.email}</td>
            <td>${contact.phone}</td>
            <td>${contact.address}</td>
            <td>${contact.dob}</td>
        `;
    }
}

addContactBtn.onclick = function() {
    let name = nameInput.value;
    let email = emailInput.value;
    let phone = phoneInput.value;
    let address = addressInput.value;
    let dob = dobInput.value;

    let newContact = { name, email, phone, address, dob };
    contacts.push(newContact);
    
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    addressInput.value = '';
    dobInput.value = '';
    
    displayContacts();
};

displayContacts();
