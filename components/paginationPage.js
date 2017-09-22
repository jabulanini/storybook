import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

const getStyles = props => {
  const tempStyles = [styles.outerSpan]

  props.isSelected && tempStyles.push(styles.selected)

  return css(tempStyles)
}

const renderDots = (props, side) => {
  const { dots } = props

  if(dots === side) return <span>...</span>
}

const PaginationPage = props => {
  return (
    <span className={css(styles.container)}>
      {renderDots(props, 'l')}
      <span
        className={getStyles(props)}
        onClick={() => props.onClick(props.content)}
      >
        <span className={css(styles.innerSpan)}>{props.content}</span>
      </span>
      {renderDots(props, 'r')}
    </span>
  )
}

PaginationPage.propTypes = {
  content: PropTypes.number.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  dots: PropTypes.oneOf(['l', 'r'])
}

PaginationPage.defaultProps = {
  content: -1,
  isSelected: false,
  onClick: () => console.log('PaginationPage onClick is not implemented')
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  outerSpan: {
    width: '25px',
    height: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  innerSpan: {
    fontSize: '15px'
  },
  selected: {
    borderRadius: '12px',
    backgroundColor: '#e1e1e1',
  },
})

export default PaginationPage