import type { NextPage } from 'next'
import BubbleSort from '../components/bubbleSort'
import styles from '../styles/Home.module.css'


const BubbleSortPage: NextPage = () => {

    return (
        <div className={styles.container}>
            <BubbleSort />
        </div>
    )
}

export default BubbleSortPage