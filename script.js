function saveReservation() {
    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("address", document.getElementById("address").value);
    localStorage.setItem("age", document.getElementById("age").value);
    localStorage.setItem("contact", document.getElementById("contact").value);
    localStorage.setItem("day", document.getElementById("day").value);
    localStorage.setItem("time", document.getElementById("time").value);
    localStorage.setItem("membership", document.getElementById("membership").value);
}

function chooseTrainer(trainer) {
    localStorage.setItem("trainer", trainer);
}

window.onload = function () {

    // load confirmation data
    if (document.getElementById("cName")) {

        document.getElementById("cName").textContent = "Name: " + localStorage.getItem("name");
        document.getElementById("cAddress").textContent = "Address: " + localStorage.getItem("address");
        document.getElementById("cAge").textContent = "Age: " + localStorage.getItem("age");
        document.getElementById("cContact").textContent = "Contact: " + localStorage.getItem("contact");

        document.getElementById("cDay").textContent = "Day: " + localStorage.getItem("day");
        document.getElementById("cTime").textContent = "Time: " + localStorage.getItem("time");

        document.getElementById("cMembership").textContent = "Membership: " + localStorage.getItem("membership");

        document.getElementById("cTrainer").textContent = "Trainer: " + localStorage.getItem("trainer");
    }
}
