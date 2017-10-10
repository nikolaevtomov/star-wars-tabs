import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

import 'app/components/_character.scss'

const Character = ({ id, image, name, points, isEditable, onChange, onClick }) => {
  return (
    <div className={'character'}>
      <div
        className={'character__image'}
        style={{ backgroundImage: `url(${require(`images/${image}`)})` }}
      />
      <div className={'character__inner'}>
        {
          isEditable
          ? <div
            className={'character__inner--item character__name long-text'}>
            <Field
              onChange={e => onChange({ id: id, name: e.target.value })}
              onBlur={() => onClick()}
              name='name' component='input' type='text'
              autoFocus
            />
          </div>
          : <div
            className={'character__inner--item character__name long-text'}
            onClick={() => onClick()}
            >
            {name}
          </div>
        }
        <div className={'character__inner--item character__points'}>{points} points</div>
      </div>
    </div>
  )
}

Character.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  points: PropTypes.string,
  isEditable: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func
}

Character.defaultProps = {
  isEditable: false,
  onClick: () => {},
  onChange: () => {}
}

export default Character
