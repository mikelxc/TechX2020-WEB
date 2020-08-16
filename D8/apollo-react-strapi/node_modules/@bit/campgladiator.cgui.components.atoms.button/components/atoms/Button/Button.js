import React from 'react'
import PropTypes from 'prop-types'
import Media from '../../../utilities/media'
import mods from '../../../utilities/mods'
import Icon from '../Icon'
import Loader from '../Loader'
import './Button.scss'

const Button = ({
  className,
  id,
  primary,
  secondary,
  solid,
  outline,
  dark,
  gray,
  white,
  loading,
  size,
  media = {},
  disabled,
  children,
  onClick,
  icon,
  ...props
}) => (
  <button
    className={mods(
      'cg-button',
      { primary, secondary, solid, outline, dark, gray, white },
      size && `cg-button--${size}`,
      Media.toModifiers('cg-button', media),
      loading && 'cg-button--loading',
      className,
    )}
    disabled={disabled}
    onClick={onClick}
    id={id}
    {...props}
  >
    {icon && <Icon className="cg-button__icon" name={icon} />}
    {loading ? <Loader white={solid} /> : children}
  </button>
)

const Size = PropTypes.oneOf(['xsmall', 'small', 'large', 'xlarge'])

Button.defaultProps = {
  className: '',
  id: '',
  icon: '',
  primary: false,
  secondary: false,
  solid: false,
  outline: false,
  dark: false,
  gray: false,
  white: false,
  loading: false,
  disabled: false,
}

Button.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  icon: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  solid: PropTypes.bool,
  outline: PropTypes.bool,
  dark: PropTypes.bool,
  gray: PropTypes.bool,
  white: PropTypes.bool,
  size: Size,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  media: Media.propTypeFor(Size),
}

export default Button
