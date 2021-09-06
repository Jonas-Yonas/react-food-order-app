import React, { Fragment } from 'react'
import mealsImage from '../../assets/meals.jpg'
import styles from './header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>Food World</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt='Food world' />
            </div>
        </Fragment>
    )
}

export default Header
