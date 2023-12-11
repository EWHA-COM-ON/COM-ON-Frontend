'use client';
import styles from './styles/home.module.css';
import fonts from './styles/fonts.module.css';
import Link from 'next/link';
import { getWindowSize } from '@/hook/getWindowSize';
import { useQuery } from 'react-query';
import { getScheduleList } from './api/home';
import { useState } from 'react';

type schedule = {
  name: string;
  info: string;
  date: Date;
};

export default function Home() {
  const { width } = getWindowSize();
  const [january, setJanuary] = useState<schedule[]>([]);
  const [february, setFebruary] = useState<schedule[]>([]);
  const [march, setMarch] = useState<schedule[]>([]);
  const [april, setApril] = useState<schedule[]>([]);
  const [may, setMay] = useState<schedule[]>([]);
  const [june, setJune] = useState<schedule[]>([]);
  const [july, setJuly] = useState<schedule[]>([]);
  const [august, setAugust] = useState<schedule[]>([]);
  const [september, setSeptember] = useState<schedule[]>([]);
  const [october, setOctober] = useState<schedule[]>([]);
  const [november, setNovember] = useState<schedule[]>([]);
  const [december, setDecember] = useState<schedule[]>([]);

  const { data } = useQuery(['scheduleList'], () => getScheduleList(), {
    onSuccess: data => {
      console.log(data);
      setJanuary(data.January);
      setFebruary(data.February);
      setMarch(data.March);
      setApril(data.April);
      setMay(data.May);
      setJune(data.June);
      setJuly(data.July);
      setAugust(data.August);
      setSeptember(data.September);
      setOctober(data.October);
      setNovember(data.November);
      setDecember(data.December);
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
          {january === undefined ? (
            <div className={`${fonts.placeholder} ${styles.eventText}`}>일정이 없습니다.</div>
          ) : (
            <>
              {january.map(data => (
                <div className={`${fonts.placeholder} ${styles.eventText}`}>{data.name}</div>
              ))}
            </>
          )}
          <div className={`${fonts.smallM} ${styles.greyText}`}>2월</div>
          {february === undefined ? (
            <div className={`${fonts.placeholder} ${styles.eventText}`}>일정이 없습니다.</div>
          ) : (
            <>
              {february.map(data => (
                <div className={`${fonts.placeholder} ${styles.eventText}`}>{data.name}</div>
              ))}
            </>
          )}
          <div className={`${fonts.smallM} ${styles.greyText}`}>3월</div>
          {march === undefined ? (
            <div className={`${fonts.placeholder} ${styles.eventText}`}>일정이 없습니다.</div>
          ) : (
            <>
              {march.map(data => (
                <div className={`${fonts.placeholder} ${styles.eventText}`}>{data.name}</div>
              ))}
            </>
          )}
          <div className={`${fonts.smallM} ${styles.greyText}`}>4월</div>
          {april === undefined ? (
            <div className={`${fonts.placeholder} ${styles.eventText}`}>일정이 없습니다.</div>
          ) : (
            <>
              {april.map(data => (
                <div className={`${fonts.placeholder} ${styles.eventText}`}>{data.name}</div>
              ))}
            </>
          )}
          <div className={`${fonts.smallM} ${styles.greyText}`}>5월</div>
          {may === undefined ? (
            <div className={`${fonts.placeholder} ${styles.eventText}`}>일정이 없습니다.</div>
          ) : (
            <>
              {may.map(data => (
                <div className={`${fonts.placeholder} ${styles.eventText}`}>{data.name}</div>
              ))}
            </>
          )}
          <div className={`${fonts.smallM} ${styles.greyText}`}>6월</div>
          {june === undefined ? (
            <div className={`${fonts.placeholder} ${styles.eventText}`}>일정이 없습니다.</div>
          ) : (
            <>
              {june.map(data => (
                <div className={`${fonts.placeholder} ${styles.eventText}`}>{data.name}</div>
              ))}
            </>
          )}
          <div className={`${fonts.smallM} ${styles.greyText}`}>7월</div>
          {july === undefined ? (
            <div className={`${fonts.placeholder} ${styles.eventText}`}>일정이 없습니다.</div>
          ) : (
            <>
              {july.map(data => (
                <div className={`${fonts.placeholder} ${styles.eventText}`}>{data.name}</div>
              ))}
            </>
          )}
          <div className={`${fonts.smallM} ${styles.greyText}`}>8월</div>
          {august === undefined ? (
            <div className={`${fonts.placeholder} ${styles.eventText}`}>일정이 없습니다.</div>
          ) : (
            <>
              {august.map(data => (
                <div className={`${fonts.placeholder} ${styles.eventText}`}>{data.name}</div>
              ))}
            </>
          )}
          <div className={`${fonts.smallM} ${styles.greyText}`}>9월</div>
          {september === undefined ? (
            <div className={`${fonts.placeholder} ${styles.eventText}`}>일정이 없습니다.</div>
          ) : (
            <>
              {september.map(data => (
                <div className={`${fonts.placeholder} ${styles.eventText}`}>{data.name}</div>
              ))}
            </>
          )}
          <div className={`${fonts.smallM} ${styles.greyText}`}>10월</div>
          {october === undefined ? (
            <div className={`${fonts.placeholder} ${styles.eventText}`}>일정이 없습니다.</div>
          ) : (
            <>
              {october.map(data => (
                <div className={`${fonts.placeholder} ${styles.eventText}`}>{data.name}</div>
              ))}
            </>
          )}
          <div className={`${fonts.smallM} ${styles.greyText}`}>11월</div>
          {november === undefined ? (
            <div className={`${fonts.placeholder} ${styles.eventText}`}>일정이 없습니다.</div>
          ) : (
            <>
              {november.map(data => (
                <div className={`${fonts.placeholder} ${styles.eventText}`}>{data.name}</div>
              ))}
            </>
          )}
          <div className={`${fonts.smallM} ${styles.greyText}`}>12월</div>
          {december === undefined ? (
            <div className={`${fonts.placeholder} ${styles.eventText}`}>일정이 없습니다.</div>
          ) : (
            <>
              {december.map(data => (
                <div className={`${fonts.placeholder} ${styles.eventText}`}>{data.name}</div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
