function process() {
    var n = parseInt(document.getElementById("myList").value);
    var stringtext = document.getElementById("inputtext");
    var encrypttext = document.getElementById("ENC");
    var decrypttext = document.getElementById("DEC");

    stringtext = stringtext.value;
    var stringlength = stringtext.length;
    if (stringtext == "" || stringtext == " ") {
        alert("Please enter a sequence/letter/sentence into the bar.")

    } else {
        document.getElementById("spin").style.visibility = "visible";
        if (encrypttext.checked) {
            encrypt(stringlength, stringtext, n);
        }
        if (decrypttext.checked) {
            decrypt(stringlength, stringtext, n);
        }
    }

}

function Clear() {
    document.getElementById("inputtext").value = "";
    document.getElementById("result").innerHTML = "";
}

function reset() {
    document.getElementById("result").innerHTML = "";
}

function encrypt(stringlength, stringtext, n) {

    setTimeout(function () {
        document.getElementById("spin").style.visibility = "hidden";
        var arr = Array.from(stringtext);
        for (i = 0; i <= stringlength - 1; i++) {
            arr[i] = arr[i].charCodeAt(0) + n;
            arr[i] = String.fromCharCode(arr[i]);
        }
        stringtext = arr.join("");
        document.getElementById("inputtext").value = stringtext;
        document.getElementById("result").innerHTML = stringtext;
    }, 1000)

    //alert("ENCTest completed");
}
//USE JSON
function decrypt(stringlength, stringtext, n) {
    setTimeout(function () {
        document.getElementById("spin").style.visibility = "hidden";
        var arr = Array.from(stringtext);
        for (i = 0; i <= stringlength - 1; i++) {
            arr[i] = arr[i].charCodeAt(0) - n;
            arr[i] = String.fromCharCode(arr[i]);
        }
        stringtext = arr.join("");
        document.getElementById("inputtext").value = stringtext;
        document.getElementById("result").innerHTML = stringtext;
    },1000)

    //alert("DECTest completed");
}
