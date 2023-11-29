'use client';
import styles from '@/app/styles/header.module.css';
import fonts from '@/app/styles/fonts.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { getWindowSize } from '@/hook/getWindowSize';
import { usePathname } from 'next/navigation';
import BarIcon from '../../../../public/assets/barIcon.svg';
import { barList } from './data/data';
import ModalBar from './ModalBar';

export default function Header() {
  const pathname = usePathname();
  const { width } = getWindowSize();
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.topBox}>
        <div className={`${styles.loginBtn} ${fonts.router}`}>
          <Link href={'/login'} className={styles.btn}>
            로그인
          </Link>
          /
          <Link href={'/join'} className={styles.btn}>
            회원가입
          </Link>
        </div>
      </div>
      <div className={styles.bottomBox}>
        <Link href={'/'} className={styles.logo}>
          <img src="https://i.ibb.co/SNGMqNq/logo.png" width={234} height={44} alt="" />
        </Link>
        {width >= 1000 ? (
          <div className={styles.barList}>
            {barList.map((bar, idx) => (
              <div className={styles.barSet} key={idx}>
                <Link href={bar.pathname}>
                  <div className={`${styles.bar} ${fonts.bar}`}>{bar.name}</div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <>
            {isClicked ? (
              <ModalBar isClicked={isClicked} setIsClicked={setIsClicked} />
            ) : (
              <div className={styles.barIcon}>
                {' '}
                <Image
                  src={BarIcon}
                  width={30}
                  height={30}
                  alt=""
                  key="barIcon"
                  onClick={() => setIsClicked(!isClicked)}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
