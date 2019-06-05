// 跳轉退貨頁面
function returnPage(){
    window.open('G08.html', '退貨退款', config = 'height=500,width=500');
}

// 退貨倒數
var time = 7000;//倒數7秒
function returnorder() {
    
    // // document.getElementById('returnorder').disabled = true;
    var element = document.getElementsByClassName('returnorder');
    for (var i = 0; i < element.length; i++) {
        element[i].onclick =  element[i].disabled = true ;
    }
    
}
function MyCounter() {
    if (time <= 0) {
        //倒數完成
        alert('倒數成功');
        returnorder();
    } else {
        console.log((time / 1000) + " sec...");
        setTimeout(MyCounter, 1000);

    }
    time -= 1000;
};
// 列印訂單
function printorder() {

    window.print();

}