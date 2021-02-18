import React from 'react'
import DataGrid from 'react-data-grid'
import Layout from '../../components/shared/Layout/Layout'
import { getAdventures } from "../../services/adventures";
import { useState, useEffect } from 'react'
import './DataGrid.css';




function Grid(props) {
  const [dataAdventures, setdataAdventures] = useState([]);


  useEffect(() => {
    const fetchdataAdventures = async () => {
      const dataAdventures = await getAdventures();
      setdataAdventures(dataAdventures);
    };
    fetchdataAdventures();
  }, []);

  let rows= []

  const columns = [
    { key: '_id', name: "ID" },
    { key: 'title', name: 'Title' },
    { key: 'category', name: 'Category' },
    { key: 'price', name: 'Price' },
    { key: 'description', name: 'Description' },
    { key: 'details', name: 'Details' },
  ];

  dataAdventures.map((dataAdventure) => {
    rows.push({
      _id: dataAdventure._id, title : dataAdventure.title, category : dataAdventure.category[0], price: dataAdventure.price, description : dataAdventure.description, details: dataAdventure.details, imgurl: dataAdventure.imgURL[0]
    })
  })
  
  
  return (
    <Layout>
      <div className='fake-nav'>

      </div>
      <div className='title'>
        <h1>Inventory</h1>
      </div>
      <div className='grid'>
    <DataGrid 
      columns={columns}
      rows={rows}
        />
        </div>
    </Layout>
  )
}

export default Grid;