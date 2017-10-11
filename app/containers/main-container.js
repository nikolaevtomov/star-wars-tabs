import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form/immutable'
import { Map } from 'immutable'

import Panel from 'app/components/panel'
import Tabs from 'app/components/tabs'

import { allEntities, getEntityById } from 'app/selectors'
import { updateActive, toggleEditable, updateEntity } from 'app/actions'

import 'app/containers/_main-container.scss'

class MainContainer extends React.Component {
  constructor (props) {
    super(props)

    this.handleOnTest = this.handleOnTest.bind(this)
  }

  handleOnTest () {
    console.log('test..')
  }

  render () {
    const {
      data,
      updateActiveItem,
      activeItemId,
      itemById,
      updateItem,
      toggleEditable,
      isEditable
    } = this.props

    return (
      <div className={'sw-container'}>
        <div className={'sw-container__left'}>
          <Tabs
            items={data}
            updateItem={updateActiveItem}
            activeItemId={activeItemId}
          />
          <Panel
            items={itemById}
            handleChange={updateItem}
            handleClick={toggleEditable}
            isEditable={isEditable}
          />
        </div>
        <div className={'sw-container__right'}>
          <Panel items={data.toList()} />
        </div>
      </div>
    )
  }
}

MainContainer.propTypes = {
  data: PropTypes.instanceOf(Map),
  itemById: PropTypes.instanceOf(Map),
  isEditable: PropTypes.bool,
  activeItemId: PropTypes.number,
  updateActive: PropTypes.func,
  toggleEditable: PropTypes.func,
  updateItem: PropTypes.func
}

const mapStateToProps = state => ({
  data: allEntities(state),
  itemById: getEntityById(state),
  isEditable: state.get('isEditable'),
  activeItemId: state.get('active'),
  initialValues: {
    name: getEntityById(state).get('name')
  }
})

const mapDispatchToProps = {
  updateActiveItem: updateActive,
  updateItem: updateEntity,
  toggleEditable: toggleEditable
}

const ConnectedMainContainer = reduxForm({
  form: 'Form',
  enableReinitialize: true
})(MainContainer)

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedMainContainer)
