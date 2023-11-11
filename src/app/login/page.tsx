import styles from '@/app/styles/login.module.css';
import { useState } from 'react';

export default function Login() {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.title}>로그인</div>
        <input type="text" id="id" />
        <input type="text" id="pwd" />
      </div>
    </div>
  );
}
