import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/bubble-sort">
            <a>Bubble Sort</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
