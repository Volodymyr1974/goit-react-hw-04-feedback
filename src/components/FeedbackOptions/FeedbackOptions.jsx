import style from "./FeedbackOptions.module.css";
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (<ul className={style.button_list}>
        {options.map(option => (
            <li key={option} >
                <button
                    onClick={() => onLeaveFeedback(option)}
                    className={style.button}
                >
                    {option}
                </button>
            </li>
        )
        )}
    </ul>)
};
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;