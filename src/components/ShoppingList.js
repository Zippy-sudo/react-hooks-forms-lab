import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSearch, setSelectedSearch] = useState("");



  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  const handleSearchChange = (event) =>  {
    setSelectedSearch(event.target.value);
  }

  function onItemFormSubmit(Obj) {
    console.log(Obj)
    setItems([...items, Obj])
  }

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
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
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
