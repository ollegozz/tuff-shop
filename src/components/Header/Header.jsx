import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from "../../utils/routes";
import styles from '../../styles/Header.module.css'
import logo from '../../images/logo.svg'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={logo} alt="Stuff" />
        </Link>
      </div>
      <div className={styles.info}>
        
      </div>
    </div>
  )
}

export default Header