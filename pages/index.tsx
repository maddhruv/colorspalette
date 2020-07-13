import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { Box } from "reflexbox";
import Fuse from "fuse.js";
import { FixedSizeList as List } from "react-window";

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

  const Row = ({ index, style }) => {
    const item = Object.entries(palettes)[index];
    const [id, { name, colors, keywords }] = item;
    return (
      <div style={style}>
        <Palette
          key={id}
          identifier={id}
          name={name}
          colors={colors}
          keywords={keywords}
          handleKeyword={(keyword) => setQuery(keyword)}
          source="homepage"
        />
      </div>
    );
  };

  return (
    <>
      <Box mb={"24px"}>
        <Input
          placeholder="Search Palettes..."
          value={query}
          type="search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </Box>
      <Box>
        <div>
          <List
            height={800}
            itemCount={Object.entries(palettes).length}
            itemSize={200}
            width="100%"
          >
            {Row}
          </List>
        </div>
      </Box>
    </>
  );
};

export default Home;
