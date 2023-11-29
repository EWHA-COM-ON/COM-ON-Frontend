import styles from './styles/home.module.css';
import fonts from './styles/fonts.module.css';
import Image from 'next/image';
import Arrow from '../../public/assets/arrow.svg';

export default function Home() {
  return (
  <div className={styles.container}>
    <div className={styles.bannerBox}></div>
    <div className={styles.wrapBox}><div className={styles.btnBox}><div className={`${fonts.bar} ${styles.routerText}`}>이화여자대학교 컴퓨터공학전공 홈페이지</div><div className={`${fonts.smallM} ${styles.routerSubText}`}>바로가기 <Image src={Arrow} width={18} height={16} alt=''/></div></div><div className={styles.btnBox}></div></div>
  </div>);
}
