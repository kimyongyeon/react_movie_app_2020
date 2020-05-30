import React from 'react';
import PropTypes from 'prop-types'

function Food ({name, picture, rating}) {
  return (
      <div>
        <h2>I like {name}</h2>
        <h4>{rating}/5.0</h4>
        <img src={picture} alt={name} />
      </div>
  )
}

const foodILike = [
  {
    id: 1,
    name: 'kimchi',
    image: "https://via.placeholder.com/350x150",
    rating: 5
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: "https://via.placeholder.com/350x150",
    rating: 4.5
  },
  {
    id: 3,
    name: 'Bibmbap',
    image: "https://via.placeholder.com/350x150",
    rating: 4.9
  },
  {
    id: 4,
    name: 'Doncasu',
    image: "https://via.placeholder.com/350x150",
    rating: 3.0
  },
  {
    id: 5,
    name: 'Kimbap',
    image: "https://via.placeholder.com/350x150",
    rating: 2.0
  },
]

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
}

function Food() {
  return (
      <div>
        <h1>hello</h1>
        {foodILike.map(renderFood)}
      </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

export default Food;
