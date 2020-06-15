import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { Box } from "reflexbox";
import Fuse from "fuse.js";

import Palette from "../components/Palette";
import { Input } from "../components/common";
import srcPalettes from "../palettes";

const Home: NextPage = () => {
  const fuse = new Fuse(Object.values(srcPalettes), {
    keys: ["name", "keywords"],
    findAllMatches: true,
    threshold: 0.2,
  });
  const [query, setQuery] = useState<string>("");
  const [palettes, setPalettes] = useState(srcPalettes);

  useEffect(() => {
    if (query.length > 1) {
      const obj = {};
      fuse.search(query).forEach((palette) => {
        obj[palette.item.name] = { ...palette.item };
      });
      setPalettes(obj);
    } else {
      setPalettes(srcPalettes);
    }
  }, [query]);

  return (
    <>
      <Box mb={"24px"}>
        <Input
          placeholder="Search Palette..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Box>
      <Box>
        <div>
          {Object.entries(palettes).map(([id, { name, colors, keywords }]) => (
            <Palette key={id} name={name} colors={colors} keywords={keywords} />
          ))}
        </div>
      </Box>
    </>
  );
};

export default Home;
