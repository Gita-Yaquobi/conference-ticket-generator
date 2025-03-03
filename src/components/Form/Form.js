import React from "react";
export default function Form({children , onSubmit}) {
  return <form className="colMd3 col form" onSubmit={onSubmit}>
    {children}
  </form>;
}
