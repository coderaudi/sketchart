import { Button, notification } from 'antd';
// handle all response errors

export function handleError(error) {
    if (error && error.response && error.response.status !== 304) {
      let errorMessage = "";
      if (error.response && error.response.status == 403) {
        errorMessage = "Permission denied";
      } else if (error.response) {
        errorMessage = error.response.data.message;
      } else if (error.request) {
        errorMessage = error.request;
      } else {
        errorMessage = error.message;
      }
    //   NotificationManager.error(errorMessage);
    notification["error"]({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      });
    }
  }