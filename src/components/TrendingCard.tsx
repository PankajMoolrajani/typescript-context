// import stuff from react library
import React from "react";

const TrendingCard: React.FC = () => {
  // state variable and setter functions
  let trendingTickrs = [
    { id: "8", name: "Google Inc", symbol: "GOOGL" },
    { id: "9", name: "Meta Inc", symbol: "FB" }
  ];

  // functions
  // let
  return (
    <div>
      <h1>Trending Tickrs</h1>
      {trendingTickrs.map((item) => {
        return <div>{item.name}</div>;
      })}
    </div>
  );
};

export default TrendingCard;
