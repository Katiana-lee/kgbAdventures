import React, { useState, useEffect } from 'react'
import './Detail.css'
import Layout from '../../components/shared/Layout/Layout'
import { getAdventure, deleteAdventure } from '../../services/Adventures'
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
    // <Layout>
    //   <div className="adventure-detail">
    //     <img className="adventure-detail-image" src={adventure.imgURL} alt={adventure.title} />
    //     <div className="detail">
    //       <div className="title">{adventure.title}</div>
    //       <div className="content">{adventure.content}</div>
    //       <div className="author">{`Written by: ${adventure.author}`}</div>
    //       <div className="button-container">
    //         <button className="edit-button"><Link className="edit-link" to={`/adventures/${adventure._id}/edit`}>Edit</Link></button>
    //         <button className="delete-button" onClick={() => deleteAdventure(adventure._id)}>Delete</button>
    //       </div>
    //     </div>
    //   </div>
    // </Layout>

    <Layout>
      <div className="wrapper main-content">

      </div>
    </Layout>
  )
}

export default AdventureDetail;

