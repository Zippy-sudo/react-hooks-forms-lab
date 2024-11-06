import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSearch, setSelectedSearch] = useState("");
  const [name, setName] = useState("");
  const [category, setFormCategory] = useState("Produce");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  const handleSearchChange = (event) =>  {
    setSelectedSearch(event.target.value);
  }

  const onItemFormSubmit = (newObj) => {
    console.log(newObj);
    setItems([...items, newObj])
    setName("")
    setFormCategory("Produce")
  }
  console.log(name,category)

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && selectedSearch === "") {
      return true;
    } else if (selectedCategory === "All" && selectedSearch !== "") {
      return item.name.includes(selectedSearch);
    } else
      return item.category.includes(selectedCategory);
  });

  return (
    <div className="ShoppingList">
      <ItemForm name={name} category={category} setName={setName} setFormCategory={setFormCategory} onItemFormSubmit={onItemFormSubmit}/>
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
