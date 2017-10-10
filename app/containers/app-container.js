import React from 'react'
import PropTypes from 'prop-types'

export const AppContainer = ({ children }) => {
  return (
    <div className={'container'}>
      {children}
    </div>
  )
}

AppContainer.propTypes = {
  children: PropTypes.object
}

export default AppContainer
