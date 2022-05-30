import React , { useState }from "react";
import AddProduct from "./AddProduct";
import Product from "./Product"
import Pagination from "./Pagination"
import { Flex, Grid } from "@chakra-ui/react";
import styles from "./style.module.css"

const Products = () => {
  const[page,setPage]=useState('')
  const[list,setList]=useState("")

  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

  let checkpage=(p)=>{
    setPage(p)
    console.log(p)
  }
  let checklist=(li)=>{
    setList(li)
    console.log(li)

  }

  return (
    <>
    <Flex>
      
      <AddProduct/>
      </Flex>

      <Grid className={styles.GridData}>
      <Product page={page} list={list}/>
      </Grid>
      
      <Pagination page={page}checkpage={checkpage} checklist={checklist}/>
    </>
  );
};

export default Products;
