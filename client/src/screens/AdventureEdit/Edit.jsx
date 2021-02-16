import React, { useState, useEffect } from 'react'
import './Edit.css'
import { useParams, Redirect } from 'react-router-dom'
import Layout from '../../components/shared/Layout/Layout'
import { getAdventure, updateAdventure } from '../../services/adventures'

const Edit = (props) => {
  const [adventure, setAdventure] = useState({
    title: '',
    location: '',
    category: ["", "", ""],
    price: '',
    description: '',
    details: ["", "", ""],
    imgURL: ["", "", ""]
  })

  const [isUpdated, setUpdated] = useState(false)
    let { id } = useParams

    useEffect(() => {
      const fetchAdventure  = async () => {
          const adventure = await getAdventure(id)
          setAdventure(adventure)
      }
      fetchAdventure()
  }, [id])


  const handleChange = (event) => {
    const { name, value } = event.target
    setAdventure({
            ...adventure,
            [name]: value
    })
}

const handleSubmit = async (event) => {
  event.preventDefault()
  let { id } = props.match.params
  const updated = await updateAdventure(id, adventure)
  setUpdated(updated)
}

if (isUpdated) {

  return <Redirect to={`/adventures/${id}`} />
  return <Redirect to={`/adventures/${props.match.params.id}`} />

}


  return (
    <Layout onChange={props.onChange} user={props.user}>
      <div className="adventure-edit">
        <div className="adventure-title">
          <form onSubmit={handleSubmit}>
        <input
          id="input-title"
          className="input-title"
          placeholder='Enter Title'
          value={adventure.title}
          name='title'
          required
          autoFocus
          onChange={handleChange}
        />
          </form>
        </div>

         {/* Location */}
        <form className="edit-form" onSubmit={handleSubmit}>
        <input
          id="input-location"
          className="input-location"
          placeholder='Enter Location'
          value={adventure.location}
          name='author'
          required
          onChange={handleChange}
        />

        {/* Category */}
        <input
          id="input-category"
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
        />

        {/* Description */}
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
        <input
          id="input-price"
          className="input-price"
          placeholder='Enter Price'
          value={adventure.author}
          name='price'
          required
          onChange={handleChange}
        />

        {/* Details */}
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
          <div className="image-container">
          <img className="edit-adventure-images" src={adventure.imgURL} alt={adventure.imgURL} />
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
            </div>
        <button type='submit' className="submit-button">Submit</button>
      </form>
    </div>
    </Layout>
  )
}

export default Edit