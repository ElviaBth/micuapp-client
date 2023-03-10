import React, {useState, useEffect} from 'react'
import FlipCard from '../../components/flipCard/FlipCard';
import { GetLetters } from '../../services/functions';
import "./FlipCardsPage.css";
import Layout from "../../components/layout/Layout";


const FlipCardsPage = () => {
  const [cards, setCards] = useState([]);

  const getAllCards = async() =>{
    const allCards = await GetLetters();
    console.log(allCards);
    setCards(allCards);
  }

  useEffect( () => {
    getAllCards()
  }, [])

  console.log(cards);
  return (
    <>
    <Layout>
      <div className='d-flex justify-content-center align-items-center m-5 bg-light' >
          <div className = 'd-flex flex-wrap text-center'>
          {cards.map((card, index) => (<FlipCard {...card} key={index} backVideo={card.video} /> ))}   
        </div>
      </div>
    </Layout>
    </>
  )
}

export default FlipCardsPage
