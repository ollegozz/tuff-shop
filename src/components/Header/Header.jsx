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
          <div className={styles.icon}></div>
        </form>
      </div>
    </div>
  )
}

export default Header