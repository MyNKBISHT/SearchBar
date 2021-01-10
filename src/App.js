import React, { useState, useEffect } from "react";
import "./styles.css";
import SearchBar from "./components/searchBar/searchBar";
import SearchGrid from "./components/searchGrid/searchGrid";
import { Container } from "react-bootstrap";
import Axios from "axios";

export default function App() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const inputChange = (e) => {
    setSearch(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const searchData = async () => {
      const result = await Axios.get(`https://d6ozi.sse.codesandbox.io/`, {
        header: {
          "Access-Control-Allow-Origin": "*"
        }
      });

      const response = result.data.data.filter((val) => {
        if (search === "") {
          return val;
        } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
          return val;
        }
      });
      console.log(response);
      setResult(response);
    };
    searchData();
  }, [search]);

  return (
    <div className="App">
      <SearchBar
        search={search}
        inputChange={inputChange}
        handelSubmit={handelSubmit}
      />
      <Container>
        <SearchGrid result={result} />
      </Container>
    </div>
  );
}
