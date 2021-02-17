import React, { useState, useEffect } from 'react'
import './Detail.css'
import Layout from '../../components/shared/Layout/Layout'
import { getAdventure, deleteAdventure } from '../../services/adventures'
import { useParams, Link } from 'react-router-dom'

const AdventureDetail = (props) => {

  const [adventure, setAdventure] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
      const fetchAdventure = async () => {
          const adventure = await getAdventure(id)
          setAdventure(adventure)
          setLoaded(true)
      }
      fetchAdventure()
  }, [id])

  if (!isLoaded) {
      return <h1>Loading...</h1>
  }

  return (
    <Layout>
      <div className="adventure-detail">
        <div className="detail-content">
          <div className="detail-title">{adventure.title}</div>
          <div className="detail-location">{adventure.location}</div>
          <div className="detail-price"><i class="fa fa-rub" aria-hidden="true"></i> {adventure.price}</div>
          <div className="detail-description">{adventure.description}</div>

          <div className="button-container">
            <button className="edit-button"><Link className="edit-link" to={`/adventures/${adventure._id}/edit`}>Edit</Link></button>
            <button className="delete-button" onClick={() => deleteAdventure(adventure._id)}>Delete</button>
          </div>
        </div>
        <div className="detail-images">
          <img className="adventure-detail-image" src={adventure.imgURL[0]} alt={adventure.title} />
        </div>
      </div>
    </Layout>
  )
}

export default AdventureDetail;

