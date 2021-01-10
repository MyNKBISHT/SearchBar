import React from "react";
import SearchItem from "../searchItem/searchItem";

const Recipes = (props) => {
  const { result } = props;
  return (
    <div>
      {result.map((res, index) => (
        <SearchItem
          key={index}
          title={res.title}
          unit={res.unit}
          frequency={res.frequency}
          source={res.source}
          description={res.description}
        />
      ))}
    </div>
  );
};

export default Recipes;
