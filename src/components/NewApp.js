import React, {useState} from 'react'

function NewApp() {

function sayHi(event) {
  console.log(event.target)
}
  
    return <button onClick={sayHi}>Add</button>;
  }

export default NewApp