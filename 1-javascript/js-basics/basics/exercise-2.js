let myAddress = {
    street: "18 Regent Avenue",
    city: "Durban",
    zipCode: "4340"
}

function showAddress(address) {
    for (const entry of Object.entries(address)) {
        console.log(entry)
    }
}

showAddress(myAddress)
