import React from 'react';

function MyButton(props: { onClick: () => void, text: string }) {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default MyButton;
