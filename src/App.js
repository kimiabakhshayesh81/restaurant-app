import React, { useState } from "react";
import menus from "./datas";
import Categories from "./Component/Categories";
import './App.css'
import Menu from "./Component/Menu";

const allCategories = ['all',...new Set (menus.map(menu => menu.category))]

function App() {

  console.log(allCategories)
  const [allMenus , setAllMenus] = useState(menus)
  const [categories , setCategories] = useState(allCategories)

  const filterMenus = (category) => {
    if(category === 'all'){
      setAllMenus(menus)
      return
    }
    let filteredMenus = menus.filter(menu => menu.category ===category)
    setAllMenus(filteredMenus)
  }

  return(
    <main>
      <section className='menu section'>
        <div className = 'title'>
          <h2>our menu</h2>
          <div className ='underline'></div>
        </div>
        <Categories categories={categories} filterMenus={filterMenus}/>
        <Menu allMenus={allMenus}/>
      </section>
    </main>
  )
}

export default App;
