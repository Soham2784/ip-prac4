class Person {
    constructor(name, address, email, phone) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone;
    }

    displayInfo = () => {
        return `Name: ${this.name}, Address: ${this.address}, Email: ${this.email}, Phone: ${this.phone}`;
    }
}

class Student extends Person {
    constructor(name, address, email, phone, rollNo) {
        super(name, address, email, phone);
        if (rollNo === 0) {
            throw new Error('Roll number cannot be zero!');
        }
        this.rollNo = rollNo;
    }

    displayInfo() {
        return `${super.displayInfo()}, Roll No: ${this.rollNo}`;
    }
}

function validateForm() {
    let phone = document.getElementById("phone").value;
    let tagline = document.getElementById("tagline").value;

    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return false;
    }

    if (tagline.length > 50) {
        alert("Tagline cannot exceed 50 characters.");
        return false;
    }


    return true;
}

function processOrder(event) {
    event.preventDefault();

    if (validateForm()) {
        const date = new Date();
        const receiptDate = date.toLocaleString();
        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const tagline = document.getElementById("tagline").value;
        const color = document.getElementById("color").value;
        const size = document.getElementById("size").value;
        const quantity = document.getElementById("quantity").value;
        const customer = new Person(name, address, email, phone);

        alert(`
            Receipt: \n
            Name: ${customer.name}\n
            Address: ${customer.address}\n
            Email: ${customer.email}\n
            Phone: ${customer.phone}\n
            T-Shirt Details:\n
            Tagline: ${tagline}\n
            Color: ${color}\n
            Size: ${size}\n
            Quantity: ${quantity}\n
            Receipt Date: ${receiptDate}
        `);

        console.log(customer.displayInfo());
    }
}

// Attach event listener to form submission
window.onload = function () {
    document.getElementById("orderForm").addEventListener("submit", processOrder);
};
