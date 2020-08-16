import React from 'react'
import PropTypes from 'prop-types'
import mods from '../../../utilities/mods'
import './Icon.scss'

const Icon = ({
  className,
  name,
  size,
  ariaHidden = true,
  style = {},
  primary,
  secondary,
  dark,
  gray,
  white,
  disabled,
}) => (
  <i
    className={mods(
      'cg-icon',
      {
        primary,
        secondary,
        dark,
        gray,
        white,
        disabled,
      },
      `cg-icon--${name}`,
      className,
    )}
    style={{ fontSize: `${size}px`, ...style }}
    aria-hidden={ariaHidden}
  />
)

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  ariaHidden: PropTypes.bool,
  style: PropTypes.object,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  dark: PropTypes.bool,
  gray: PropTypes.bool,
  white: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default Icon
