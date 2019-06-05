


var chargelist = {
    name: '',
    type: '',
    number: [0, 0, 0],
    totalnum: 0,
    uniprice: 345,
    totalprice: 0,
    shipping: 60,
    coupon: 0,
    totalcoupon:2000,
    totalcharge: 0,
};

// 移除按鈕
function remove(event) {
    elem = event.parentNode.parentNode; // 获取要删除的元素
    elem.remove();
}


// 購物車數字加減
function btnClick(btn) {
    // 宣告變量，用以保存商品個數的數據
    var spanValue;
    // a.更改 input 中的數據
    // a.1.判斷btn是 + 還是 -
    if (btn.name == "+") {
        // a.2 根據 btn 找到 span
        var span = btn.nextElementSibling;
        // a.3 獲取 span 裡的數據
        spanValue = parseInt(span.textContent);
        // a.4 更新span 中的數據
        spanValue += 1;
        span.textContent = spanValue;
        
    } else {
        //减法操作
        var span = btn.previousElementSibling;
        //1.3 获取 span里的数据
        spanValue = parseInt(span.textContent);
        //1.4 更新 span中的数据
        if (spanValue >= 1) {
            spanValue -= 1;
            span.textContent = spanValue;
        }
        
    }


    // 2.計算 小計
    // 2.1先 獲取 單價 元素(uniprice)
    // var uniprice = btn.parentNode.parentNode.nextElementSibling;
    var uniprice = chargelist.uniprice;
    console.log(uniprice);
    // 2.2 獲取 單價 元素中的 數值(price)
    var price = parseInt(uniprice);
    // 2.3 計算小記(spanValue*price),保存在total
    var total = price * spanValue;
    // 2.4 獲取 小計 元素(uniprice)
    // var unitotal=btn.parentNode.nextElementSibling;
    var unitotal = btn.parentNode.parentNode.nextElementSibling;
    // // 2.5 將 total 的值 賦值給 unitatal元素
    unitotal.textContent = total;
    // 調用 計算總計 的函數
    calAlltotal();
    console.log(total);
    calCharge();
    bagnum();
}

function calAlltotal(){
    // 1.獲取 小計 中的所有 
    var subtotals =document.querySelectorAll('.subtotal');
    console.log(subtotals);
    // 2. 循環歷遍所有 .subtotal
    var alltotal = 0;
    
    for(var i=0;i<subtotals.length;i++){
            
        var subtotal = subtotals[i]  ;
        var totalValue=parseInt(subtotal.textContent);
        alltotal += totalValue;
        console.log(alltotal);
    }
    // console.log(document.getElementById('totalprice'));
    // 4.賦值
    document.getElementById('totalprice').textContent = alltotal;
    console.log(document.getElementById('totalprice').textContent);
    console.log(alltotal);
}
calAlltotal();
chargetotal();
function calCharge(){
    // 訂單小計 取得元素
    var subtotal = document.getElementById('totalprice');
    console.log(subtotal);
    // 取得訂單小計 值
    var subtotalValue = parseInt(subtotal.textContent);
    console.log(subtotalValue);
    // 取得運費元素
    var shipping = document.getElementById('shipping');
    var shippingValue = parseInt(chargelist.shipping);
    shipping.textContent = shippingValue;
    // 取得我的購物金元素
    var totalcoupon = document.getElementById('totalcoupon');
    var totalcouponValue = parseInt(chargelist.totalcoupon);
    totalcoupon.textContent = totalcouponValue;
    // 取得輸入購物金元素
    var coupon = document.getElementById('coupon');
    var couponValue = -parseInt(coupon.value);
    var couponuse = document.getElementById('couponuse');
    var couponuseValue = couponValue;
    
    couponuse.textContent = couponuseValue 
    totalcoupon.textContent = '$'+ (totalcouponValue + couponuseValue);
    // 取得訂單總額元素
    var totalcharge = document.getElementById('totalcharge');
    var totalchargeValue = parseInt(subtotalValue+shippingValue+couponuseValue);
    console.log(totalcharge);
    totalcharge.textContent = totalchargeValue;

    
}

// 購物包數量
function bagnum(){
    var ordernums = document.querySelectorAll('.ordernum');
    var alltotal = 0;
    for (i=0;i<ordernums.length;i++) {
        var ordernum = ordernums[i];
        var ordernumAll = parseInt(ordernum.textContent);
        alltotal += ordernumAll;
    }
    console.log(alltotal);
    // 賦值
    document.getElementById('bagnum').textContent = alltotal;
    console.log(document.getElementById('bagnum').textContent);
}

