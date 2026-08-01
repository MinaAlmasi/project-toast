import React from 'react';

import Button from '../Button';
import ToastShelf from "../ToastShelf";

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  const [messages, setMessages] = React.useState([]);
  const [isShown, setIsShown] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const newMessage = {
      message: message,
      variant: variant
      // add id later for key warnings
    }

    const nextMessages = [...messages, newMessage]
    setMessages(nextMessages)

    // reset !
    setMessage('')
    setVariant(VARIANT_OPTIONS[0])

    setIsShown(true)
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      
      {isShown && <ToastShelf messages={messages}/>}

      <form onSubmit={handleSubmit}>
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea 
                  id="message" 
                  className={styles.messageInput} 
                  value={message} 
                  onChange={event => {setMessage(event.target.value)}}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((option) => (
              <label htmlFor={`variant-${option}`} key={option}>
              <input
                id={`variant-${option}`}
                type="radio"
                name="variant"
                value={option}
                checked={option === variant}
                onChange={event => {setVariant(event.target.value)}}
              />
              {option}
            </label>
            ))}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>
              Pop Toast!
            </Button>
          </div>
        </div>
      </div>
    </form>
    </div>
  );
}

export default ToastPlayground;
