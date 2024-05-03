import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [helloworld, setHelloWorld] = useState(null);
  const [count, setCount] = useState(null);

  useEffect(() => {
    // Define the endpoint URL of your Express backend
    const apiUrl = "http://localhost:3000/";

    // Make a GET request to the backend endpoint
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle successful response
        setHelloWorld(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data:", error);
      });
  }, []);

  function handleIncrement() {
    // Define the endpoint URL of your Express backend
    const apiUrl = "http://localhost:3000/count";

    // Make a GET request to the backend endpoint
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle successful response
        console.log(response);
        setCount(response.data.count);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data:", error);
      });
  }

  return (
    <div>
      <div>On mount API call to "/": {helloworld}</div>
      <div>Count stored in mongodb: {count}</div>
      <button onClick={handleIncrement}>Increment count</button>
    </div>
  );
}

export default App;
