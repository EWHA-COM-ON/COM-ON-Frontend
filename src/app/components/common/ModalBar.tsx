import styles from '@/app/styles/header.module.css';
import fonts from '@/app/styles/fonts.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { barList } from './data/data';
import Delete from '../../../../public/assets/deleteIcon.svg';
import Image from 'next/image';

interface modalBarProps{
    isClicked: boolean;
    setIsClicked: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ModalBar({isClicked, setIsClicked}:modalBarProps){
    const pathname = usePathname();
    
    return(
        <div className={styles.columnBarModal}>
      <div className={`${styles.modalTitleBox} ${fonts.subTitle}`}><div className={styles.deleteBtnBox}><Image src = {Delete} width={18} height={18} alt='' onClick={()=>setIsClicked(!isClicked)} className={styles.deleteBtn}/></div>이화여자대학교 컴퓨터공학전공 학생회</div>
      <div className={styles.modalBarBox}>
      {barList.map((bar,idx) => (
        <Link href={bar.pathname} key={idx} className={pathname === bar.pathname?`${styles.columnClickedBar} ${fonts.bar}`:`${styles.columnBar} ${fonts.bar}`}>
          <div onClick={() => setIsClicked(!isClicked)}>{bar.name}</div>
        </Link>
      ))}</div></div>
    );
}