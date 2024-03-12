import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SideArrow from "../../assets/sideArrow.svg"

import './Card.css';

import UserCard from '../../assets/users-card.svg';
import ArstroCard from '../../assets/astro-card.svg';



const Card = ({ heading, content, link ,onOnlick}) => {

    const navigate = useNavigate();

    console.log(link,"LINKKKKS")

    const handleOnClick =()=>{
        navigate(link)
        
    }

    return (
        <div className="card" style={{ width: '18rem' }} onClick={onOnlick}>
          
            {link === '/customers' &&  <img src={UserCard} className="card-image"/> }
            {link === '/astrologer' &&  <img src={ArstroCard} className="card-image"/> }

            <div className="">

                <div className="card-details">
                    <h5 className="card-title">{heading}  <img src={SideArrow} /></h5>
                    <p className="card-text">{content}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                  
                </div>

            </div>
        </div>
    )

}

export default Card;

