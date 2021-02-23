import React, { useState } from "react";

export default function AnimalArray(props) {
  let index = 0;
  return (
    <ul>
      {props.animals.map((animal) => {
        index++;
        return (
          <li>
            Awesomeness level{index}: {animal}
          </li>
        );
      })}
    </ul>
  );
}
