  

function login() {  
   var data = [
      {
         account: 'test@example.com.tw',
         password: '7749',
      },
      {
         account: 'admin@example.com.tw',
         password: '123456',
      }
   ];

   var account = document.getElementById("username").value;
   var password = document.getElementById("userpass").value;

   
   var total = data.length;
   for (i=0;i<total;i++){
      if(account == data[i].account && password == data[i].password ){
         console.log(data[i].account);
         window.location.href = "B02index-unlock.html";
         window.event.returnValue = false;
         
      } else if (account != data[i].account || password != data[i].password ){
         alert('帳號或密碼錯誤');  
      }
   }
   alert('test');






//    if (account == "") {
//       alert("請輸入使用者名稱");
//    } else if (password == "") {
//       alert("請輸入密碼");
//    } else if (account == "admin" && password == "123456") {
//       window.location.href = "B02index-unlock.html";
//       window.event.returnValue = false;
//    }else {
//       alert("請輸入正確的使用者名稱和密碼！");
//    }
}
function register() {
   window.location.href = "A02register.html";
   window.event.returnValue = false;
}
function Fb() {
   window.location = "https://www.facebook.com/spring201888/?ref=page_internal";
   window.event.returnValue = false;
}

