import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { NotificationContainer, NotificationManager } from 'react-notifications';

class Notification extends PureComponent {
  getChildContext() {
    return {
      createNotification: this.createNotification,
    };
  }

  createNotification = (type, message) => {
    switch (type) {
      case 'info':
        NotificationManager.info(message);
        break;
      case 'success':
        NotificationManager.success(message);
        break;
      case 'warning':
        NotificationManager.warning(message, 'Close after 3000ms', 3000);
        break;
      case 'error':
        NotificationManager.error(message, 'Click me!', 5000, () => {
          alert('callback');
        });
        break;
    }
  };

  render() {
    return (
      <Fragment>
        <NotificationContainer />
        {this.props.children}
      </Fragment>
    );
  }
}

Notification.childContextTypes = {
  createNotification: PropTypes.func,
};

export default Notification;
