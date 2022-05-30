import { Button, Input, Modal, ModalBody, Radio, RadioGroup, Select } from "@chakra-ui/react";
import React, { useState } from "react";


const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
  const[show,setShow]=useState(true)




  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={()=>setShow(!show)}>Add Product</Button>
      <Modal>
        <ModalBody pb={6}>
          <label htmlFor="">Title</label>
          <Input data-cy="add-product-title" />
          <label htmlFor="">Category</label>
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pent</option>
            <option data-cy="add-product-category-jeans">Jeanc</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Fenale</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <label htmlFor="">price</label>
          <Input data-cy="add-product-price" placeholder="Rs Price"/>
          <Button data-cy="add-product-submit-button" onClick={()=>setShow(show)}>Create</Button>
        </ModalBody>
      </Modal>

    </>
  );
};

export default AddProduct;
