# Fetch proxy

## Introduction
While developing a project using JavaScript and `fetch`, I encountered a **CORS (Cross-Origin Resource Sharing)** issue when trying to fetch data from the external API:
https://www.amanabootcamp.org/api/fs-classwork-data/amana-transportation



Although the API works perfectly in Postman, the browser blocked the request because it is considered a **cross-origin request**.

---

## Solution
To bypass the CORS restriction, I created a **local Proxy server using Node.js and Express**.

The Proxy works as follows:
- Receives requests from the Front-End
- Sends the request to the external server (`amana server`)
- Returns the data to the Front-End without browser restrictions

This allows using `fetch` in the browser without any CORS issues.

---

## How to Use

1. Clone the repository:

```bash
git clone https://github.com/USERNAME/fetch-proxy.git
cd fetch-proxy
```

2.Install dependencies:

```
npm install
```

3. Run the Proxy server:

```
node proxy.js
```

The server will run at:

http://localhost:3000/proxy


4. Update your Front-End (main.js) to use the Proxy:

```js
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
```

### Notes

This solution is intended for development and learning purposes.
In production, it's recommended to configure the external server to allow CORS officially.
