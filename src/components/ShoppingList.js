import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSearch, setSelectedSearch] = useState("");
  const [name, setName] = useState("");
  const [category, setFormCategory] = useState("Produce");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSelectedSearch(event.target.value);
  }

  function onItemFormSubmit(newObj) {
    setItems([...items, newObj])
  }

  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handleFormCategoryChange(event) {
    setFormCategory(event.target.value)
  }
  console.log(category)

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && selectedSearch === "") {
      return true;
    } else if (selectedCategory === "All" && selectedSearch !== "") {
      return item.name.includes(selectedSearch);
    } else
      return item.category.includes(selectedCategory);
  });

  console.log(itemsToDisplay);
  return (
    <div className="ShoppingList">
      <ItemForm name={name} category={category} handleFormCategoryChange={handleFormCategoryChange} handleNameChange={handleNameChange} onItemFormSubmit={onItemFormSubmit} items={items} setItems={setItems}/>
      <Filter search={selectedSearch} onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
