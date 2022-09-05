import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function AddressLabel({ address }) {
  console.log(address);
  return (
    <div>
      <h1>{address.name}</h1>
      <p>{address.street}</p>
      <p>{address.city}</p>
    </div>
  );
}

function Envelope({ toPerson, fromPerson }) {
  return (
    <div className="envelope">
      <div className="toPerson">
        <AddressLabel address={person} />
        <div className="stamp">
          <p>
            <strong>STAMP</strong>
          </p>
        </div>
      </div>
      <div className="forPerson">
        <AddressLabel address={person} />
      </div>
    </div>
  );
}

var person = {
  name: "Temiloluwa Onaleye",
  street: "18, Harmony Estate",
  city: "Ibadan, Nigeria.",
};

ReactDOM.render(<Envelope />, document.querySelector("#root"));
