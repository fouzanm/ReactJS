import style from './Rating.module.css'
import { FaStar } from 'react-icons/fa';

export default function Rating({rating}) {
    const stars = [];
    for (let i = 1; i < rating/2; i++) {
        stars.push(<FaStar key={i} color='#ffbe00' />);
    }
    return (
        <div className={style.container}>
            {stars}
            <p className={style.label}>{rating} Very Good {'>'}</p>
        </div>
    )
}