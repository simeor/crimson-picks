import React from "react";
import ItemTileStyle from "./ItemTileStyle.module.css";
import FadeIn from "react-fade-in";
import { TileData } from "@/pages";

type ItemTileProps = {
  data: TileData;
  index: number;
};

const ItemTile = ({ data, index }: ItemTileProps) => {
  const {
    type = "",
    name = "",
    author = "",
    titleOne = "",
    titleTwo = "",
    titleThree = "",
    titleFour = "",
    link = "",
  } = data;

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div
        className={`${ItemTileStyle[`tileContainer${type}`]} ${
          ItemTileStyle.tileContainer
        }`}
      >
        <div className={ItemTileStyle.tileGridRows}>
          <div className={ItemTileStyle.tileGridColumns}>
            <div>
              <h3 className={ItemTileStyle.secondaryText}>{type}</h3>
            </div>
            <div>
              <FadeIn delay={500 + index * 300} transitionDuration={1000}>
                <h1>{author}</h1>
              </FadeIn>
            </div>
          </div>
          <div className={ItemTileStyle.tileGridColumns}>
            <div></div>
            <div>
              <h2 className={ItemTileStyle.secondaryText}>{name}</h2>
            </div>
          </div>
          <div className={ItemTileStyle.tileGridColumns}>
            <div className={ItemTileStyle.flexEndRow}>
              <div>
                <h3>{titleOne}</h3>
                <h3>{titleTwo}</h3>
              </div>
            </div>
            <div>
              <h3>{titleThree}</h3>
              <h3>{titleFour}</h3>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ItemTile;
