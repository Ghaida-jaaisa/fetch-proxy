async function fetchAPI() {
  try {
    let response = await fetch("http://localhost:3000/proxy");
    let data = await response.json();
    console.log("DATA:", data);
  } catch (err) {
    console.log("ERROR:", err);
  }
}

fetchAPI();
