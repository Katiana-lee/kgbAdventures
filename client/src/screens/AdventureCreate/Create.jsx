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
    let detailsToAdd = [d.detail1, d.detail2, d.detail3]
    adventure.imgURL.push(...imagesToAdd)
    adventure.details.push(...detailsToAdd)
    setAdventure({
      ...adventure,
      
       
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
      <div className=''>
      <form className="create-form" onSubmit={handleSubmit}>
        
        {/* Title */}
        <label className="label" for="input-title">Title:</label>
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
        <label className="label" for="input-location">Location:</label>
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
          <div className="cat-buttons">
            <div className="cat-pairs">
              <label for="beach">Beach</label> {"\n"}
              <input type='checkbox'  id='option1' name='beach' value="Beach" onChange={arrayChange}></input>
            </div>
            <div className="cat-pairs">
              <label for="country side">Country Side</label> {"\n"}
              <input type='checkbox' id='option2' name='country side' value="Country Side" onChange={arrayChange}></input>
            </div>
            <div className="cat-pairs">
              <label for="culture and heritage">Culture and Heritage</label>
              <input type='checkbox' id='option3' name='culture and heritage' value="Culture and Heritage" onChange={arrayChange}></input>
            </div>
            <div className="cat-pairs">
              <label for="desert">Desert</label> 
              <input type='checkbox' id='option4' name='desert' value="Desert" onChange={arrayChange}></input>
            </div>
            <div style={{ width: "30px"}}></div>
            <div className="cat-pairs">
              <label for="famous journeys">Famous Journeys</label>
              <input type='checkbox' id='option5' name='famous journeys' value='Famous Journeys' onChange={arrayChange}></input>
            </div>
            <div className="cat-pairs">
              <label for="forest">Forest</label>
              <input type='checkbox' id='option6' name='forest' value='Forest' onChange={arrayChange}></input>
            </div>
            <div className="cat-pairs">
              <label for="mountain">Mountain</label>
              <input type='checkbox' id='option7' name='mountain' value="Mountain" onChange={arrayChange}></input>
            </div>
            <div className="cat-pairs">
              <label for="other">Other</label>
              <input type='checkbox' id='option8' name='other' value='Other' onChange={arrayChange}></input>
            </div>
          
</div>

    
      

        {/* Description */}
        <label className="label"for="input-description">Description:</label>
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
        <label className="label"for="input-price">Price:</label>
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
        <label className="label"for="input-details">Details:</label>
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
        <label className="label"for="input-images">Images:</label>
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
      </div>
      <div className="fake-footer"></div>
    </Layout>
  )
}

export default AdventureCreate;