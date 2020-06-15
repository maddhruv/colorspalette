import React from "react";
import { NextPage } from "next";

import Palette from "../components/Palette";
import palettes from "../palettes";

const Home: NextPage = () => {
  return (
    <div>
      {Object.entries(palettes).map(([id, { name, colors, keywords }]) => (
        <Palette key={id} name={name} colors={colors} keywords={keywords} />
      ))}
    </div>
  );
};

export default Home;
