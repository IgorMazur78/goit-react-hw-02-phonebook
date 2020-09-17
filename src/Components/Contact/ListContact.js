import React from "react";

import style from "./Listcontact.module.css"


export default function ListContact({ contact, onDeleteContact }) {
  return (
    <ul>
      {contact.map((e) => (
        <li key={e.id}><span>{e.name}:{e.number}</span>
          
          <button className = {style.buttonDeleteContact} onClick={() => onDeleteContact(e.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
