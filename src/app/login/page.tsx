'use client';
import styles from '@/app/styles/login.module.css';
import { useState } from 'react';

export default function Login() {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleInputId = (e: any) => {
    setId(e.target.value);
  };

  const handleInputPwd = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.title}>로그인</div>
        <input
          type="text"
          id="id"
          placeholder="아이디"
          className={styles.id}
          onChange={handleInputId}
        />
        <input
          type="password"
          id="pwd"
          placeholder="비밀번호"
          className={styles.pwd}
          onChange={handleInputPwd}
        />
        <button className={styles.btn}>로그인</button>
      </div>
    </div>
  );
}
