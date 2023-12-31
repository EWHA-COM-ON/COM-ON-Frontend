'use client';

import styles from '@/app/styles/login.module.css';
import fonts from '@/app/styles/fonts.module.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ErrorIcon from '../../../public/assets/errorIcon.svg';

export default function Join() {
  const [name, setName] = useState<string>('');
  const [schoolNum, setSchoolNum] = useState<number>(0);
  const [email, setEmail] = useState<string>('');
  const [phoneNum, setPhoneNum] = useState<number>(0);
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rePassword, setRePassword] = useState<string>('');
  //유효성 검사
  const [validateNameMsg, setValidateNameMsg] = useState<string>('');
  const [isValidateName, setIsValidateName] = useState<boolean>(true);
  const [validateSchoolNumMsg, setValidateSchoolNumMsg] = useState<string>('');
  const [isValidateSchoolNum, setIsValidateSchoolNum] = useState<boolean>(true);
  const [validateEmailMsg, setValidateEmailMsg] = useState<string>('');
  const [isValidateEmail, setIsValidateEmail] = useState<boolean>(true);
  const [validatePhoneNumMsg, setValidatePhoneNumMsg] = useState<string>('');
  const [isValidatePhoneNum, setIsValidatePhoneNum] = useState<boolean>(true);
  const [validateIdMsg, setValidateIdMsg] = useState<string>('');
  const [isValidateId, setIsValidateId] = useState<boolean>(true);
  const [validatePwdMsg, setValidatePwdMsg] = useState<string>('');
  const [isValidatePwd, setIsValidatePwd] = useState<boolean>(true);
  const [validateRePwdMsg, setValidateRePwdMsg] = useState<string>('');
  const [isValidateRePwd, setIsValidateRePwd] = useState<boolean>(true);

  const handleInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const curName = e.target.value;
    setName(curName);
    if (curName == '') {
      setIsValidateName(false);
      setValidateNameMsg('이름을 입력해 주세요.');
    } else {
      setIsValidateName(true);
      setValidateNameMsg('');
    }
  };

  const handleInputSchoolNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    const curSchoolNum = e.target.value;
    setSchoolNum(Number(curSchoolNum));
    if (curSchoolNum == '') {
      setIsValidateSchoolNum(false);
      setValidateSchoolNumMsg('학번을 입력해 주세요.');
    } else {
      setIsValidateSchoolNum(true);
      setValidateSchoolNumMsg('');
    }
  };

  const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const curEmail = e.target.value;
    setEmail(curEmail);
    if (curEmail == '') {
      setIsValidateEmail(false);
      setValidateEmailMsg('이메일을 입력해 주세요.');
    } else {
      setIsValidateEmail(true);
      setValidateEmailMsg('');
    }
  };

  const handleInputPhoneNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 11) {
      e.target.value = e.target.value.slice(0, 11);
    }

    const curPhoneNum = e.target.value;

    setPhoneNum(Number(curPhoneNum));

    if (curPhoneNum == '') {
      setIsValidatePhoneNum(false);
      setValidatePhoneNumMsg('전화번호를 입력해 주세요.');
    } else {
      setIsValidatePhoneNum(true);
      setValidatePhoneNumMsg('');
    }
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

  const onClickBtn = () => {
    if (name == '') {
      setIsValidateName(false);
      setValidateNameMsg('이름을 입력해 주세요.');
    }
    if (schoolNum == 0) {
      setIsValidateSchoolNum(false);
      setValidateSchoolNumMsg('학번을 입력해 주세요.');
    }
    if (email == '') {
      setIsValidateEmail(false);
      setValidateEmailMsg('이메일을 입력해 주세요.');
    }
    if (phoneNum == 0) {
      setIsValidatePhoneNum(false);
      setValidatePhoneNumMsg('전화번호를 입력해 주세요.');
    }
    if (id == '') {
      setIsValidateId(false);
      setValidateIdMsg('아이디를 입력해 주세요.');
    }
    if (password == '') {
      setIsValidatePwd(false);
      setValidatePwdMsg('비밀번호를 입력해 주세요.');
    }
    if (rePassword == '') {
      setIsValidateRePwd(false);
      setValidateRePwdMsg('비밀번호를 입력해 주세요.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.box}>
          <form>
            <div className={`${styles.title} ${fonts.title}`}>회원가입</div>
            <div className={styles.inputBox}>
              <div className={`${styles.subtTitle} ${fonts.placeholder}`}>이름</div>
              <input
                className={
                  isValidateName
                    ? `${styles.input} ${fonts.placeholder}`
                    : `${styles.errorInput} ${fonts.placeholder}`
                }
                type="text"
                id="name"
                onChange={handleInputName}
              />
              <div className={`${styles.msg} ${fonts.msg}`}>
                {!isValidateName ? (
                  <Image
                    src={ErrorIcon}
                    width={13}
                    height={13}
                    alt=""
                    className={styles.errorIcon}
                  />
                ) : (
                  <></>
                )}
                {validateNameMsg}
              </div>
            </div>
            <div className={styles.inputBox}>
              <div className={`${styles.subtTitle} ${fonts.placeholder}`}>학번</div>
              <input
                className={
                  isValidateSchoolNum
                    ? `${styles.input} ${fonts.placeholder}`
                    : `${styles.errorInput} ${fonts.placeholder}`
                }
                type="number"
                id="schoolNum"
                placeholder="ex.2071022"
                onChange={handleInputSchoolNum}
              />
              <div className={`${styles.msg} ${fonts.msg}`}>
                {!isValidateSchoolNum ? (
                  <Image
                    src={ErrorIcon}
                    width={13}
                    height={13}
                    alt=""
                    className={styles.errorIcon}
                  />
                ) : (
                  <></>
                )}
                {validateSchoolNumMsg}
              </div>
            </div>
            <div className={styles.inputBox}>
              <div className={`${styles.subtTitle} ${fonts.placeholder}`}>이메일</div>
              <div className={styles.email}>
                <input
                  className={
                    isValidateEmail
                      ? `${styles.input} ${fonts.placeholder}`
                      : `${styles.errorInput} ${fonts.placeholder}`
                  }
                  type="text"
                  id="email"
                  onChange={handleInputEmail}
                />
                <div
                  className={isValidateEmail ? fonts.email : `${fonts.email} ${styles.errorEmail}`}
                >
                  @ewhain.net
                </div>
              </div>
              <div className={`${styles.msg} ${fonts.msg}`}>
                {!isValidateEmail ? (
                  <Image
                    src={ErrorIcon}
                    width={13}
                    height={13}
                    alt=""
                    className={styles.errorIcon}
                  />
                ) : (
                  <></>
                )}
                {validateEmailMsg}
              </div>
            </div>
            <div className={styles.inputBox}>
              <div className={`${styles.subtTitle} ${fonts.placeholder}`}>전화번호</div>
              <input
                className={
                  isValidatePhoneNum
                    ? `${styles.input} ${fonts.placeholder}`
                    : `${styles.errorInput} ${fonts.placeholder}`
                }
                type="number"
                id="tel"
                onChange={handleInputPhoneNum}
              />
              <div className={`${styles.msg} ${fonts.msg}`}>
                {!isValidatePhoneNum ? (
                  <Image
                    src={ErrorIcon}
                    width={13}
                    height={13}
                    alt=""
                    className={styles.errorIcon}
                  />
                ) : (
                  <></>
                )}
                {validatePhoneNumMsg}
              </div>
            </div>
            <div className={styles.inputBox}>
              <div className={`${styles.subtTitle} ${fonts.placeholder}`}>아이디</div>
              <input
                className={
                  isValidateId
                    ? `${styles.input} ${fonts.placeholder}`
                    : `${styles.errorInput} ${fonts.placeholder}`
                }
                type="text"
                id="id"
                onChange={handleInputId}
              />
              <div className={`${styles.msg} ${fonts.msg}`}>
                {' '}
                {!isValidateId ? (
                  <Image
                    src={ErrorIcon}
                    width={13}
                    height={13}
                    alt=""
                    className={styles.errorIcon}
                  />
                ) : (
                  <></>
                )}
                {validateIdMsg}
              </div>
            </div>
            <div className={styles.inputBox}>
              <div className={`${styles.subtTitle} ${fonts.placeholder}`}>비밀번호</div>
              <input
                className={
                  isValidatePwd
                    ? `${styles.input} ${fonts.placeholder}`
                    : `${styles.errorInput} ${fonts.placeholder}`
                }
                type="password"
                id="pwd"
                onChange={handleInputPwd}
              />
              <div className={`${styles.msg} ${fonts.msg}`}>
                {' '}
                {!isValidatePwd ? (
                  <Image
                    src={ErrorIcon}
                    width={13}
                    height={13}
                    alt=""
                    className={styles.errorIcon}
                  />
                ) : (
                  <></>
                )}
                {validatePwdMsg}
              </div>
            </div>
            <div className={styles.inputBox}>
              <div className={`${styles.subtTitle} ${fonts.placeholder}`}>비밀번호 확인</div>
              <input
                className={
                  isValidateRePwd
                    ? `${styles.input} ${fonts.placeholder}`
                    : `${styles.errorInput} ${fonts.placeholder}`
                }
                type="password"
                id="rePwd"
                onChange={handleInputRePwd}
                autoComplete="new-password" //자동완성 금지
              />
              <div className={`${styles.msg} ${fonts.msg}`}>
                {!isValidateRePwd ? (
                  <Image
                    src={ErrorIcon}
                    width={13}
                    height={13}
                    alt=""
                    className={styles.errorIcon}
                  />
                ) : (
                  <></>
                )}
                {validateRePwdMsg}
              </div>
            </div>
            <button className={`${styles.btn} ${fonts.bar}`} onClick={onClickBtn}>
              회원가입
            </button>
          </form>
        </div>
        <div className={styles.router}>
          <button className={`${styles.routerBtn} ${fonts.router}`}>비밀번호 찾기</button>
          <div className={fonts.router}>|</div>
          <button className={`${styles.routerBtn} ${fonts.router}`}>아이디 찾기</button>
          <div className={fonts.router}>|</div>
          <Link href={'/login'}>
            <button className={`${styles.routerBtn} ${fonts.router}`}>로그인</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
