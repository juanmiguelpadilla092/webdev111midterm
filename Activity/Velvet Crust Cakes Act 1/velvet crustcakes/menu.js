const modal = document.getElementById("orderModal");
const modalBody = document.getElementById("modal-body");
const thankYou = document.getElementById("thank-you-message");

function openModal(name, img, price) {
    document.getElementById("modal-name").innerText = name;
    
    const modalImg = document.getElementById("modal-img");
    modalImg.src = img;
    
    document.getElementById("modal-price").innerText = price;
    modalBody.style.display = "block";
    thankYou.style.display = "none";
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

function showThankYou() {
    modalBody.style.display = "none";
    thankYou.style.display = "block";
}

function goHome() {
    window.location.href = "index.html";
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}