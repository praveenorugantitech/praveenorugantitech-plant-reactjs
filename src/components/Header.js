import React, { useState, useEffect } from "react";

const Header = ({ setPlants, setLoading }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetchData("plum");
  }, []);

  const fetchData = (searchData) => {
    setLoading(true);
    fetch(
      `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants/search?token=${process.env.REACT_APP_APIKEY}&q=${searchData}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPlants(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      setLoading(true);
      fetchData(search);
    }
  };
  return (
    <header>
      <nav>
        <h1 className="title">Plants</h1>
      </nav>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={search}
          className="search"
          type="search"
          placeholder="Search..."
        />
      </form>
    </header>
  );
};

export default Header;
