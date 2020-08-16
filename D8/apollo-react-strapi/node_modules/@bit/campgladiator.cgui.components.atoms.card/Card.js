import React from 'react'
import PropTypes from 'prop-types'
import './Card.scss'

const Card = ({ className = '', children, ...props }) => (
  <article className={`cg-card ${className}`} {...props}>
    {children}
  </article>
)

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Card
