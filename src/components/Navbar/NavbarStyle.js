import styled from "styled-components";

const customStyles = {
  container: (base, state) => ({
    ...base,
    marginLeft: "2rem",
    marginTop: "auto",
    marginBottom: "auto",
    // padding: "0rem",
    // height: "80px",
    // width: "180px",
    // border: "solid blue"
  }),
  control: (base, state) => ({
    ...base,
    height: "40px",
    width: "180px",
    padding: "0rem",
    // marginTop: "1rem",
    // border: "solid red",
    boxShadow: "0px 0px 3px"
    // border: "solid"
  }),
  valueContainer: (base, state) => ({
    ...base,
    // border: "solid 2px gray",
    padding: "0",
    margin: "0",
    textAlign: "left",
    fontSize: "18px"
  }),
  singleValue: (base) => ({
    ...base,
    // border: "solid",
    color: 'dimgray',
    margin: "0rem",
    textAlign: "left",
    // height: "30px",
    paddingTop: "auto",
    paddingBottom: "auto",
    paddingLeft: "0.3rem"
    
    // display: 'flex',
  }),
  placeholder: (base) => ({
    ...base,
    textAlign: "left",
    paddingLeft: "0.3rem"
    // border: "solid"
  }),
  
  option: (base, state) => ({
    ...base,
    border: `solid 0.5px darkgray`,
    height: '40px',
    fontSize: '18px',
    paddingTop: "auto",
    paddingBottom: "auto",
    paddingLeft: "0rem",
    color: state.isFocused ? "white" : "dimgray",
    backgroundColor: state.isFocused ? "#0066FF" : "white",

  }),
};

export { customStyles }