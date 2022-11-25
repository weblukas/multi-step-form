import React from 'react'
import StandaloneRadio from '../StandaloneRadio/StandaloneRadio'
import style from './CheckboxCard.module.scss'

const CheckboxCard = ({image, title, children}) => {
  return (
    <div className={style.card}>
        {children}
        <img src={image} className={style.card_image}/>
        <span>{title}</span>
    </div>
  )
}

// proptypes dodaj 

export default CheckboxCard