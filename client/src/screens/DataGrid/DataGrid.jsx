import React from 'react'
import DataGrid from 'react-data-grid'
import Layout from '../../components/shared/Layout/Layout'
import { getAdventures } from "../../services/adventures";
import { useState, useEffect } from 'react'




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
    { key: 'imgurl', name: 'imgURL' },
  ];

  dataAdventures.map((dataAdventure) => {
    rows.push({
      _id: dataAdventure._id, title : dataAdventure.title, category : dataAdventure.category[0], price: dataAdventure.price, description : dataAdventure.description, details: dataAdventure.details, imgurl: dataAdventure.imgURL[0]
    })
  })
  
  
  return (
    <Layout>
      <div>
        <h1>Inventory</h1>
      </div>
    <DataGrid 
      columns={columns}
      rows={rows}
    />
    </Layout>
  )
}

export default Grid;