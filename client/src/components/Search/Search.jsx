import React from 'react'
import './Search.css'

const Search = (props) => {
  return (
    <div className="search-container">
      <section className='search'>
      <form className="search-input" onSubmit={(e) => props.onSubmit(e)}>
      <i className="fa fa-search"></i>
            <input
                id="search-input"
                value={props.value}
                onChange={(e) => props.onChange(e)}
<<<<<<< HEAD
          name="Search"
=======
                name="search"
                placeholder="search"
>>>>>>> 45641f5ea8ff768418554e438f40f829b36d5498
                type="text"
                autoFocus
            />
      </form>
      </section>
      </div>
    )
}

export default Search