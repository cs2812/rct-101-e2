import { Button, ButtonGroup, Select } from "@chakra-ui/react";
import React,{useState} from "react";


const Pagination = ({checkpage,checklist}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;
const[p,sP]=useState(1)
const[li,setLi]=useState("")

let first=()=>{
  sP(1)
  checkpage(p)

}
let privious=()=>{
  sP(p-1)
  checkpage(p)
}
let select=(e)=>{
  setLi(e.target.value)
  checklist(li)
}
let next=()=>{
  sP(p+1)
  checkpage(p)
}
let last=()=>{
  sP(9)
  checkpage(p)
}


  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button"onClick={first}> First</Button>
      <Button data-cy="pagination-previous-button" onClick={privious}>Privious</Button>
      <Select data-cy="pagination-limit-select" onChange={select}>
        <option data-cy="pagination-limit-3" value="3">3</option>
        <option data-cy="pagination-limit-6" value="6">6</option>
        <option data-cy="pagination-limit-9" value="9">9</option>
        
      </Select>
      <Button data-cy="pagination-next-button" disable onClick={next}>Next</Button>
      <Button data-cy="pagination-last-button" onClick={last}>Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
