import React, { useEffect, useState } from "react";
import { Stack,Image,Text,TagLabel,Tag,Heading,Box } from "@chakra-ui/react";
import axios from "axios";
// import styels from "./style.module.css"


const Product = ({page,list}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
const[data,setData]=useState([])


useEffect(()=>{ getList()},[])

function getList(){
  axios.get(`http://localhost:8080/products`)
  .then((r)=>{setData(r.data)
    console.log(r)
    // setTotalCount(Number(r.headers["x-total-count"]));
  
  })
}
console.log(data)

  return (
    <>
    {data.map((item)=>(
    <Stack data-cy="product" >
      <Image data-cy="product-image" src={item.imageSrc}/>
      <Text data-cy="product-category">{item.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{item.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{item.title}</Heading>
      <Box data-cy="product-price">{item.price}</Box>
    </Stack>
    ))}
    </>
  );
};

export default Product;
