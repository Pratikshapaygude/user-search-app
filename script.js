async function getuser() {

    let id = document.getElementById("userid").value;

    document.getElementById("error").innerHTML = "";

    if (id < 1 || id > 10 || id === "") {
        document.getElementById("error").innerHTML =
            "Please enter a valid User ID between 1 and 10";
        return;
    }

    try {

        let url =
            "https://jsonplaceholder.typicode.com/users/" + id;

        let response = await fetch(url);

        let data = await response.json();

        document.getElementById("name").innerHTML =
            "Name: " + data.name;

        document.getElementById("username").innerHTML =
            "Username: " + data.username;

        document.getElementById("email").innerHTML =
            "Email: " + data.email;

        document.getElementById("city").innerHTML =
            "City: " + data.address.city;

    }

    catch (error) {

        document.getElementById("error").innerHTML =
            "Something went wrong. Please try again.";

    }
}

document
    .getElementById("search")
    .addEventListener("click", getuser);
