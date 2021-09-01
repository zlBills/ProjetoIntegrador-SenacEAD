/* eslint-disable prettier/prettier */
import PushNotification, { Importance } from 'react-native-push-notification';

class NotificationManager {

    criarCanal = () => {
        PushNotification.createChannel(
            {
                channelId: 'channel-id', // (required)
                channelName: 'My channel', // (required)
                channelDescription:'A channel to categorise your notifications', // (optional) default: undefined
                playSound: false, // (optional) default: true
                soundName: 'default', // (optional) See 'soundName' parameter of 'localNotification' function
                importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
                vibrate: true, // (optional) default: true, Creates the default vibration patten if true.
            },
            (created) => console.log('createChannel returned ','${created}') // (optional) callback returns whether ther channel was created, false means it already existed
        );
    }

    // Configuração orientada pela documentação do React Native Push Notification
    // Essa configuração garante o funcionamento da biblioteca no Android e no iOS
    configure = () => {
        PushNotification.configure({
            onRegister: function (token) {
                console.log('[NotificationManager] onRegister token:', token);
            },
            onNotification: function (notification) {
                console.log('[NotificationManager] onNotification:', notification);
            },
        });
    }

    // É aqui que nossa notificação para o Android é construida
    buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
        return {
            id: id,
            autoCancel: true,
            channelId: 'channel-id',
            largeIcon: options.largeIcon || 'ic_launcher',
            smallIcon: options.smallIcon || 'ic_launcher',
            bigText: message || '',
            subText: title || '',
            vibrate: options.vibrate || false,
            vibration: options.vibration || 300,
            priority: options.priority || 'high',
            importance: options.importance || 'high',
            data: data,
        };
    }

    // Fução que exibe a notificação
    showNotification = (id, title, message, data = {}, options = {}) => {
        PushNotification.localNotification({
            /* Propriedades do Android */
            ...this.buildAndroidNotification(id, title, message, data, options),

            /* Propriedades do Android e iOS */
            title: title || '',
            message: message || '',
            playSound: options.playSound || false,
            soundName: options.soundName || 'default',
            userInteraction: false,
        });
    }

    // Função que cancela todas notiificações e limpa as que estão no centro de notificações
    cancelAllLocalNotification = () => {
        PushNotification.cancelAllLocalNotifications();
    }

    //Notificações agendadas
    agendarNotificacao() {
        PushNotification.localNotificationSchedule({
            id:1,
            channelId: 'channel-id',
            repeatType: 'time',
            repeatTime: 5 * 60 * 1000,
            //... You can use all the options from localNotifications
            title: 'VAMOS LER',
            message: 'Descubra o desfecho da Grande Guerra!', // (required)
            date: new Date(Date.now() + 5 * 1000), // in 5 secs
            allowWhileIdle: true, // (optional) set notification to work while on doze, default: false

        });

        PushNotification.localNotificationSchedule({
            id:2,
            channelId: 'channel-id',
            repeatType: 'time',
            repeatTime: 7 * 60 * 1000,
            //... You can use all the options from localNotifications
            title: 'CONHEÇA PIGMEU E OUTROS',
            message: 'Conheça os Maiores Guerreiros de cada Clã!', // (required)
            date: new Date(Date.now() + 30 * 1000), // in 30 secs
            allowWhileIdle: true, // (optional) set notification to work while on doze, default: false

        });

        PushNotification.localNotificationSchedule({
            id:3,
            channelId: 'channel-id',
            repeatType: 'time',
            repeatTime: 9 * 60 * 1000,
            //... You can use all the options from localNotifications
            title: 'VENHA SABER MAIS!',
            message: 'Veja como surgiu a ideia de The Knight!', // (required)
            date: new Date(Date.now() + 60 * 1000), // in 60 secs
            allowWhileIdle: true, // (optional) set notification to work while on doze, default: false
            /* Android Only Properties */

        });
    }



}

export const notificationManager = new NotificationManager();
