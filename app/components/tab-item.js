import React from 'react'
import PropTypes from 'prop-types'

const TabItem = ({ name, classes, click }) => {
  return (
    <li
      className={classes}
      onClick={click}>
      {name}
    </li>
  )
}

TabItem.propTypes = {
  name: PropTypes.string,
  classes: PropTypes.string,
  click: PropTypes.func
}

export default TabItem
