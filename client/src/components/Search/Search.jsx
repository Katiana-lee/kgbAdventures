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
          name="Search"
                type="text"
                autoFocus
            />
      </form>
      </section>
      </div>
    )
}

export default Search