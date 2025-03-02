let numbera = Number(prompt("Nhap vao so a:"));
let numberb = Number(prompt("Nhap vao so b:"));
let pheptinh = prompt("NHap vao phep tinh:+,-,*,/");
if (pheptinh === "+") {
    alert(numbera + numberb);
} else if (pheptinh === "-") {
    alert(numbera - numberb);
} else if (pheptinh === "*") {
    alert(numbera * numberb);
} else if (pheptinh === "/") {
    if (numberb === 0) {
        alert("Khong the chia cho 0");
    } else {
        alert(numbera / numberb);
    }
} else {
    alert("Phep tinh khong hop le");
    }    