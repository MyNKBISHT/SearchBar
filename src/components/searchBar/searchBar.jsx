import React from "react";
import "../../styles.css";
import { Form, FormControl, Button, Jumbotron } from "react-bootstrap";

const SearchBar = (props) => {
  return (
    <Jumbotron className="jumbo">
      <Form
        onSubmit={props.handleSubmit}
        className="input-group w-50 mx-auto"
        inline
      >
        <FormControl
          type="text"
          placeholder="Search..."
          value={props.search}
          onChange={props.inputChange}
        />
        {/* <Button variant="btn btn-dark">Search</Button> */}
      </Form>
    </Jumbotron>
  );
};

export default SearchBar;
