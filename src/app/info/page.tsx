import styles from '../styles/info.module.css';
import fonts from '../styles/fonts.module.css';

export default function Info() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.sectionBox}>
          <div className={`${styles.title} ${fonts.title}`}>학생회 공약</div>
          <div className={styles.line} />
          <div className={`${styles.textBox} ${fonts.placeholder}`}>안녕하세요.</div>
        </div>
        <div className={styles.sectionBox}>
          <div className={`${styles.title} ${fonts.title}`}>학생회 부원</div>
          <div className={styles.line} />
          <div className={`${styles.textBox} ${fonts.placeholder}`}>안녕하세요.</div>
        </div>
      </div>
    </div>
  );
}
