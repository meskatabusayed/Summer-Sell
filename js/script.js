// product 1
document.getElementById('first-card').addEventListener('click',function(){
    const product1Name = document.getElementById('product1-name');
    const product1Text = product1Name.innerText;
    //console.log(product1Text);
    const productShow1 = document.getElementById('product-show1');
    productShow1.innerText = product1Text;
    
    // product price 1
    const product1Price = document.getElementById('product1-price');
    const product1PriceText = product1Price.innerText;
    const product1PriceNumber = parseFloat(product1PriceText);

    let totalPrice1 = document.getElementById('total-price');
    let totalPrice1String = totalPrice1.innerText;
    let totalPrice1Number = parseFloat(totalPrice1String);
    let price1 =  totalPrice1Number + product1PriceNumber;
    let finalPrice1 = price1.toFixed(2);
    totalPrice1.innerText = finalPrice1;

   
    
    
})
    

// product 2
document.getElementById('second-card').addEventListener('click',function(){
    const product2Name = document.getElementById('product2-name');
    const product2Text = product2Name.innerText;
    //console.log(product1Text);
    const productShow2 = document.getElementById('product-show2');
    productShow2.innerText = product2Text;


    // product price 2
    const product2Price = document.getElementById('product2-price');
    const product2PriceText = product2Price.innerText;
    const product2PriceNumber = parseFloat(product2PriceText);

    let totalPrice1 = document.getElementById('total-price');
    let totalPrice1String = totalPrice1.innerText;
    let totalPrice1Number = parseFloat(totalPrice1String);
    let price2 = totalPrice1Number + product2PriceNumber;
    let finalPrice2 = price2.toFixed(2);
    totalPrice1.innerText = finalPrice2; 

    
})

// product 3
document.getElementById('third-card').addEventListener('click',function(){
    const product3Name = document.getElementById('product3-name');
    const product3Text = product3Name.innerText;
    //console.log(product1Text);
    const productShow3 = document.getElementById('product-show3');
    productShow3.innerText = product3Text;

     // product price 3
     const product3Price = document.getElementById('product3-price');
     const product3PriceText = product3Price.innerText;
     const product3PriceNumber = parseFloat(product3PriceText);
 
     let totalPrice1 = document.getElementById('total-price');
     let totalPrice1String = totalPrice1.innerText;
     let totalPrice1Number = parseFloat(totalPrice1String);
     let price3 = totalPrice1Number + product3PriceNumber;
     let finalPrice3 = price3.toFixed(2);
     totalPrice1.innerText = finalPrice3;
})

// product 4
document.getElementById('fourth-card').addEventListener('click',function(){
    const product4Name = document.getElementById('product4-name');
    const product4Text = product4Name.innerText;
    //console.log(product1Text);
    const productShow4 = document.getElementById('product-show4');
    productShow4.innerText = product4Text;

    // product price 4
    const product4Price = document.getElementById('product4-price');
    const product4PriceText = product4Price.innerText;
    const product4PriceNumber = parseFloat(product4PriceText);

    let totalPrice1 = document.getElementById('total-price');
    let totalPrice1String = totalPrice1.innerText;
    let totalPrice1Number = parseFloat(totalPrice1String);
    let price4 = totalPrice1Number + product4PriceNumber;
    let finalPrice4 = price4.toFixed(2);
    totalPrice1.innerText = finalPrice4;
})

// product 5
document.getElementById('fifth-card').addEventListener('click',function(){
    const product5Name = document.getElementById('product5-name');
    const product5Text = product5Name.innerText;
   
    const productShow5 = document.getElementById('product-show5');
    productShow5.innerText = product5Text;

    // product price 5
    const product5Price = document.getElementById('product5-price');
    const product5PriceText = product5Price.innerText;
    const product5PriceNumber = parseFloat(product5PriceText);

    let totalPrice1 = document.getElementById('total-price');
    let totalPrice1String = totalPrice1.innerText;
    let totalPrice1Number = parseFloat(totalPrice1String);
    let price5 = totalPrice1Number + product5PriceNumber;
    let finalPrice5 = price5.toFixed(2);
    totalPrice1.innerText = finalPrice5;
})

// product 6
document.getElementById('six-card').addEventListener('click',function(){
    const product6Name = document.getElementById('product6-name');
    const product6Text = product6Name.innerText;
    
    const productShow6 = document.getElementById('product-show6');
    productShow6.innerText = product6Text;

    // product price 6
    const product6Price = document.getElementById('product6-price');
    const product6PriceText = product6Price.innerText;
    const product6PriceNumber = parseFloat(product6PriceText);

    let totalPrice1 = document.getElementById('total-price');
    let totalPrice1String = totalPrice1.innerText;
    let totalPrice1Number = parseFloat(totalPrice1String);
    let price6 =  totalPrice1Number + product6PriceNumber;
    let finalPrice6 = price6.toFixed(2);
    totalPrice1.innerText = finalPrice6;
})

// Coupon Button active
let applyButton = document.getElementById('apply');
let userInput = document.getElementById('user-input');

applyButton.addEventListener('click', function(){
    let justNow1 = document.getElementById('total-price');
    let justNow2 = justNow1.innerText;
    if(justNow2>=200){
    let nowTotalPrice = document.getElementById('total-price');
    let nowTotalPriceText = nowTotalPrice.innerText;
    let nowTotalPriceNumber = parseFloat(nowTotalPriceText);
    
    //console.log(nowTotalNumber);
    let nowTotalFinalPrice = nowTotalPriceNumber - (nowTotalPriceNumber * .20);
    

    let nowTotal  = document.getElementById('total');
    let nowTotalText = nowTotal.innerText;
    let nowTotalNumber = parseFloat(nowTotalText);
    let addNowTotal = nowTotalNumber + nowTotalFinalPrice;
    let addNowTotalFinal = addNowTotal.toFixed(2);
    nowTotal.innerText = addNowTotalFinal;
        
    // discount section
    let  discountPrice = document.getElementById('discount-price');
    let  discountPriceText = discountPrice.innerText;
    let  discountPriceNumber = parseFloat(discountPriceText);
    let  totalDiscountvalue = (nowTotalPriceNumber * .20);
    let  totalDiscount = discountPriceNumber + totalDiscountvalue;
    let  totalDiscountFinal = totalDiscount.toFixed(2); 
    discountPrice.innerText = totalDiscountFinal;


}
    else{
        console.log('invalid');
    }

})

userInput.addEventListener('keyup' , function(){
    if(userInput.value === 'SELL200'){
        applyButton.disabled = false
    }
    else{
        applyButton.disabled = true
    }
})


// modal Section
let  againTotal = document.getElementById('total');
let  againTotalText = againTotal.innerText;
let  againTotalNumber = parseFloat(againTotalText);









