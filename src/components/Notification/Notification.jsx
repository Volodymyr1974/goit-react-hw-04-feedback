import style from "./Notification.module.css";
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
    return (
        <span className={style.notification}>{message}</span>
    )
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};
export default Notification;