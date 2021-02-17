import React, { useState, useEffect } from 'react'
import './Detail.css'
import Layout from '../../components/shared/Layout/Layout'
import { getAdventure, deleteAdventure } from '../../services/adventures'
import { useParams, Link } from 'react-router-dom'

const AdventureDetail = (props) => {

  const [adventure, setAdventure] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
      const fetchAdventure = async () => {
          const adventure = await getAdventure(id)
          setAdventure(adventure)
        setLoaded(true)
        setMainImage(adventure.imgURL[0])
      }
      fetchAdventure()
  }, [id])

  if (!isLoaded) {
      return <h1 className="loader">Loading...</h1>
  }

  const editDelete = (
    <>
      <div className="button-container">
        <Link to={`/adventures/${adventure._id}/edit`}><div className="edit-delete-button">EDIT</div></Link>
        <Link to={`/adventures`}><div className="edit-delete-button" onClick={() => deleteAdventure(adventure._id)}>DELETE</div></Link>
      </div>
    </>
  );

  const detailList = adventure.details.map((detail, index) => (
    <li className="detail-single">
      {detail}
    </li>
  ));

  const switcheroo = (e, image) => {
    e.preventDefault();
    setMainImage(image.image.toString());
  }

  const imageList = adventure.imgURL.map((image, index) => (
    <img className="image-single" onClick={ (e) => switcheroo(e, {image}) } src={image}/>
  ));

  return (
    <Layout user={props.user}>
      <div className="adventure-detail">
        <div className="detail-content">
          <div className="detail-title">{adventure.title}</div>
          <div className="detail-location"><i class="fa fa-map-marker" aria-hidden="true"></i> {adventure.location}</div>
          <br></br>
          <div className="detail-price-block">
            <div className="detail-price"><i class="fa fa-rub" aria-hidden="true"></i> {adventure.price}</div>
            <div className="add-to-cart">ADD TO CART</div>
          </div>
          <div className="detail-description">
            <span className="span-title">Description:</span>
            <br></br>
            <p>{adventure.description}</p>
          </div>
          <div className="detail-details">
            <span className="span-title">Details:</span>
            <ul>{detailList}</ul>
          </div>
          {props.user ? editDelete : <></>}
        </div>
        <div className="detail-center-divider"></div>
        <div className="detail-images">
          <img className="adventure-detail-image" src={mainImage} alt={adventure.title} />
          <div className="other-images">
            {imageList}
          </div>
        </div>
      </div>
      <div className="fake-footer"></div>
    </Layout>
  )
}

export default AdventureDetail;

