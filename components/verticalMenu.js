import React from 'react';
import { StyleSheet, css } from 'aphrodite'


class VerticalMenu extends React.Component {


  constructor(props) {
    super(props);
  }


  renderChildItems(item) {
    if(item.children){
      return (
        <ul className={css(styles.submenu)}>
          {item.children.map(item =>
            <li className={css([styles.menuItem, styles.submenuItem])}>
              <a className={css([styles.menuLink, styles.submenuLink])} href={item.url}>{item.label}</a>
            </li>
          )}
          </ul>
      )
    }
  }

  render() {
    return(
      <div className={css(styles.menu)}>
        <ul>
        {this.props.items.map(item =>
          <li className={css(styles.menuItem)}>
            <a className={css(styles.menuLink)} href={item.url}>{item.label}</a>
            {this.renderChildItems(item)}
          </li>
          )}
          </ul>
      </div>
    )
  }
}

const styles = StyleSheet.create({

  menu: {
    backgroundColor: '#333',
    color: '#fff',
    height: '100%',
  },
  menuLink:{
    color: '#fff',
    textDecoration: 'none',
    display: 'block',
    lineHeight: '40px'
  },
  menuItem:{
    borderBottom: '1px solid #777',
    padding: '0 20px'
  },
  submenu:{
    margin: '0 -20px'
  },
  submenuItem:{
    border: 'none'
  },
  submenuLink:{
    color: '#888',
    lineHeight: '24px'
  }
})


export {
  VerticalMenu
};
