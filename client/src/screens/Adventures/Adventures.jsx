import React, { useState, useEffect } from "react";
import "./Adventures.css";
import Adventure from "../../components/Adventure/Adventure";
import Search from "../../components/Search/Search";
import { AZ, ZA, lowestFirst, highestFirst } from "../../utils/sort";
import Sort from "../../components/Sort/Sort";
import Layout from "../../components/shared/Layout/Layout";
import { getAdventures } from "../../services/adventures";

const Adventures = (props) => {
  const { onChange, filter, setFilter } = props;
  const [allAdventures, setAllAdventures] = useState([]);
  const [queriedAdventures, setQueriedAdventures] = useState([]);
  const [sortType, setSortType] = useState([]);

  useEffect(() => {
    const fetchAdventures = async () => {
      const adventures = await getAdventures();
      setAllAdventures(adventures);
      if (filter !== "All") {
        let temp = [];
        adventures.map((adventure) => {
          if (adventure.category.includes(filter)) {
            temp.push(adventure);
          }
        });
        setQueriedAdventures(temp);
      } else {
        setQueriedAdventures(adventures);
      }
    };
    fetchAdventures();
  }, [filter]);

  const handleSort = (type) => {
    setSortType(type);
    switch (type) {
      case "title-ascending":
        setQueriedAdventures(AZ(queriedAdventures));
        break;
      case "title-descending":
        setQueriedAdventures(ZA(queriedAdventures));
        break;
      case "price-ascending":
        setQueriedAdventures(lowestFirst(queriedAdventures));
        break;
      case "price-descending":
        setQueriedAdventures(highestFirst(queriedAdventures));
        break;
      default:
        break;
    }
  };

  const handleSearch = (event) => {
    const newQueriedAdventures = allAdventures.filter((adventure) =>
      adventure.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setQueriedAdventures(newQueriedAdventures, () => handleSort(sortType));
  };

  const handleSubmit = (event) => event.preventDefault();

  const adventuresJSX = queriedAdventures.map((adventure, index) => (
    <Adventure
      className="adventure-card"
      _id={adventure._id}
      title={adventure.title}
      category={adventure.category}
      location={adventure.location}
      imgURL={adventure.imgURL}
      price={adventure.price}
      description={adventure.description}
      details={adventure.details}
      key={index}
    />
  ));

  return (
    <Layout onChange={onChange} user={props.user}>
      <div className="fake-nav"></div>
      <div className="search-pack">
        <Search onSubmit={handleSubmit} onChange={handleSearch} />
        <Sort onSubmit={handleSubmit} onChange={handleSort} />
      </div>
      <div className="adventure-cards">{adventuresJSX}</div>
    </Layout>
  );
};

export default Adventures;
