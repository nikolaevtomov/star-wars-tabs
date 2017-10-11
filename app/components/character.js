import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form/immutable'

import 'app/components/_character.scss'

const Character = ({ id, image, name, points, isEditable, handleChange, handleClick }) => {
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
              onChange={e => handleChange({ id: id, name: e.target.value })}
              onBlur={() => handleClick()}
              name='name' component='input' type='text'
              autoFocus
            />
          </div>
          : <div
            className={'character__inner--item character__name long-text'}
            onClick={() => handleClick()}>
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
  handleChange: PropTypes.func,
  handleClick: PropTypes.func
}

Character.defaultProps = {
  isEditable: false,
  handleChange: () => {},
  handleClick: () => {}
}

export default Character
