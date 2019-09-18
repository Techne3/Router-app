import React,{useState,useEffect} from 'react';
import './App.css';
import { async } from 'q';

function Shop() {
    // Authorization: {2b76fa6034b5ae8c1776c9ffd8fffdf4}

    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] = useState('')

    const fetchItems = async () => {
        const data = await fetch(`https://api.nasa.gov/planetary/apod?api_key=sMGWmRK9MQVySW3QZONHif1KPJyhrZxswS6KyfjM`);
        // console.log(data)


        const items = await data.json();
        console.log(items)
        setItems(items)
    }

    


  return (
    <div>
      <h1>{items.explanation}</h1>
    </div>
  );
}

export default Shop;