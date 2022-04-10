import React from "react";

export const Header = (props) => {
    console.log("props");
   return( <div className="h2 text-center bg-success">
        Hello {props.name} nickname is {props.nickname} salry is {props.income}
        {props.children}
    </div>)
};

