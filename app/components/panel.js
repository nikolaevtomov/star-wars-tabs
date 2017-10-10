import React from 'react'
import PropTypes from 'prop-types'

import Character from 'app/components/character'

import 'app/components/_panel.scss'

const Panel = ({ items, isNameEditable, onChange, onClick }) => {
  return (
    <div className={'panel'}>
      {
      (items.constructor === Array)
      ? items.map(item =>
        <Character
          key={item.id}
          id={item.id}
          image={item.path}
          name={item.name}
          points={item.points}
        />
        )
      : <Character
        id={items.id}
        image={items.path}
        name={items.name}
        points={items.points}
        isEditable={isNameEditable}
        onClick={onClick}
        onChange={onChange}
      />
      }
    </div>
  )
}

Panel.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  isEditable: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func
}

Character.defaultProps = {
  isEditable: false,
  onClick: () => {},
  onChange: () => {}
}

export default Panel
