import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { StyleSheet, css } from 'aphrodite';
import { host } from 'storybook-host';
import 'normalize.css';

// import { Button, Welcome } from '@storybook/react/demo';


import { FormElement } from '../components/formElement'
import { VerticalMenu } from '../components/verticalMenu'
import Button from '../components/Button'

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Typography', module)
    .addDecorator(host({
        title: 'Typography',
        align: 'left top',
        height: '100%',
        width: 300,
        cropMarks: false
    }))
    .add('Typography',
        withInfo('Typography examples')(() =>
            <div>
                <h1 className={css(styles.title1)}>Title 1</h1>
                <h1 className={css(styles.title2)}>Title 2</h1>
                <h1 className={css(styles.title3)}>Title 3</h1>
                <p className={css(styles.text1)}>Text 1</p>
                <p className={css(styles.text2)}>Text 2</p>
                <p className={css(styles.text3)}>Text 2</p>
            </div>
        ))

storiesOf('Menus', module)
    .addDecorator(host({
        title: 'Vertical 2lvl Navigation .',
        align: 'left top',
        height: '100%',
        width: 300,
        cropMarks: false
    }))
    .add('Vertical Navigation',
        withInfo('Vertical 2 level navigation')(() =>
            <VerticalMenu
                items={[
                    {label:'link1', url: '#'},
                    {label:'link1', url: '#'},
                    {label:'link1', url: '#',
                        children: [
                            {label:'link1', url:'#'},
                            {label:'link1', url:'#'},
                            {label:'link1', url:'#'},
                            {label:'link1', url:'#'},
                        ]
                    },
                    {label:'link1', url: '#'},
                    {label:'link1', url: '#',
                        children: [
                            {label:'link1', url:'#'},
                            {label:'link1', url:'#'},
                            {label:'link1', url:'#'},
                            {label:'link1', url:'#'},
                        ]
                    }
                ]}
            />
        )
    )

storiesOf('Buttons', module)
    .addDecorator(host({
        title: 'Buttons',
        align: 'left top',
        height: '100%',
        width: 300,
        cropMarks: false
    }))
    .add('xSmall',
        withInfo('xSmallBtn')(() =>
            <Button
                size='xsmall'
            >Edit</Button>
        ))
    .add('Small',
        withInfo('SmallBtn')(() =>
            <Button
                size='small'
            >Edit</Button>
        ))
    .add('Medium',
        withInfo('MediumBtn')(() =>
            <Button
                size='medium'
            >Edit</Button>
        ))
    .add('Large',
        withInfo('LargeBtn')(() =>
            <Button
                size='large'
            >Edit</Button>
        ))
    .add('xLarge',
        withInfo('xLargeBtn')(() =>
            <Button
                size='xlarge'
            >Edit</Button>
        ))
    .add('BtnPrefix',
        withInfo('BtnPrefix')(() =>
            <Button
                prefix={<b>$</b>}
                size='xlarge'
                color='primary'
                rounded
            >Edit</Button>
        ))
    .add('BtnSufix',
        withInfo('BtnSufix')(() =>
            <Button
                suffix={<b>$</b>}
                size='xlarge'

            >Edit</Button>
        ))

storiesOf('Form elements', module)
    .addDecorator(host({
        title: 'Form Elements',
        align: 'left top',
        height: '100%',
        width: 300,
        cropMarks: false
    }))
    .add('Text input',
        withInfo('Basic text input group')(() =>
            <FormElement
                name="name"
                type="text"
                label="Text Input"
                placeholder="type here" />
        ))
    .add('Text input -- with prefix',
        withInfo('Text input with a prefix')(() =>
            <FormElement
                name="name"
                type="text"
                label="Text Input"
                prefix="%"
                placeholder="type here" />
        ))
    .add('Text input -- disabled',
        withInfo('Text input with disabled option')(() =>
            <FormElement
                disabled
                type="text"
                name="name"
                label="Text Input"
                placeholder="type here" />
        ))
    .add('Number input',
        withInfo('Basic text input group')(() =>
            <FormElement
                type="number"
                name="name"
                label="Number Input" />
        ))
    .add('Textarea',
        withInfo('Basic text input group')(() =>
            <FormElement
                type="textarea"
                name="name"
                label="Textarea"
                placeholder="type here" />
        ))
    .add('Select',
        withInfo('Basic text input group')(() =>
            <FormElement
                type="select"
                name="name"
                label="Select"
                options={[
                    {label:'option label 1', name: 'option1'},
                    {label:'option label 2', name: 'option2'},
                    {label:'option label 3', name: 'option3'}
                ]}
            />
        ))
    .add('Checkbox',
        withInfo('Checkbox')(() =>
            <FormElement
                type="checkbox"
                label="Checkbox"
                options={[
                    {label:'option label 1', name: 'option1'},
                    {label:'option label 2', name: 'option2'},
                    {label:'option label 3', name: 'option3'}
                ]}
            />
        ))
    .add('Radio',
        withInfo('Radio')(() =>
            <FormElement
                type="radio"
                name="name"
                label="Radio"
                options={[
                    {label:'option label 1', name: 'option1'}
                    ,{label:'option label 2', name: 'option2'}
                    ,{label:'option label 3', name: 'option3'}
                ]}
            />
        ))
    .add('Switch',
        withInfo('Switch')(() =>
            <FormElement
                type="switch"
                name="name"
                label="Switch"
            />
        ))


storiesOf('Blobs', module)
    .addDecorator(host({
        title: 'Blobs',
        align: 'left top',
        height: '100%',
        width: 300,
        cropMarks: false
    }))
    .add('User blob',
        withInfo('User blob component')(() =>
            <div className={css([styles.group, styles.flex])}>
                <img className={css(styles.image)} src="http://365psd.com/images/istock/previews/9353/93539553-flat-vector-avatar-face-character-person-portrait-user-icon.jpg" />
                <div>
                    <h3 className={css(styles.title3)}>Title style 3</h3>
                    <p className={css(styles.text2)} style={{display: 'inline'}} >Text style 2</p>
                    <a href="#" className={css([styles.link, styles.marginRight20])}>091234567</a>
                    <a href="#" className={css([styles.link, styles.marginRight20])}>email@provider.com</a>
                    <a href="#" className={css([styles.link, styles.marginRight20])}>email@provider.com</a>
                </div>
            </div>
        )
    )





const styles = StyleSheet.create({

    btn_basic:{
        paddingTop: 15,
        paddingBottom :15

    },

    title1: {
        fontSize: 30,
        lineHeight: '36px',
        display : 'flex'
    },
    title2: {
        fontSize: 26,
        lineHeight: '30px'
    },
    title3: {
        fontSize: 22,
        lineHeight: '26px'
    },
    text1: {
        fontSize: 18,
        lineHeight: '24px'
    },
    text2:{
        fontSize: 16,
        lineHeight: '20px',
        fontStyle: 'italic'
    },
    text3: {
        fontSize: 14,
        lineHeight: '18px',
        textTransform: 'uppercase'
    },
    flex: {
        display: 'flex'
    },
    marginRight20: {
        marginRight: 20
    },
    group: {
        fontFamily: 'Helvetica',
        maxWidth: 320
    },
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
        border: '1px solid #222',
        display: 'block',
        outline: 'none',
        boxSizing: 'border-box',
        height: 47,
        fontSize: 16
    },
    image:{
        borderRadius: '50%',
        flexBasis: 70,
        height: 70,
        border: '1px solid #222',
        float: 'left',
        marginRight: 15
    },
    inputDisabled:{
        background: '#ddd'
    },
    textarea:{
        height: 96
    },
    button:{
        transition: 'background 0.2s ease',
        padding: 11,
        position: 'absolute',
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
        right: 14
    }
})
