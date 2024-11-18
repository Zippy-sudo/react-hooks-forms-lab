import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [name, setName] = useState("");
  const [category, setFormCategory] = useState("Produce");


  return (
    <form className="NewItem" onSubmit={(event) => {
      let id = uuidv4()
      console.log(name, category, id)
      event.preventDefault();
      onItemFormSubmit({id, name, category})
    }}
    >
      <label>
        Name:
        <input type="text" name="name" placeholder="Name..." value={name} onChange={(event) => setName(event.target.value)} />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={(event) => setFormCategory(event.target.value)}>
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
