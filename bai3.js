let accout = ( prompt("moi nhap tai khoan") )
if (accout == "ADMIN") {
    let password = ( prompt("moi nhap mat khau") )
    if (password == "TheMaster") {
        alert("Welcome")
    }else if (password == "") {
        alert("Cancelled")
    } else {
        alert("Wrong password")
    }
}else if (accout == "") {
    alert("Cancelled")
} else {
    alert("I don't know you")
}
