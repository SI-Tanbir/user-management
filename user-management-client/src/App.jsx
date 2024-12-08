import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((e) => setUser(e))
      .catch((error) => console.error("error :", error));
  }, []);
  // console.log(user)

  const handleUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const createUser = { name, email };
    console.log("app.jsx data", createUser);
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const newUser = [...user, data];
        setUser(newUser);

        e.target.reset();
      });
  };

  return (
    <>
      <h3> length of {user.length} </h3>

      <form onSubmit={handleUser}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="submit" value="Add to Click" />
      </form>

      {user.map((res) => (
        <p key={res.id}>
          {res.id} {res.name} {res.email}
        </p>
      ))}
    </>
  );
}

export default App;
