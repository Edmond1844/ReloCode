import styles from './ServicePageIntro.module.css'

export function ServicePageIntro({title}) {
    return (
        <div className={styles.service__page} >
            <h2 className={styles.service__title}>{title}</h2>
        </div>
    )
}