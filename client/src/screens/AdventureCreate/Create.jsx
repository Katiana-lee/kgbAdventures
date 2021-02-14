import React, { useState } from 'react'
import './Create.css'
import Layout from '../../components/shared/Layout/Layout'
import { Redirect } from 'react-router-dom'
import { useEffect } from 'react'
import { createAdventure } from '../../services/adventures'

const AdventureCreate = (props) => {
  const [d, setD] = useState({
    detail1: '',
    detail2: '',
    detail3: '',
  })

  const [images, setImages] = useState({
    image1: '',
    image2: '',
    image3: '',
  })
  
  
 


  const [adventure, setAdventure] = useState({
    title: '',
    location: '',
    category: [],
    price: '',
    description: '',
    details: [],
    imgURL: []
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



  const detailsChange = (event) => {
    const { name, value } = event.target
    setD({
      ...d,
      [name]:value
    })
  }

  const imagesChange = (event) => {
    const { name, value } = event.target
    setImages({
      ...images,
      [name]:value
    })
  }
  
  

  const handleSubmit = async (event) => {
    event.preventDefault()
    let imagesToAdd = [images.image1,images.image2,images.image3]
    let detailsToAdd = [d.detail1,d.detail2,d.detail3]
    setAdventure({
      ...adventure,
      details: detailsToAdd,
      imgURL: imagesToAdd
})
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
          // required
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
          // required
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
          // required
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
          type='text'
          id="input-details-1"
          className="input-details details-1"
          placeholder='Enter Details'
          value={d.detail1}
          name='detail1'
          required
          onChange={detailsChange}
        />


        <input
          id='input-details-2'
          className="input-details details-2"
          placeholder='Enter Details'
          value={d.detail2}
          name='detail2'
          required
          onChange={detailsChange}
        />
        <input
          id='input-details-3'
          className="input-details details-3"
          placeholder='Enter Details'
          value={d.detail3}
          name='detail3'
          required
          onChange={detailsChange}
        />

        {/* Images */}
        <label for="input-images">details:</label>
        <input
          type='text'
          id="input-images-1"
          className="input-images images-1"
          placeholder='Enter Images'
          value={images.imgage1}
          name='image1'
          required
          onChange={imagesChange}
        />


<input
          type='text'
          id="input-images-2"
          className="input-images images-2"
          placeholder='Enter Images'
          value={images.imgage2}
          name='image2'
          required
          onChange={imagesChange}
        />
<input
          type='text'
          id="input-images-3"
          className="input-images images-3"
          placeholder='Enter Images'
          value={images.imgage3}
          name='image3'
          required
          onChange={imagesChange}
        />


        
        <button type='submit' className="submit-button">Submit</button>
      </form>
    </Layout>
  )
}

export default AdventureCreate;