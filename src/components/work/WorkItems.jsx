import React from 'react'

const WorkItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt={item.title} width='300px'/>
        <h3 className="work__title">{item.title}</h3>
        <a href={item.url} className="work__button">Website
            <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
    </div>
  )
}

export default WorkItems
