import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom";
import styles from "./header.module.scss";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    /*const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsOpen(() => !isOpen);
    };

    const handleClickOutside = (e: React.MouseEvent) => {

    };
*/
    useEffect(() => {

    }, []);

    return (
        <header className={styles.header_wrapper}>
            <div className={styles.header_logo}>
                <Link to='/home'>
                        <span>
                            <img className={styles.logo} src="/assets/image/icon/logo.png" alt="logo"/>
                        </span>
                </Link>
            </div>
            <nav className={styles.header_menu}>
                <ul ref={ref}
                    className={styles.header_menu_list}>
                    <li>
                        <Link to='/'
                              className={styles.header_menu_item}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'
                              className={styles.header_menu_item}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='/feature'
                              className={styles.header_menu_item}>
                            Feature
                        </Link>
                    </li>
                    <li>
                        <Link to='/service'
                              className={styles.header_menu_item}>
                            Service
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact'
                              className={styles.header_menu_item}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;
