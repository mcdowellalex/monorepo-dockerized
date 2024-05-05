import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function handleIncrement() {
    axios
      .get("http://localhost:3000/count")
      .then((response) => {
        setCount(response.data.count);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data:", error);
      });
  }

  return (
    <div>
      <div>On mount API call to "/users"</div>
      <ul>
        {users
          ? users.map((user) => {
              return (
                <div style={{ marginBottom: "5px" }}>
                  <div>username: {user.username}</div>
                  <div>email: {user.email}</div>
                </div>
              );
            })
          : null}
      </ul>
      <div>Count stored in mongodb: {count}</div>
      <button onClick={handleIncrement}>Increment count</button>
    </div>
  );
}

export default App;
