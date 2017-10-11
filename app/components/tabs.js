import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Map } from 'immutable'

import TabItem from 'app/components/tab-item'

import 'app/components/_tabs.scss'

const Tabs = ({ items, updateItem, activeItemId }) => {
  const tabStyle = id => classNames({
    'long-text': true,
    tabs__item: true,
    active: (activeItemId === id)
  })

  return (
    <ul className={'tabs'}>
      {items.valueSeq().map(item =>
        <TabItem
          key={item.get('id')}
          name={item.get('name')}
          classes={tabStyle(item.get('id'))}
          handleClick={() => updateItem(item.get('id'))}
        />
        )}
    </ul>
  )
}

Tabs.propTypes = {
  items: PropTypes.instanceOf(Map),
  updateItem: PropTypes.func,
  activeItemId: PropTypes.number
}

export default Tabs
