import React from "react";
import logo from "../../assets/images/logo-full.svg";
export default function Header({ text, title }) {
  return (
    <header className="colMd5 col textCenter">
      <Logo />
      <Title title={title} text={text}/>
    </header>
  );
}

export function Logo() {
  return <img src={logo} alt="logo" style={{margin:"20px auto"}} />;
}

function Title({ text , title }) {
  return (
    <>
      <h2 className="fontBold textXxxl" style={{ marginTop: "2rem" }}>
        {title}
      </h2>
      <p className="fontRegular textSm">{text}</p>
    </>
  );
}
