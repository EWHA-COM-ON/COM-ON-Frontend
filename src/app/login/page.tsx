'use client';

import fonts from '@/app/styles/fonts.module.css';
import styles from '@/app/styles/login.module.css';
import { useState } from 'react';
import ErrorIcon from '../../../public/assets/errorIcon.svg';
import Image from 'next/image';

export default function Login() {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [isValidate, setIsValidate] = useState<boolean>(true);

  const handleInputId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleInputPwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickBtn = () => {
    if (id == '') {
      setErrorMsg('아이디를 입력해 주세요.');
      setIsValidate(false);
    } else if (password == '') {
      setErrorMsg('비밀번호를 입력해 주세요.');
      setIsValidate(false);
    } else {
      setErrorMsg('');
      setIsValidate(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={`${styles.title} ${fonts.title}`}>로그인</div>
        <div className={styles.inputBox}>
          <div className={`${styles.subtTitle} ${fonts.placeholder}`}>아이디</div>
          <input
            className={`${styles.input} ${fonts.placeholder}`}
            type="text"
            id="id"
            onChange={handleInputId}
          />
        </div>
        <div className={styles.inputBox}>
          <div className={`${styles.subtTitle} ${fonts.placeholder}`}>비밀번호</div>
          <input
            className={`${styles.input} ${fonts.placeholder}`}
            type="password"
            id="pwd"
            onChange={handleInputPwd}
          />
        </div>
        <div className={`${styles.msg} ${fonts.msg}`}>
          {isValidate ? (
            <></>
          ) : (
            <Image src={ErrorIcon} width={13} height={13} alt="" className={styles.errorIcon} />
          )}
          {errorMsg}
        </div>
        <button className={`${styles.btn} ${fonts.bar}`} onClick={onClickBtn}>
          로그인
        </button>
      </div>
      <div className={`${styles.router} ${fonts.router}`}>
        <button className={styles.routerBtn}>비밀번호 찾기</button>
        <div>|</div>
        <button className={styles.routerBtn}>아이디 찾기</button>
        <div>|</div>
        <button className={styles.routerBtn}>회원가입</button>
      </div>
    </div>
  );
}
