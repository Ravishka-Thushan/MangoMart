import React from 'react'
import './ExploreItem.css'
import { menu_item } from '../../assets/assets'

function ExploreItem() {
  return (
    <>
    <div className='explore-item' id='explore-item' >
        <h1> WHY MANGO_MART? </h1>
        <p className='explore-item-text'>We are bound to to bring back the real taste of naturally ripened carbide and chemical free organic mangoes.
         Our passion makes us believe that we can cut the clutter between our farmers & mango lovers like you!</p>
        <div className='explore-item-list'>
            {menu_item.map((item,index)=>{
                return(
                    <div key={index} className='explore-item-list-items'>
                        <img src={item.item_image} alt="item_image"/>
                        <p>{item.item_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
    </>
  )
}

export default ExploreItem