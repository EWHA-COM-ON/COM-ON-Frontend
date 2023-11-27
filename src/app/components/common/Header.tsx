'use client'
import styles from '@/app/styles/header.module.css';
import fonts from '@/app/styles/fonts.module.css';
import Link from 'next/link';
import { getWindowSize } from '@/hook/getWindowSize';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const {width} = getWindowSize();

  const barList = [
    { id: 0, name: '학생회 소개', pathname: '/' },
    { id: 1, name: '학생회 정보', pathname: '/' },
    { id: 2, name: '질문 게시판', pathname: '/' },
    { id: 3, name: '행사 신청', pathname: '/' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.topBox}>
      <div className={`${styles.loginBtn} ${fonts.router}`}>
        <Link href={'/login'} className={styles.btn}>로그인</Link>/<Link href={'/join'} className={styles.btn}>회원가입</Link>
      </div>
      </div>
      <div className = {styles.bottomBox}>
      <Link href = {'/'} className={styles.logo}>
      <img src='https://i.ibb.co/SNGMqNq/logo.png' width={234} height={44} alt="" />
      </Link>
      <div className={styles.barList}>
        {barList.map(bar => (
          <div className={styles.barSet}>
          <Link href={bar.pathname} key={bar.id}>
            <div className={pathname === bar.pathname?`${styles.clickedBar} ${fonts.bar}`:`${styles.bar} ${fonts.bar}`}>{bar.name}</div>
          </Link>
          {pathname === bar.pathname?<div className={styles.line}></div>:<></>}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
