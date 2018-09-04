function updateOrder(){
    const TAXRATE = 0.2;
    const DONUTPRICE = 2;
    var numCakeDonuts =0;
    var numGlazedDonuts =0;



    var numCakeDonuts = parseInt(document.getElementById("cakedonuts").value);
    console.log(document.getElementById("cakedonuts").value);
    var numGlazedDonuts = parseInt(document.getElementById("glazedonuts").value);
    var hid = parseInt(document.getElementById("hidden").value);

    var subTotal = (numCakeDonuts + numGlazedDonuts) * DONUTPRICE;
    var tax = subTotal * TAXRATE;
    var total = subTotal + tax+hid;

    document.getElementById("subtotal").value = subTotal.toFixed(2) + " PLN";
    document.getElementById("subtotal").innerHTML = document.getElementById("subtotal").value;
   
    document.getElementById("tax").value = tax.toFixed(2) + " PLN";
    document.getElementById("tax").innerHTML = document.getElementById("tax").value;
    
    document.getElementById("total").value = total.toFixed(2) + " PLN";
    document.getElementById("total").innerHTML = document.getElementById("total").value;

}
  
function placeOrder(form){
    form.submit();
};