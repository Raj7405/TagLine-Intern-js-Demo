
const pizzaForm = document.getElementById('pizzaOrder');
const statusSection = document.querySelector('#statuSection');
const orderShowDiv = document.querySelector('.order')
const orderDetail = document.querySelector('.orderDetail')
const orderStatus = document.querySelector('.orderStatus')
const orderQueue = []
let orderNumber = 0;


function OrderDataObj(pizzaName,size,quantity){
    this.pizzaName = pizzaName;
    this.size = size;
    this.quantity = quantity >= 0 ? quantity : 1; 
} 

function createOrderCard(obj ){
    const orderDetailCard = document.createElement('div')
    orderDetailCard.className = 'orderDetailCard'

    const orderStatusCard = document.createElement('div')
    orderStatusCard.className = 'orderStatusCard'
    orderStatusCard.id = `${obj?.pizzaName}+${obj?.size}+${obj?.quantity}+${orderNumber}`
     
    orderDetailCard.innerHTML = `
    <p><b>Order Details:</b></p>
    <p><b>Order No:</b> ${orderNumber}</p>
    <p><b>Pizza Name:</b> ${obj?.pizzaName}</p>
    <p><b>Size:</b> ${obj?.size}</p>
    <p><b>Quantity:</b> ${obj?.quantity}</p>
    `;
    
    orderDetail.appendChild(orderDetailCard)
    orderStatus.appendChild(orderStatusCard)
}

function showData(obj, n){
    createOrderCard(obj)
    const orderStatusCard = document.getElementById(`#${obj?.pizzaName}+${obj?.size}+${obj?.quantity}+${orderNumber}`);
    return new Promise (resolve => {
        // if (orderDetail.quantity >= 10) {
        //     orderStatus.innerHTML = `<h3>Large Order: Please wait this will take longer than usual.</h3>`;
        // }
        setTimeout(()=>{
            orderStatus.innerHTML = `
            <h3>Order ${orderNumber} in Progress</h3>
             <img src="https://media.tenor.com/I7GuZXfrYmkAAAAj/peach-goma.gif" class='cardImg'>`
        }, 1000 * n)
    
        //make it function for it
        // setTimeout(() => {
        //     orderStatus.innerHTML = `
        //         <h3>Order no.${orderNumber} is ready</h3>
        //         <h4>Please Proceed with payment</h4>
        //         <button> Pay </button>
        //     `;
        // }, 1000 * (obj.quantity * n));
        resolve(orderNumber);
    })
}
function orderReady(orderNumber){
    setTimeout(() => {
        orderStatus.innerHTML = `
            <h3>Order no.${orderNumber} is ready</h3>
            <h4>Please Proceed with payment</h4>
            <button> Pay </button>
        `;
    }, 1000 * (obj.quantity * n));
}
async function processOrder(orderDetail) {
    let readyOrder;
    switch (orderDetail?.size) {
        case 'small':
            readyOrder = await showData(orderDetail, 1)
            readyOrder.then(orderReady);
            break;
        case 'medium':
            readyOrder = await showData(orderDetail, 2 );
            break;
        case 'large':
            readyOrder = await showData(orderDetail, 3);
            break;
        default:
            readyOrder = await showData(orderDetail, 1);
    }
}
async function startProcessingQueue() {
    while (orderQueue.length > 0) {
        const currentOrder = orderQueue.shift();
        await processOrder(currentOrder, );
    }
}
pizzaForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const pizzaName = document.getElementById('pizzaName').value;
    const size = document.querySelector('input[name="size"]:checked');
    const quantity = parseInt(document.getElementById('quntity').value);

    if (size) { 
        const order = new OrderDataObj(pizzaName, size.id, quantity);
        orderQueue.push(order);
        console.log(orderQueue);
        if (orderQueue.length === 1) {
            orderNumber++
            startProcessingQueue(orderNumber);
        }
    } else {
        orderShowDiv.innerHTML = `<h3>Please select a pizza size.</h3>`;
    }
    pizzaForm.reset();  
});
