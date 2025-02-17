import { useState, useEffect } from "react";

export const Feature = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setItems(data.slice(0, 6))) // Tomamos solo 6 elementos
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="feature-container">
      <hr />
      <div className="grid-container">
        {items.map((item, index) => (
          <div key={index} className="grid-item">
            <img
              src={`https://i.pravatar.cc/80?img=${index + 7}`}
              alt={item.name}
              className="avatar"
            />
            <div className="text-content">
              <h3>{item.name}</h3>
              <p>{item.company.catchPhrase}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
