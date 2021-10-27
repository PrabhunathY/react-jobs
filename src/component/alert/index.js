import { toast } from 'react-toastify';
import * as styles from './styles.css';
import { AlertConst, MessageType } from '../../Constants';

export class Toster {

    static success = (message, timeInSecond = AlertConst.defaultTimeOut) => {
        return toast.success(message, {
            position: toast.POSITION.TOP_CENTER,
            className: styles._alertSucess,
            progressClassName: styles._alertProgress,
            autoClose: timeInSecond
        });
    };

    static error = (message, timeInSecond = AlertConst.defaultTimeOut) => {

        return toast.error(message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: timeInSecond
        });
    };

    static info = (message, timeInSecond = AlertConst.defaultTimeOut) => {

        return toast.info(message, {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: timeInSecond
        });
    };

    static warn = (message, timeInSecond = AlertConst.defaultTimeOut) => {
        return toast.warn(message, {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: timeInSecond
        });
    };

    static notify(message, timeInSecond = AlertConst.defaultTimeOut) {
        var tostId = [];
        message.forEach(function (msg, index) {
            if (msg.type === MessageType.Error) {
                tostId.push(Toster.error(msg.value, timeInSecond));
            }
            else if (msg.type === MessageType.Info) {
                tostId.push(Toster.info(msg.value, timeInSecond));
            }
            else if (msg.type === MessageType.Warn) {
                tostId.push(Toster.warn(msg.value, timeInSecond));
            }
        });
        return tostId;
    }

    static dismiss = (toastId) => toast.dismiss(toastId);

    static dismissAll = (toastId) => toast.dismiss();
}

