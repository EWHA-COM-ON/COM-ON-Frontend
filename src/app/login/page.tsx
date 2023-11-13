'use client';

import fonts from '@/app/styles/fonts.module.css';
import styles from '@/app/styles/login.module.css';
import { useState } from 'react';

export default function Login() {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleInputId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleInputPwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={`${styles.title} ${fonts.title}`}>로그인</div>
        <input
          className={`${styles.inputBox} ${fonts.placeholder}`}
          type="text"
          id="id"
          placeholder="아이디"
          onChange={handleInputId}
        />
        <input
          className={`${styles.inputBox} ${fonts.placeholder}`}
          type="password"
          id="pwd"
          placeholder="비밀번호"
          onChange={handleInputPwd}
        />
        <button className={styles.btn}>로그인</button>
      </div>
    </div>
  );
}
