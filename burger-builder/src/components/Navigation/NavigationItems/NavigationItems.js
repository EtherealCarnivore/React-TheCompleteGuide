import React from 'react';

import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem'

import styles from './NavigationItems.module.css'

const navigationItems = () => {
 return <ul className={styles.NavigationItems}>
     <NavigationItem link="/" active>Burger Builder</NavigationItem>
     <NavigationItem link="/">Checkout</NavigationItem>
 </ul>
};

export default navigationItems;
