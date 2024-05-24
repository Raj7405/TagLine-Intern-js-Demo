
const pizzaForm = document.getElementById('pizzaOrder');
const statusSection = document.querySelector('#statuSection');
const detailsDiv = document.querySelector('.orderDetail')
const statusDiv = document.querySelector('.orderStatus')
// const orderList = []
// const completeOrderList = []


function OrderDataObj(pizzaName,size,quantity){
    this.pizzaName = pizzaName;
    this.size = size;
    this.quantity = quantity >= 0 ? quantity : 1; 
} 

function showData(obj, n){
    setTimeout(()=>{
        statusDiv.innerHTML = `
        <h3>Order in Progress</h3>
         <img src="https://media.tenor.com/I7GuZXfrYmkAAAAj/peach-goma.gif" class='cardImg'>`
    }, 1000 * (parseInt(obj.quantity/2) * n))

    setTimeout(() => {
        statusDiv.innerHTML = `
            <h3>Order is ready</h3>
            <h4>Please Proceed with payment</h4>
            <button> Pay </button>
        `;
    }, 1000 * (obj.quantity * n));
}
function startPreparation(...orderDetail){
    let OrderStatus = new Promise((resolve, reject)=>{
        if(!orderDetail){
            reject("Please Place proper Order")
        }
        else{
            resolve(orderDetail)
        }
    })
    .then(obj=>{
        detailsDiv.innerHTML = `
        <p><b>Order Details:</b></p>
        <p><b>Pizza Name:</b> ${obj?.pizzaName}</p>
        <p><b>Size:</b> ${obj?.size}</p>
        <p><b>Quantity:</b> ${obj?.quantity}</p>
        `;

        if(obj.quantity >= 10){
            statusDiv.innerHTML = `<h3>Large Order: Please wait, this might take longer than usual.</h3>`
        }

        switch(obj?.size) {
            case small:
                showData(obj,1)
                break;
            case medium:
                showData(obj,2)
                break;
            case large:
                showData(obj,3)
                break;    
            default:
                showData(obj,1)
          }
  
    })
    .catch(reject => {
        detailsDiv.innerHTML = `<h3>${reject}</h3>`;
    })
}

pizzaForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const pizzaName = document.getElementById('pizzaName').value;
    const size = document.querySelector('input[name="size"]:checked');
    const quantity = parseInt(document.getElementById('quntity').value);

    // let Order = new OrderDataObj(pizzaName, size.id,  quantity)
    // orderList.push(Order)
    console.log(orderList)
    if(!pizzaName){
        startPreparation(null)
    }
    else{
        startPreparation(new OrderDataObj(pizzaName,size.id ,quantity))
    }
});

