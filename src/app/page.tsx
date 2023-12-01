'use client';
import styles from './styles/home.module.css';
import fonts from './styles/fonts.module.css';
import Link from 'next/link';
import { UseWindowSize } from '@/hook/UseWindowSize';

export default function Home() {
  const { width } = UseWindowSize();

  return (
    <div className={styles.container}>
      <div className={styles.bannerBox}></div>
      <div className={styles.wrapBox}>
        <Link
          href={'https://cse.ewha.ac.kr/cse/index.do'}
          className={styles.btnBox}
          target="_blank"
        >
          <div className={`${fonts.bar} ${styles.greyText}`}>
            이화여자대학교 컴퓨터공학전공 홈페이지
          </div>
          <div className={`${fonts.smallM} ${styles.routerSubText}`}>바로가기 </div>
        </Link>
        <Link
          href={'https://www.ewha.ac.kr/ewha/index.do'}
          className={styles.btnBox}
          target="_blank"
        >
          <div className={`${fonts.bar} ${styles.greyText}`}>이화여자대학교 홈페이지</div>
          <div className={`${fonts.smallM} ${styles.routerSubText}`}>바로가기 </div>
        </Link>
      </div>
      <div className={width >= 738 ? styles.event : styles.smallerEvent}>
        <div className={`${styles.greyText} ${fonts.bar}`}>행사 일정</div>
        <div className={styles.eventBox}>
          <div className={`${fonts.smallM} ${styles.greyText}`}>1월</div>
          <div className={`${fonts.placeholder} ${styles.eventText}`}>졸업식</div>
        </div>
      </div>
    </div>
  );
}
