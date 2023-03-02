import React from "react";
import "./ClientLayout.scss";

export function ClientLayout(props) {
  const { children } = props;
  return (
    <div>
      <h2>ClientLayout</h2>
      {children}
    </div>
  );
}
