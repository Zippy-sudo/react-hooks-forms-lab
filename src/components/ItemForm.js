import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({name, category, setName, setFormCategory, onItemFormSubmit }) {

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleFormCategoryChange = (event) => {
    setFormCategory(event.target.value)
  }

  return (
    <form className="NewItem" onSubmit={(event) => {
      event.preventDefault()
      const newObj = {
        id: uuid(),
        name: name,
        category: category
      }
      onItemFormSubmit(newObj)
      }}>
      <label>
        Name:
        <input type="text" name="name" placeholder="Name..." value={name} onChange={(event) => handleNameChange(event)} />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={(event) => handleFormCategoryChange(event)}>
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
