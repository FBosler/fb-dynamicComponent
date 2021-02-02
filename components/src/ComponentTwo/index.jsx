import styles from '../../../styles/Home.module.css'
import { VictoryPie } from 'victory'

const ComponentTwo = () => {
    return (
        <div className={styles.card}>
            <div style={{ width: '50%' }}>
                This is component Two!!
                <VictoryPie />
            </div>
        </div>
    )
}

export default ComponentTwo
