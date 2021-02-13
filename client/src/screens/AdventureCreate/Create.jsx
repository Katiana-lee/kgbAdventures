import React, { useState } from 'react'
import './Create.css'
import Layout from '../../components/shared/Layout/Layout'
import { Redirect } from 'react-router-dom'
import { useEffect } from 'react'
import { createAdventure } from '../../services/adventures'

const AdventureCreate = (props) => {

 


  const [adventure, setAdventure] = useState({
    title: '',
    location: '',
    category: [],
    price: '',
    description: '',
    details: ["", "", ""],
    imgURL: ["", "", ""]
  })

  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setAdventure({
            ...adventure,
            [name]: value
    })
  }

  const arrayChange = (event) => {
    const { name, value } = event.target
    setAdventure({
      ...adventure,
      // [name]:value
    })
    adventure.category.push(event.target.value)
  }
  

  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createAdventure(adventure)
    setCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={`/adventures`} />
  }

  return (
    <Layout onChange={props.onChange} user={props.user}>
      <h1 className="create-title">CREATE NEW ADVENTURE</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        
        {/* Title */}
        <label for="input-title">Title:</label>
        <input
          type='text'
          id="input-title"
          className="input-title"
          placeholder='Enter Title'
          value={adventure.title}
          name='title'
          required
          autoFocus
          onChange={handleChange}
        />

        {/* Location */}
        <label for="input-location">Location:</label>
        <input
          id="input-location"
          className="input-location"
          placeholder='Enter Location'
          value={adventure.location}
          name='location'
          required
          onChange={handleChange}
        />

        {/* Category */}
<label for='input-category-1'>Category:</label>
        <select
          id='input-category-1'
          className='input-category-1'
          value={adventure.category}
          name= 'input-category-1'
          required
        onChange={arrayChange}>
            <option value="" disable selection hidden>Select Category</option>
            <option value="Beach">Beach</option>
            <option value="Country Side">Country Side</option>
            <option value="Culture and Heritage">Culture and Heritage</option>
            <option value="Desert">Desert</option>
            <option value="Famous Journeys">Famous Journeys</option>
            <option value="Forest">Forest</option>
            <option value="Mountain">Mountain</option>
            <option value="Other">Other</option>
        </select>

        <label for='input-category-2'>Category:</label>
        <select
          id='input-category-2'
          className='input-category-2'
          value={adventure.category}
          name='input-category-2'
          required
        onChange={arrayChange}>
            <option value="" disable selection hidden>Select Category</option>
            
            <option value="Beach">Beach</option>
            <option value="Country Side">Country Side</option>
            <option value="Culture and Heritage">Culture and Heritage</option>
            <option value="Desert">Desert</option>
            <option value="Famous Journeys">Famous Journeys</option>
            <option value="Forest">Forest</option>
            <option value="Mountain">Mountain</option>
            <option value="Other">Other</option>
        </select>
        
        <label for='input-category-3'>Category:</label>
        <select
          id='input-category-3'
          className='input-category-3'
          value={adventure.category}
          name='input-category-3'
          required
        onChange={arrayChange}>
            <option value="" disable selection hidden>Select Category</option>
            <option value="Beach">Beach</option>
            <option value="Country Side">Country Side</option>
            <option value="Culture and Heritage">Culture and Heritage</option>
            <option value="Desert">Desert</option>
            <option value="Famous Journeys">Famous Journeys</option>
            <option value="Forest">Forest</option>
            <option value="Mountain">Mountain</option>
            <option value="Other">Other</option>
          </select>


        {/* <label for="input-category-1">Category:</label>
        <input
          id="input-category-1"
          className="input-category category-1"
          placeholder='Enter Category'
          value={adventure.category[0]}
          name='category-1'
          required
          onChange={handleChange}
        />
        <input
          className="input-category category-2"
          placeholder='Enter Category'
          value={adventure.category[1]}
          name='category-2'
          onChange={handleChange}
        />
        <input
          className="input-category category-3"
          placeholder='Enter Category'
          value={adventure.category[2]}
          name='category-3'
          onChange={handleChange}
        /> */}

        {/* Description */}
        <label for="input-description">Description:</label>
        <textarea
          id="input-description"
          className="textarea-description"
          rows={5}
          placeholder='Description'
          value={adventure.description}
          name='description'
          required
          onChange={handleChange}
        />

        {/* Pricing */}
        <label for="input-price">Price:</label>
        <input
          id="input-price"
          type='number'
          className="input-price"
          placeholder='Enter Price'
          value={adventure.price.toString()}
          name='price'
          required
          onChange={handleChange}
        />

        {/* Details */}
        <label for="input-details">details:</label>
        <input
          id="input-details"
          className="input-details details-1"
          placeholder='Enter Details'
          value={adventure.details[0]}
          name='details-1'
          required
          onChange={handleChange}
        />
        <input
          className="input-details details-2"
          placeholder='Enter Details'
          value={adventure.details[1]}
          name='details-2'
          onChange={handleChange}
        />
        <input
          className="input-details details-3"
          placeholder='Enter Details'
          value={adventure.details[2]}
          name='details-3'
          onChange={handleChange}
        />

        {/* Images */}
        <label for="input-img">imgs:</label>
        <input
          id="input-img"
          className="input-img imgURL-1"
          placeholder='Enter Image URL'
          value={adventure.imgURL[0]}
          name='imgURL-1'
          required
          onChange={handleChange}
        />
        <input
          className="input-imgs imgURL-2"
          placeholder='Enter Image URL'
          value={adventure.imgURL[1]}
          name='imgURL-2'
          onChange={handleChange}
        />
        <input
          className="input-imgs imgURL-3"
          placeholder='Enter Image URL'
          value={adventure.imgURL[2]}
          name='imgURL-3'
          onChange={handleChange}
        />
        <button type='submit' className="submit-button">Submit</button>
      </form>
    </Layout>
  )
}

export default AdventureCreate;