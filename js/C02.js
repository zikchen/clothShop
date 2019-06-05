
var shoplist = {
    name: '',
    type: '',
    number: 0,
    total: 50,
    left: 0,
};
// var orderleft = document.getElementById('orderleft').value;
// var value;
// var orderleft;



function buytype(event) {

    $('.order_type').click(function (event) {
        var ordertype = event.target.name;
        var ordername = document.querySelector('.ordername').textContent;
        console.log(ordertype);
        console.log(ordername);
        shoplist.name = ordername;
        shoplist.type = ordertype;
        console.log(shoplist);
    });


}

function btnAdd() {
    //1、獲取#num的value
    var value = document.getElementById('testvalue').value;
    //2、將取出來的值做+1操作，再賦值給#num的value
    value = Number(value) + 1;
    document.getElementById('testvalue').value = value;

    console.log(value);
    shoplist.number = value;
    console.log(value);

    document.getElementById('bagnum').innerHTML = value;

    var orderleft = document.getElementById('orderleft');
    var shoplistLeft = shoplist.total - value;
    orderleft.innerHTML = shoplistLeft;

    shoplist.left = shoplistLeft;
    console.log(shoplist);



}


function btnReduce() {
    //1、獲取#num的值
    var value = document.getElementById('testvalue').value;
    //2、判斷#num的值是否小於等於1，如果小於等於1的話，則將值改為1
    //3、否則，可以實現 - 1 操作
    if (value <= 1) {
        value = 1;
    } else {
        value -= 1;
    }
    //4、將 value 的值賦值給 #num
    document.getElementById('testvalue').value = value;
    console.log(value);
    shoplist.number = value;
    console.log(value);
    var bag = document.getElementById('bagnum').value;
    bag = shoplist.number;
    console.log(value);
    // var bag = document.getElementById('bagnum').value;
    // bag = value;
    // console.log(bag);
    document.getElementById('bagnum').innerHTML = value;

    var orderleft = document.getElementById('orderleft');
    var shoplistLeft = shoplist.total - value;
    orderleft.innerHTML = shoplistLeft;

    shoplist.left = shoplistLeft;
    console.log(shoplist);


}

function addtocar() {
    console.log(shoplist);

}
