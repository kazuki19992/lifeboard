import type { NextPage } from 'next'
import { cx, css } from '@emotion/css'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import EEW from '../components/organisms/EEW/EEW'

const Home: NextPage = () => {
  return (
    <>
    <div className={cx("w-11/12", "ml-auto", "mr-auto")}>
    </div>
    <EEW place={{ja: "福島沖", en: "Fukushima"}} magnitude={7} />
    </>
  )
}

export default Home
