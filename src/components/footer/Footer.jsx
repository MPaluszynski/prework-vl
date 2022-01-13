import "./footer-styles.css";
import { Tile } from "../_reusableComponents/tile/Tile";

export const Footer = () => {
  return (
    <div className="footer">
      <Tile
        text={"<"}
        background={"#ffffff"}
        border={"1px solid #bac6d8"}
        shadow={"0px 2px 4px #dde3ec"}
      />
      <Tile
        text={"1"}
        background={"#ffffff"}
        border={"1px solid #bac6d8"}
        shadow={"0px 2px 4px #dde3ec"}
      />
      <Tile
        text={"2"}
        background={"#ffffff"}
        border={"1px solid #bac6d8"}
        shadow={"0px 2px 4px #dde3ec"}
      />
      <Tile
        text={"3"}
        background={"#ffffff"}
        border={"1px solid #bac6d8"}
        shadow={"0px 2px 4px #dde3ec"}
      />
      <Tile text={"..."} background={"transparent"} border={"none"} />
      <Tile
        text={"23"}
        background={"#ffffff"}
        border={"1px solid #bac6d8"}
        shadow={"0px 2px 4px #dde3ec"}
      />
      <Tile
        text={"24"}
        background={"#ffffff"}
        border={"1px solid #bac6d8"}
        shadow={"0px 2px 4px #dde3ec"}
      />
      <Tile
        text={"25"}
        background={"#ffffff"}
        border={"1px solid #bac6d8"}
        shadow={"0px 2px 4px #dde3ec"}
      />
      <Tile
        text={">"}
        background={"#ffffff"}
        border={"1px solid #bac6d8"}
        shadow={"0px 2px 4px #dde3ec"}
      />
    </div>
  );
};
