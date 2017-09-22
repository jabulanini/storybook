import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

import PaginationPage from './paginationPage'

class Pagination extends React.Component {
  static propTypes = {
    pageCount: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    selectedPage: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props)

    this.onPageClick = this.onPageClick.bind(this)
  }

  onPageClick (id) {
    this.props.onPageChange(id)
  }

  selectVisiblePages(pages) {
    const { selectedPage } = this.props

    let startPage = selectedPage - 2
    
    if(startPage < 0) startPage = 0
    
    let endPage = startPage + 5

    if(endPage > pages.length) {
      endPage = pages.length
      startPage = endPage - 5
    }

    const visiblePages = pages.slice(startPage, endPage)

    return visiblePages
  }

  renderPages() {
    const { pageCount } = this.props

    if(!pageCount) return null

    const pages = []

    for(let i = 0; i < pageCount; i++ ) {
      pages.push(
        <PaginationPage
          key={i}
          content={i + 1}
          onClick={this.onPageClick}
          isSelected={this.props.selectedPage === i}
        />
      )
    }

    return this.selectVisiblePages(pages)
  }

  renderLeftLimit() {
    if (this.props.selectedPage > 2)
      return (
        <PaginationPage
          key={0}
          content={1}
          onClick={this.onPageClick}
          isSelected={this.props.selectedPage === 0}
          dots='r'
        />
      )
    else return null
  }

  renderRightLimit() {
    if (this.props.selectedPage < this.props.pageCount - 3)
      return (
        <PaginationPage
          key={this.props.pageCount - 1}
          content={this.props.pageCount}
          onClick={this.onPageClick}
          isSelected={this.props.selectedPage === this.props.pageCount - 1}
          dots='l'
        />
      )
    else return null
  }

  render() {
    return (
      <div className={css(styles.container)}>
        {this.renderLeftLimit()}
        {this.renderPages()}
        {this.renderRightLimit()}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
})

export default Pagination