import React from 'react';
import { StyleSheet, css } from 'aphrodite'


class FormElement extends React.Component {

  constructor(props) {
    super(props);
  }

  disableElement = function () {
    if(this.props.disabled){
      return true
    }
  }

  renderPrefix = function () {
    if(this.props.prefix){
      return (
        <div className={css(styles.inputPrefix)}>{this.props.prefix}</div>
      )
    }
  }

  renderSufix = function () {
    if(this.props.sufix){
      return (
        <div>{this.props.sufix}</div>
      )
    }
  }


  renderFormElement = function () {

    if(this.props.type == 'textarea'){
      return(
        <textarea
          id={this.props.name}
          disabled={this.disableElement()}
          className={css([styles.input, styles.textarea])}
          type="text"
          placeholder={this.props.placeholder}
        >
        </textarea>
      )
    } else if(this.props.type == 'select'){
      return(
        <select id={this.props.name}  className={css(styles.input)} disabled={this.disableElement()} >
          {
            this.props.options.map((option) =>
              <option value={option.name}>{option.label}</option>
            )
          }
        </select>
      )
    } else if(this.props.type == 'checkbox'){
      return(
        <div>
          {
            this.props.options.map((option) =>
              <div>
                <input id={option.name} type="checkbox" className={css(styles.checkbox)} />
                <label htmlFor={option.name}>{option.label}</label>
              </div>
            )
          }
        </div>
      )
    } else if(this.props.type == 'radio'){
        return(
          <div>
            {
              this.props.options.map((option) =>
                <div>
                  <input id={option.name} name={this.props.name} type="radio" className={css(styles.radio)} />
                  <label htmlFor={option.name}>{option.label}</label>
                </div>
              )
            }
          </div>
        )
    } else if(this.props.type == 'switch'){
        return(
          <div>
            <input name={this.props.name} type="checkbox" style={{display:'none'}} />

              <label className={css(styles.switch)} for={this.props.name}>
                <div className={css(styles.switchState)}></div>
              </label>

          </div>
        )
    } else{
      return(
         <input disabled={this.disableElement()} className={css(styles.input)} type={this.props.type} placeholder={this.props.placeholder} />
        )
    }
  }
  render() {
    return(
      <div className={css(styles.group)}>
        <label htmlFor={this.props.name} className={css(styles.label)}>{this.props.label}</label>
        {this.renderPrefix()}
        {this.renderFormElement()}
        {this.renderSufix()}
      </div>
    )
  }
}

const group = {
    fontFamily: 'Helvetica',
    position: 'relative',
    marginBottom: 20
}

const extendedGroup = {
    ...group,


}

const styles = StyleSheet.create({

  group,
  extendedGroup,
  link:{
    color: '#222',
    textDecoration: 'none'
  },
  label: {
    textTransform: 'uppercase',
    color: '#222',
    fontSize: 14,
    marginBottom: 6,
    display: 'block'
  },
  input:{
    padding: 10,
    width: '100%',
    border: '1px solid #aaa',
    display: 'block',
    outline: 'none',
    boxSizing: 'border-box',
    height: 47,
    fontSize: 16,
    ':focus': {
      borderColor: 'green'
    },
    ':disabled':{
      background: '#ddd'
    }
  },
  image:{
    borderRadius: '50%',
    width: 70,
    height: 70,
    border: '1px solid #222',
    float: 'left',
    marginRight: 15
  },
  textarea:{
    height: 96
  },
  switch:{
    width: 50,
    height: 21,
    position: 'relative',
    background: '#999',
    borderRadius: 10,
    cursor: 'pointer',
    display: 'block'
  },
  switchState: {
    background: '#222',
    width: 25,
    height: 25,
    borderRadius: '50%',
    position: 'absolute',
    top: -2,
    left: 0,
  },
  button:{
    transition: 'background 0.2s ease',
    padding: 11,
    background: '#aaa',
    border: 'none',
    outline: 'none',
    borderRadius: 4,
    color: '#222',
    cursor: 'pointer',
    ':hover' : {
      background: '#999',
    }
  },
  copybutton: {
    top: 36,
    right: 14,
        position: 'absolute',

  }
})

export {
  FormElement
};
