let code;

createCode = () => {
    code = "";
    let codeLength = 5;
    let checkCode = document.getElementById("checkCode");

    let codeChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    for (let i = 0; i < codeLength; i++) {
        let charNum = Math.floor(Math.random() * 52);
        code += codeChars[charNum];
    }

    if (checkCode) {
        checkCode.className = "code";
        checkCode.innerHTML = code;
    }

}
validateCode = () => {
    let inputCode = document.getElementById("inputCode").value;
    let inputUser = document.getElementById("inputUser").value;

    if (inputUser.length <= 0) {
        alert("E-mail不得為空白！");
    }
    else if (inputCode.length <= 0) {
        alert("驗證碼不得為空白！");
    }
    else if (inputCode.toUpperCase() != code.toUpperCase()) {
        alert("驗證碼錯誤！");
        createCode();
    }
    else {
        alert("正確！")
    }
}