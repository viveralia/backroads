import React from 'react'
import styles from '../css/footer.module.css'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                {links.map((link, index) => (
                    <Link key={index} to={link.path}>
                        {link.text}
                    </Link>
                ))}
            </div>
            <div className={styles.icons}>
                {socialIcons.map((item, index) => (
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {item.icon}
                    </a>
                ))}
            </div>
            <div className={styles.copyright}>
                copyright &copy; backroads travel company{' '}
                {new Date().getFullYear()} all rights reserved
            </div>
        </footer>
    )
}

export default Footer
