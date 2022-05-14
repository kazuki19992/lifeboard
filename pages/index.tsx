import type { NextPage } from 'next'
import { cx, css } from '@emotion/css'
import EEW from '../components/organisms/EEW/EEW'

const Home: NextPage = () => {
  return (
    <>
    <div className={cx("w-11/12", "mx-auto")}>
      <div className={cx("flex", "items-center", "space-x-1", "justify-between")}>

      </div>
    </div>
    <div className={cx()}>
      <EEW place={{ja: "${震源}", en: "${PlaceName}"}} magnitude={8} />
    </div>
    </>
  )
}

export default Home
