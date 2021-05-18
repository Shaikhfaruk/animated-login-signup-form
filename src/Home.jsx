import React from "react";
import "./styles.css";
import doremon from "./doremon.png";

const Home = () => {
  let style = { "--i": 1 };
  let style2 = { "--i": 2 };
  let style3 = { "--i": 3 };
  let style4 = { "--i": 4 };
  return (
    <>
      <div className="gradient-border">
        <div className="profile">
          <img src={doremon} alt="hello doremon" className="doremon" />
          <h2 id="nobita">
            Hello <span className="highlight">Nobita</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            fugiat voluptates labore amet veniam eius laboriosam perferendis
            quaerat, vero similique delectus iusto, asperiores officia enim id
            nisi aperiam reprehenderit voluptas.
          </p>
        </div>
      </div>
      <div>
        <div className="glowing">
          <span style={style}></span>
          <span style={style2}></span>
          <span style={style3}></span>
        </div>
        <div className="glowing">
          <span style={style}></span>
          <span style={style2}></span>
          <span style={style3}></span>
        </div>
        <div className="glowing">
          <span style={style}></span>
          <span style={style2}></span>
          <span style={style3}></span>
        </div>
        <div className="glowing">
          <span style={style}></span>
          <span style={style2}></span>
          <span style={style3}></span>
        </div>
        <div className="glowing">
          <span style={style}></span>
          <span style={style2}></span>
          <span style={style3}></span>
        </div>
        <div className="glowing">
          <span style={style}></span>
          <span style={style2}></span>
          <span style={style3}></span>
        </div>
        <div className="glowing">
          <span style={style}></span>
          <span style={style2}></span>
          <span style={style3}></span>
        </div>
        <div className="glowing">
          <span style={style}></span>
          <span style={style2}></span>
          <span style={style3}></span>
        </div>
        <div className="glowing">
          <span style={style}></span>
          <span style={style2}></span>
          <span style={style3}></span>
        </div>
        <div className="glowing">
          <span style={style}></span>
          <span style={style2}></span>
          <span style={style3}></span>
        </div>
        <div className="glowing">
          <span style={style}></span>
          <span style={style2}></span>
          <span style={style3}></span>
        </div>
      </div>
    </>
  );
};
export default Home;
