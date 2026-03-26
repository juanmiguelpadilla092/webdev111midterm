const stockData = [
    { id: "SKU-902", name: "Bolany Fork 29er", qty: 4, cost: "₱4,200", loc: "A-1" },
    { id: "SKU-441", name: "Ryzen 5 2400G", qty: 12, cost: "₱3,800", loc: "B-4" },
    { id: "SKU-108", name: "Ramsta 8GB RAM", qty: 45, cost: "₱1,100", loc: "B-8" },
    { id: "SKU-772", name: "Gravel Bar 420mm", qty: 3, cost: "₱1,500", loc: "C-1" },
    { id: "SKU-012", name: "Shimano Deore M6100", qty: 8, cost: "₱2,900", loc: "A-3" }
];

const supplierData = [
    { name: "John Michael Miano PC Express.", contact: "jdmiano9841val@student.fatima.edu.ph", lead: "14 Days", rating: "9.2" },
    { name: "Curt Menor Bike Parts PH", contact: "orders@bikeph.com", lead: "3 Days", rating: "8.5" },
    { name: "Jose Serdena Ramsta Sumasabog Parts.", contact: "support@sv.com", lead: "7 Days", rating: "9.8" },
    { name: "Kenneth Nagbebenta ng Piyesa ng bike.", contact: "info@manilaind.ph", lead: "5 Days", rating: "7.9" }
];

const orderData = [
    { order_id: "ORD-9901", date: "2026-03-18", status: "SHIPPED", total: "₱12,500" },
    { order_id: "ORD-9905", date: "2026-03-19", status: "PENDING", total: "₱4,200" },
    { order_id: "ORD-9910", date: "2026-03-20", status: "ARRIVED", total: "₱32,000" },
    { order_id: "ORD-9915", date: "2026-03-20", status: "CANCELLED", total: "₱1,200" }
];

function showTab(type) {
    const title = document.getElementById('view-title');
    const head = document.getElementById('table-head');
    const body = document.getElementById('table-body');
    
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    
    const activeBtn = document.getElementById(`btn-${type}`);
    if(activeBtn) activeBtn.classList.add('active');

    if (type === 'stock') {
        title.innerText = "CURRENT_INVENTORY";
        head.innerHTML = `<tr><th>SKU_ID</th><th>DESCRIPTION</th><th>QTY</th><th>PRICE</th><th>LOC</th></tr>`;
        body.innerHTML = stockData.map(i => `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.qty}</td><td>${i.cost}</td><td>${i.loc}</td></tr>`).join('');
    } else if (type === 'suppliers') {
        title.innerText = "VENDOR_DIRECTORY";
        head.innerHTML = `<tr><th>NAME</th><th>CONTACT</th><th>LEAD_TIME</th><th>RATING</th></tr>`;
        body.innerHTML = supplierData.map(s => `<tr><td>${s.name}</td><td>${s.contact}</td><td>${s.lead}</td><td>${s.rating}/10</td></tr>`).join('');
    } else if (type === 'orders') {
        title.innerText = "PURCHASE_HISTORY";
        head.innerHTML = `<tr><th>ORDER_ID</th><th>DATE</th><th>STATUS</th><th>TOTAL</th></tr>`;
        body.innerHTML = orderData.map(o => `<tr><td>${o.order_id}</td><td>${o.date}</td><td>${o.status}</td><td>${o.total}</td></tr>`).join('');
    }
}

function toggleReports() {
    const overlay = document.getElementById('reports-overlay');
    overlay.style.display = (overlay.style.display === 'flex') ? 'none' : 'flex';
}

function addItemModal() {
    const currentTab = document.getElementById('view-title').innerText;
    alert(`ACTION: Manual Entry for ${currentTab}. Please scan barcode or enter serial number.`);
}

document.addEventListener('DOMContentLoaded', () => {
    showTab('stock');
});