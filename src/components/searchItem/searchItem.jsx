import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const Readmore = (props) => {
  const { description } = props;

  const [isTruncated, setIsTruncated] = useState(true);

  const text = description;
  const resultString = isTruncated ? text.slice(0, 250) : text;
  function toggleIsTruncated() {
    setIsTruncated(!isTruncated);
  }
  return (
    <p>
      {resultString}
      {"  "}
      <span onClick={toggleIsTruncated}>
        <Button variant="info" size="sm">
          {isTruncated ? "Read More" : "Read Less"}
        </Button>
      </span>
    </p>
  );
};
const SearchItem = (props) => {
  const { title, unit, frequency, source, description } = props;

  return (
    <Card style={{ marginBottom: "20px" }} className="text-left">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <p>{`${unit}, ${frequency}, ${source}`}</p>
        <Card.Text>
          <Readmore description={description}>{description}</Readmore>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SearchItem;
