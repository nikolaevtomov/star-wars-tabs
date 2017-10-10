import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import TabItem from 'app/components/tab-item'

import 'app/components/_tabs.scss'

const Tabs = ({ items, updateItem, activeCharacter }) => {
  const navStyle = id => classNames({
    'long-text': true,
    tabs__item: true,
    active: (activeCharacter === id)
  })

  return (
    <ul className={'tabs'}>
      {items.map(item =>
        <TabItem
          key={item.id}
          name={item.name}
          classes={navStyle(item.id)}
          click={() => updateItem(item.id)}
        />
        )}
    </ul>
  )
}

Tabs.propTypes = {
  items: PropTypes.array,
  updateItem: PropTypes.func,
  activeCharacter: PropTypes.number
}

export default Tabs
