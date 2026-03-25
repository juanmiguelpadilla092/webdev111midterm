const cardInput = document.getElementById('cardNumber');

cardInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    let formattedValue = '';

    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedValue += ' ';
        }
        formattedValue += value[i];
    }
    e.target.value = formattedValue;
});

function showCardHover() {
    const email = document.getElementById('userEmail').value;
    const pass = document.getElementById('userPass').value;

    if(email !== "" && pass !== "") {
        document.getElementById('cardOverlay').style.display = 'flex';
    } else {
        alert("Please fill in your login details first.");
    }
}

function closeCardHover() {
    document.getElementById('cardOverlay').style.display = 'none';
}

function processLogin() {
    const cardNum = document.getElementById('cardNumber').value;
    
    if(cardNum.length === 19) {
        alert("Login Successful!");
        window.location.href = "index.html";
    } else {
        alert("Please enter a valid 16-digit card number.");
    }
}

window.onclick = function(event) {
    const overlay = document.getElementById('cardOverlay');
    if (event.target == overlay) {
        closeCardHover();
    }
}