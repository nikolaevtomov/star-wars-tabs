import React from 'react'
import PropTypes from 'prop-types'
import { List, Map } from 'immutable'

import Character from 'app/components/character'

import 'app/components/_panel.scss'

const Panel = ({ items, isEditable, handleChange, handleClick }) => {
  return (
    <div className={'panel'}>
      {
      (List.isList(items))
      ? items.valueSeq().map(item =>
        <Character
          key={item.get('id')}
          id={item.get('id')}
          image={item.get('path')}
          name={item.get('name')}
          points={item.get('points')}
        />)
      : <Character
        id={items.get('id')}
        image={items.get('path')}
        name={items.get('name')}
        points={items.get('points')}
        isEditable={isEditable}
        handleClick={handleClick}
        handleChange={handleChange}
      />
      }
    </div>
  )
}

Panel.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.instanceOf(List),
    PropTypes.instanceOf(Map)
  ]),
  isEditable: PropTypes.bool,
  handleClick: PropTypes.func,
  handleChange: PropTypes.func
}

Panel.defaultProps = {
  isEditable: false,
  onClick: () => {},
  onChange: () => {}
}

export default Panel
