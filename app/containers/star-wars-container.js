import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import Panel from 'app/components/panel'
import Tabs from 'app/components/tabs'

import { selectCharacters, oneOfCharacter } from 'app/selectors/select-character'
import { updateActiveCharacter, toggleEditable, updateCharactersName } from 'app/actions'

import 'app/containers/_sw-container.scss'

const StarWarsContainer = ({
  characters,
  selectedChar,
  isNameEditable,
  activeCharacter,
  updateTabItem,
  toggleEditable,
  updateName
}) => {
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

StarWarsContainer.propTypes = {
  characters: PropTypes.array,
  selectedChar: PropTypes.object,
  isNameEditable: PropTypes.bool,
  activeCharacter: PropTypes.number,
  updateTabItem: PropTypes.func,
  toggleEditable: PropTypes.func,
  updateName: PropTypes.func
}

const ConnectedStarWarsContainer = reduxForm({
  form: 'Update-Name',
  enableReinitialize: true
})(StarWarsContainer)

export default connect(
  state => ({
    characters: selectCharacters(state),
    selectedChar: oneOfCharacter(state),
    isNameEditable: state.isEditable,
    activeCharacter: state.activeCharacter,
    initialValues: {
      name: oneOfCharacter(state).name
    }
  }),
  {
    updateTabItem: updateActiveCharacter,
    updateName: updateCharactersName,
    toggleEditable
  }
)(ConnectedStarWarsContainer)
