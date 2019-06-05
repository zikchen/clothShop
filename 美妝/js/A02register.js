// 下拉選單年月日
window.onload = function () {
    var myDate = new Date();
    var startYear = myDate.getFullYear() - 50;
    var endYear = myDate.getFullYear()
    var obj = document.getElementById('inputState1')
    for (var i = startYear; i <= endYear; i++) {
        obj.options.add(new Option(i, i));
    }

    var startMon = 1;
    var endMon = 12;
    var obj2 = document.getElementById('inputState2')
    for (var i = startMon; i <= endMon; i++) {
        obj2.options.add(new Option(i, i));
    }
    var startDay = 1;
    var endDay = 31;
    var obj3 = document.getElementById('inputState3')
    for (var i = startDay; i <= endDay; i++) {
        obj3.options.add(new Option(i, i));
    }
    
}
    

   