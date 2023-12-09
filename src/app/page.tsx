'use client';
import styles from './styles/home.module.css';
import fonts from './styles/fonts.module.css';
import Link from 'next/link';
import { getWindowSize } from '@/hook/getWindowSize';
import { useQuery } from 'react-query';
import { getScheduleList } from './api/home';
import { useState } from 'react';

export default function Home() {
  const checkMonth = (date: string) => {
    const dateSplit = date.split('-');
    return dateSplit[1];
  };

  const { width } = getWindowSize();
  const [january, setJanuary] = useState<[]>([]);
  const [february, setFebruary] = useState<[]>([]);
  const [march, setMarch] = useState<[]>([]);
  const [april, setApril] = useState<[]>([]);
  const [may, setMay] = useState<[]>([]);
  const [june, setJune] = useState<[]>([]);
  const [july, setJuly] = useState<[]>([]);
  const [august, setAugust] = useState<[]>([]);
  const [september, setSeptember] = useState<[]>([]);
  const [october, setOctober] = useState<[]>([]);
  const [november, setNovember] = useState<[]>([]);
  const [december, setDecember] = useState<[]>([]);

  const { data } = useQuery(['scheduleList'], () => getScheduleList(), {
    onSuccess: data => {
      console.log(data);
      if (checkMonth(data.date.toString()) === '01') {
        setJanuary(data);
      } else if (checkMonth(data.date.toString()) === '02') {
        setFebruary(data);
      } else if (checkMonth(data.date.toString()) === '03') {
        setMarch(data);
      } else if (checkMonth(data.date.toString()) === '04') {
        setApril(data);
      } else if (checkMonth(data.date.toString()) === '05') {
        setMay(data);
      } else if (checkMonth(data.date.toString()) === '06') {
        setJune(data);
      } else if (checkMonth(data.date.toString()) === '07') {
        setJuly(data);
      } else if (checkMonth(data.date.toString()) === '08') {
        setAugust(data);
      } else if (checkMonth(data.date.toString()) === '09') {
        setSeptember(data);
      } else if (checkMonth(data.date.toString()) === '10') {
        setOctober(data);
      } else if (checkMonth(data.date.toString()) === '11') {
        setNovember(data);
      } else if (checkMonth(data.date.toString()) === '12') {
        setDecember(data);
      }
    },
    onError: error => {
      console.log(error);
    },
  });

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
          <div className={`${fonts.placeholder} ${styles.eventText}`}>
            {january.map(data => data)}
          </div>
        </div>
      </div>
    </div>
  );
}
