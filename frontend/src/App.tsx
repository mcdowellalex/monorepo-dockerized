import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Define the endpoint URL of your Express backend
    const apiUrl = "http://localhost:3000/";

    // Make a GET request to the backend endpoint
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle successful response
        setData(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data:", error);
      });
  }, []);

  return <div>{data}</div>;
}

export default App;
