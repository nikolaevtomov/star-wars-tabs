import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import Panel from 'app/components/panel'
import Tabs from 'app/components/tabs'

import { selectCharacters, oneOfCharacter } from 'app/selectors/select-character'
import { updateActiveCharacter, toggleEditable, updateCharactersName } from 'app/actions'

import 'app/containers/_sw-container.scss'

class StarWarsContainer extends React.Component {
  constructor (props) {
    super(props)

    this.handleOnTest = this.handleOnTest.bind(this)
  }

  handleOnTest () {
    console.log('test..')
  }

  render () {
    const {
      characters,
      updateTabItem,
      activeCharacter,
      selectedChar,
      updateName,
      toggleEditable,
      isNameEditable
    } = this.props

    return (
      <div className={'sw-container'}>
        <div className={'sw-container__left'}>
          <Tabs
            items={characters}
            updateItem={updateTabItem}
            activeCharacter={activeCharacter}
          />
          <Panel
            items={selectedChar}
            onChange={updateName}
            onClick={toggleEditable}
            isNameEditable={isNameEditable}
          />
        </div>
        <div className={'sw-container__right'}>
          <Panel items={characters} />
        </div>
      </div>
    )
  }
}

StarWarsContainer.propTypes = {
  characters: PropTypes.array,
  selectedChar: PropTypes.object,
  isNameEditable: PropTypes.bool,
  activeCharacter: PropTypes.number,
  updateTabItem: PropTypes.func,
  toggleEditable: PropTypes.func,
  updateName: PropTypes.func
}

const mapStateToProps = state => ({
  characters: selectCharacters(state),
  selectedChar: oneOfCharacter(state),
  isNameEditable: state.isEditable,
  activeCharacter: state.activeCharacter,
  initialValues: {
    name: oneOfCharacter(state).name
  }
})

const mapDispatchToProps = {
  updateTabItem: updateActiveCharacter,
  updateName: updateCharactersName,
  toggleEditable: toggleEditable
}

const ConnectedStarWarsContainer = reduxForm({
  form: 'Character-Form',
  enableReinitialize: true
})(StarWarsContainer)

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedStarWarsContainer)
