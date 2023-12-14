import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from "../../utils/routes";
import styles from '../../styles/Header.module.css'
import logo from '../../images/logo.svg'
import avatar from '../../images/avatar.jpg'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={logo} alt="Stuff" />
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.user}></div>
        <div className={styles.user}>
          <div className={styles.avater} style={{ backgroundImage: `url(${avatar})`}}/>
          <div className={styles.username}>Guest</div>
        </div>
        <form className={styles.form}>
          <div className={styles.icon}>
            <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
          </div>
          <div className={styles.input}>
            <input type="search" name='search' 
            placeholder='Search for aniting...'
            autoComplete='off'
            onChange={() => {}}
            value=''
            />
          </div>
          <div className={styles.box}></div>
        </form>
        <div className={styles.account}>
          <Link to={ROUTES.HOME} className={styles.favorites}>
            <svg className="icon-fav">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
            </svg>
          </Link>
          <Link to={ROUTES.CART} className={styles.cart}>
            <svg className="icon-cart">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
            </svg>
            <span className={styles.count}>2</span>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Header