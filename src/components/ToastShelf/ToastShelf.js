import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({messages}) {
  console.log(messages)

  return (
    <ol className={styles.wrapper}>
      {messages.map((message) => (
        <li className={styles.toastWrapper}>
        <Toast variant={message.variant}>{message.message}</Toast>
        </li>))}
    </ol>
  );
}

export default ToastShelf;
