// import "./styles.css";

let button = document.getElementById("submit-data");
let empty = document.getElementById("empty-table");

function submit() {
    let user = document.getElementById("input-username");
    let email = document.getElementById("input-email");
    let address = document.getElementById("input-address");
    let admin = document.getElementById("input-admin");
    let tbo = document.getElementById("tbo");
    let tr = tbo.getElementsByTagName("tr");

    if (admin.checked) {
        admin = "X";
    } else {
        admin = "-";
    }
    let n = 0;
    for (let i = 0; i < tr.length; i++) {
        let cols = tr[i].getElementsByTagName("td");
        if (cols[0].innerText === user.value) {
            n += 1;
            cols[1].innerText = email.value;
            cols[2].innerText = address.value;
            cols[3].innerText = admin;
        }
    }
    if (n == 0) {
        /*
		
		let td1 = document.createElement("td");
		td1.innerText = user.value;
		let td2 = document.createElement("td");
		td2.innerText = email.value;
		let td3 = document.createElement("td");
		td3.innerText = address.value;
		let td4 = document.createElement("td");
		td4.innerText = admin.value;
		line.appendChild(td1, td2, td3, td4); 
		
		*/

        let line = document.createElement("tr");
        line.innerHTML =
            "<td>" +
            user.value +
            "</td><td>" +
            email.value +
            "</td><td>" +
            address.value +
            "</td><td>" +
            admin +
            "</td>";
        tbo.appendChild(line);
    }
}

button.onclick = function() {
    submit();
};

function empty_f() {
    let tr = document.getElementsByTagName("tr");
    for (let i = tr.length - 1; i > 0; i--) {
        tr[i].remove();
    }
}

empty.onclick = function() {
    empty_f();
};