import React from 'react';
import cn from 'classnames';

import Button from 'Shared/Button';
import styles from './MessageForm.scss';
import { checkEmail, checkName, checkMessage } from './utils';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      error: null,
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onNameBlur = this.onNameBlur.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onEmailBlur = this.onEmailBlur.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.onMessageBlur = this.onMessageBlur.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    const {
      name,
      email,
      message,
    } = this.state;

    const isValidName = checkName(name);
    const isValidEmail = checkEmail(email);
    const isValidMessage = checkMessage(message);

    if (isValidName && isValidEmail && isValidMessage) {
      this.setState({
        name: '',
        email: '',
        message: '',
      });
    } else {
      this.setState({
        error: {
          name: !isValidName,
          email: !isValidEmail,
          message: !isValidMessage,
        },
      });
    }
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onNameBlur() {
    const { name, error } = this.state;

    if (!checkName(name)) {
      this.setState({
        error: {
          ...error,
          name: true,
        },
      });
    } else {
      this.setState({
        error: {
          ...error,
          name: false,
        },
      });
    }
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onEmailBlur() {
    const { email, error } = this.state;

    if (!checkEmail(email)) {
      this.setState({
        error: {
          ...error,
          email: true,
        },
      });
    } else {
      this.setState({
        error: {
          ...error,
          email: false,
        },
      });
    }
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  onMessageBlur() {
    const { message, error } = this.state;
    if (!checkMessage(message)) {
      this.setState({
        error: {
          ...error,
          message: true,
        },
      });
    } else {
      this.setState({
        error: {
          ...error,
          message: false,
        },
      });
    }
  }

  render() {
    const {
      name,
      email,
      message,
      error,
    } = this.state;

    const isDisabled = error && (error.name || error.email);

    return (
      <form
        onSubmit={this.onSubmit}
        className={styles.formContainer}
      >
        <div className={styles.fields}>
          <div className={styles.userInfo}>
            <input
              className={cn(styles.infoField, {
                [styles.fieldError]: error && error.name,
              })}
              type="text"
              name="name"
              placeholder="Your Name*"
              value={name}
              onChange={this.onNameChange}
              onBlur={this.onNameBlur}
            />
            <input
              className={cn(styles.infoField, {
                [styles.fieldError]: error && error.email,
              })}
              type="email"
              name="email"
              placeholder="Your Email*"
              value={email}
              onChange={this.onEmailChange}
              onBlur={this.onEmailBlur}
            />
          </div>
          <textarea
            className={cn(styles.messageField, {
              [styles.fieldError]: error && error.message,
            })}
            type="text"
            name="message"
            placeholder="Your Message*"
            value={message}
            onChange={this.onMessageChange}
            onBlur={this.onMessageBlur}
          />
        </div>
        <Button
          disabled={isDisabled}
          btnType="submit"
          className={styles.button}
          label="send message"
          value="Submit"
        />
      </form>
    );
  }
}

export default MessageForm;