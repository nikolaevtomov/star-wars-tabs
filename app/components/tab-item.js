import React from 'react'
import PropTypes from 'prop-types'

const TabItem = ({ name, classes, handleClick }) => {
  return (
    <li
      className={classes}
      onClick={handleClick}>
      {name}
    </li>
  )
}

TabItem.propTypes = {
  name: PropTypes.string,
  classes: PropTypes.string,
  handleClick: PropTypes.func
}

export default TabItem
