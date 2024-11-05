import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ name, category, handleNameChange, handleFormCategoryChange, onItemFormSubmit }) {

  return (
    <form className="NewItem" onSubmit={(event) => {
      event.preventDefault();
      onItemFormSubmit({ id:uuid(), name, category});
      }}>
      <label>
        Name:
        <input type="text" name="name" placeholder="Name..." value={name} onChange={(event) => handleNameChange(event)} />
      </label>

      <label>
        Category:
        <select name="category" onChange={(event) => handleFormCategoryChange(event)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
