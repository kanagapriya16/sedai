import React from 'react'

export const CustomButton = ({ onClick, style, label }) => {
    return (
      <button
        onClick={onClick}
        style={{
          ...style,
          width: "100%",
          maxWidth: "130px",
          height: "100%",
          maxHeight: "45px",
          fontSize: "13px",
          fontWeight: "bold",
          borderRadius: "25px",
          margin: "0 auto",
          backgroundColor: "transparent",
          color: "white",
          borderColor: "white",
          cursor: "pointer",
          marginLeft:'-42%',
          marginTop:'2%'
        }}
      >
        {label}
      </button>
    );
  };