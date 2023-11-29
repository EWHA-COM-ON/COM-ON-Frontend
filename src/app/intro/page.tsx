import styles from '../styles/info.module.css';
import fonts from '../styles/fonts.module.css';

export default function Intro() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.sectionBox}>
          <div className={`${styles.title} ${fonts.title}`}>인사말</div>
          <div className={styles.line} />
          <div className={`${styles.textBox} ${fonts.placeholder}`}>안녕하세요.</div>
        </div>
        <div className={styles.sectionBox}>
          <div className={`${styles.title} ${fonts.title}`}>주소 / 연락처</div>
          <div className={styles.line} />
          <div className={styles.textBox}>
            <div className={styles.textLine}>
              <div className={styles.subTitle}>
                <div className={fonts.smallM}>주소</div>
                <div className={fonts.smallM}>|</div>
              </div>
              <div className={fonts.placeholder}>
                서울특별시 서대문구 신촌동 34-1 이화여자대학교 공과대학
              </div>
            </div>
            <div className={styles.textLine}>
              <div className={styles.subTitle}>
                <div className={fonts.smallM}>위치</div>
                <div className={fonts.smallM}>|</div>
              </div>
              <div className={fonts.placeholder}>신공학관 B257 학생회실</div>
            </div>
            <div className={styles.textLine}>
              <div className={styles.subTitle}>
                <div className={fonts.smallM}>전화</div>
                <div className={fonts.smallM}>|</div>
              </div>
              <div className={fonts.placeholder}>010-1234-1234</div>
            </div>
            <div className={styles.textLine}>
              <div className={styles.subTitle}>
                <div className={fonts.smallM}>메일</div>
                <div className={fonts.smallM}>|</div>
              </div>
              <div className={fonts.placeholder}>ewha.cse.2023@gmail.com</div>
            </div>
            <div className={styles.textLine}>
              <div className={styles.subTitle}>
                <div className={fonts.smallM}>카카오톡</div>
                <div className={fonts.smallM}>|</div>
              </div>
              <div className={fonts.placeholder}>@ewhacse</div>
            </div>
            <div className={styles.textLine}>
              <div className={styles.subTitle}>
                <div className={fonts.smallM}>인스타그램</div>
                <div className={fonts.smallM}>|</div>
              </div>
              <div className={fonts.placeholder}>ewha.cse2023</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
