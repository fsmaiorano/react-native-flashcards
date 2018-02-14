import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

import { NOTIFICATION } from './constants';

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();

              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(21);
              tomorrow.setMinutes(0);

              Notifications.scheduleLocalNotificationAsync(
                createLocalNotification(),
                {
                  time: tomorrow,
                  repeat: 'day'
                }
              );

              AsyncStorage.setItem(NOTIFICATION, JSON.stringify(true));
            }
          });
      }
    });
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function createLocalNotification() {
  return {
    title: "Let's Quiz!",
    body: "👋 Don't forget today's quiz!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  };
}