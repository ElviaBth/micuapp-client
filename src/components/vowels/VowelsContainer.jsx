import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { GetVowels } from '../../services/functions';
import MainButton from '../mainButton/MainButton';
import VowelCard from './VowelCard';
import start_2 from '../../assets/img/Star_2.png'



function VowelsContainer() {
    const [vowels, setVowels] = useState([]);

    const getAllVowels = async() =>{
        const allVowels = await GetVowels();
        setVowels(allVowels);
      }
    
      useEffect( () => {
        getAllVowels()
      }, [])
    
        let alphabetAccess = '';
        if (localStorage.getItem('auth_token')){
          alphabetAccess = (<Link to="/flipcard"><MainButton class='bt' text='Aprende todo el abecedario'/></Link>)
        }else{
          alphabetAccess = (<Link to="/signin"><MainButton class='bt' text='Aprende todo el abecedario'/></Link>)
        }

  return (
    <div className='bg-vowels-container'>
      <div className='text-vowels'>
        <img src={start_2} alt="Estrella de color amarillo" />
        <p>FLIP <span>CARDS</span></p>
      </div>
    <div className='vowel-cards-container'>
        {vowels.map((vowel, index) => (
        <VowelCard {...vowel} key={index} backVideo={vowel.video} />
         ))}   
    </div>
      {alphabetAccess}
    </div>

  )
}

export default VowelsContainer