import React from 'react'
import style from './CheckboxCard.module.scss'

const CheckboxCard = ({image, title}) => {
  return (
    <div className={style.card}>
        <input type='checkbox' className={style.card_checkbox}/>
        <img src={image} className={style.card_image}/>
        <span>{title}</span>
    </div>
  )
}

// proptypes dodaj 

export default CheckboxCard