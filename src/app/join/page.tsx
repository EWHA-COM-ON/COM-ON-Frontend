'use client';

import styles from '@/app/styles/login.module.css';
import { useState } from 'react';

export default function Join() {
  const [name, setName] = useState<string>('');
  const [schoolNum, setSchoolNum] = useState<number>(0);
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rePassword, setRePassword] = useState<string>('');
  //유효성 검사
  const [validateIdMsg, setValidateIdMsg] = useState<string>('');
  const [isValidateId, setIsValidateId] = useState<boolean>(false);
  const [validatePwdMsg, setValidatePwdMsg] = useState<string>('');
  const [isValidatePwd, setIsValidatePwd] = useState<boolean>(false);
  const [validateRePwdMsg, setValidateRePwdMsg] = useState<string>('');
  const [isValidateRePwd, setIsValidateRePwd] = useState<boolean>(false);

  const handleInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const curName = e.target.value;
    setName(curName);
  };

  const handleInputSchoolNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    const curSchoolNum = Number(e.target.value);
    setSchoolNum(curSchoolNum);
  };

  const handleInputId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const curId = e.target.value;
    setId(curId);
    const validateId = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{5,20}$/;

    if (!validateId.test(curId)) {
      setIsValidateId(false);
      setValidateIdMsg('영문 대/소문자, 숫자, 특수문자를 사용해 주세요. (5-20자)');
      if (curId == '') {
        setValidateIdMsg('아이디를 입력해 주세요.');
      }
    } else {
      setIsValidateId(true);
      setValidateIdMsg('');
    }
  };

  const handleInputPwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const curPassword = e.target.value;
    setPassword(curPassword);
    const validatePwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{5,20}$/;

    if (!validatePwd.test(curPassword)) {
      setIsValidatePwd(false);
      setValidatePwdMsg('영문 대/소문자, 숫자, 특수문자를 사용해 주세요. (5-20자)');
      if (curPassword == '') {
        setValidatePwdMsg('비밀번호를 입력해 주세요.');
      }
    } else {
      setIsValidatePwd(true);
      setValidatePwdMsg('');
    }
  };

  const handleInputRePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const curRePassword = e.target.value;
    setRePassword(curRePassword);

    if (curRePassword !== password) {
      setIsValidateRePwd(false);
      setValidateRePwdMsg('비밀번호가 다릅니다.');
      if (curRePassword == '') {
        setValidateRePwdMsg('비밀번호를 입력해 주세요.');
      }
    } else {
      setIsValidateRePwd(true);
      setValidateRePwdMsg('');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.title}>회원가입</div>
        <input type="text" id="name" placeholder="이름" onChange={handleInputName} />
        <input type="text" id="schoolNum" placeholder="학번" onChange={handleInputSchoolNum} />
        <div>(ex.2071022)</div>
        <input type="text" id="id" placeholder="아이디" onChange={handleInputId} />
        {isValidateId ? <div>{validateIdMsg}</div> : <></>}
        <input type="password" id="pwd" placeholder="비밀번호" onChange={handleInputPwd} />
        {isValidatePwd ? <div>{validatePwdMsg}</div> : <></>}
        <input type="password" id="rePwd" placeholder="비밀번호 확인" onChange={handleInputRePwd} />
        {isValidateRePwd ? <div>{validateRePwdMsg}</div> : <></>}
        <button className={styles.btn}>회원가입</button>
      </div>
    </div>
  );
}
