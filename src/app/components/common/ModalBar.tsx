import styles from '@/app/styles/header.module.css';
import fonts from '@/app/styles/fonts.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { barList } from './data/data';

interface modalBarProps{
    isClicked: boolean;
    setIsClicked: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ModalBar({isClicked, setIsClicked}:modalBarProps){
    const pathname = usePathname();
    
    return(
        <div className={styles.columnBarModal}><div><div className={styles.topBox}>
      <div className={`${styles.loginBtn} ${fonts.router}`}>
        <Link href={'/login'} className={styles.btn}>로그인</Link>/<Link href={'/join'} className={styles.btn}>회원가입</Link>
      </div>
      </div>
      <div className={styles.modalTitleBox}></div></div>{barList.map((bar,idx) => (
        <Link href={bar.pathname} key={idx}>
          <div className={pathname === bar.pathname?`${styles.columnClickedBar} ${fonts.bar}`:`${styles.columnBar} ${fonts.bar}`} onClick={() => setIsClicked(!isClicked)}>{bar.name}</div>
        </Link>
      ))}</div>
    );
}