const BASE_URL = "http://YOUR-ALB-DNS";

async function getUsers() {
    try {
        const response = await fetch(`${BASE_URL}/users`);
        const data = await response.text();

        document.getElementById("output").innerHTML =
            `<strong>/users:</strong> ${data}`;
    } catch (error) {
        document.getElementById("output").innerHTML =
            "Error fetching users";
    }
}

async function authenticate() {
    try {
        const response = await fetch(`${BASE_URL}/auth`);
        const data = await response.text();

        document.getElementById("output").innerHTML =
            `<strong>/auth:</strong> ${data}`;
    } catch (error) {
        document.getElementById("output").innerHTML =
            "Authentication failed";
    }
}
