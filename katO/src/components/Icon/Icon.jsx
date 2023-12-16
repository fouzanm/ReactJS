import style from './Icon.module.css'

export default function Icon({icon, number}) {
    return (
        <div className={style.container}>
            {icon}
            { number && <span className={style.number}>{number}</span>}
        </div>
    )
}