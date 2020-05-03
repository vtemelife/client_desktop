import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Row, Col, Form, Input, Button, Alert } from 'antd';
import { UserOutlined, LockOutlined, MailFilled } from '@ant-design/icons';
import { useMutate } from 'restful-react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

import { _ } from 'utils/trans';

import CLIENT_URLS from 'routes/client';
import SERVER_URLS from 'routes/server';

import styles from './index.module.scss';
import imgLogoBlack from 'styles/img/logoBlack.png';
import imgAgeIcon from 'styles/img/18Plus.svg';

const SignUp = () => {
  const recaptchaRef = useRef();
  const [successAlert, changeSuccessAlert] = useState();
  const [formData, changeFormData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: '',
  });
  const [formErrors, changeFormErrors] = useState({});
  const { mutate, loading } = useMutate({
    verb: 'POST',
    path: SERVER_URLS.SIGN_UP_STEP_1.buildPath(),
  });

  const signUp = async (recaptcha) => {
    try {
      await mutate({ ...formData, recaptcha });
      changeSuccessAlert(_('Confirm registartion e-mail has been sent.'));
      changeFormErrors({});
    } catch (errors) {
      if (errors.status === 400) {
        changeFormErrors(errors.data);
      }
    }
  };

  const onFinish = async () => {
    if (process.env.REACT_APP_GOOGLE_RECAPTCHA_SITEKEY) {
      const recaptcha = recaptchaRef.current.getValue();
      if (!!recaptcha) {
        signUp(recaptcha);
      } else {
        recaptchaRef.current.execute();
      }
    } else {
      signUp('stub_recaptcha');
    }
  };
  return (
    <>
      <Helmet>
        <title>{_('Sign Up')}</title>
        <meta name="description" content={_('Sign Up')} />
      </Helmet>
      <Row justify="center">
        <img className={styles.logo} src={imgLogoBlack} alt={_('V')} />
        <span className={styles.brand}>{_('Teme')}</span>
      </Row>
      <Row justify="center">
        <h1>
          {_('Sign Up')}{' '}
          <img className={styles.ageIcon} src={imgAgeIcon} alt={_('18+')} />
        </h1>
      </Row>
      <Row justify="center">
        <span>{_('Social network for adults')}</span>
      </Row>
      <Row justify="center">
        {successAlert && (
          <Alert
            className={styles.formAlert}
            message={successAlert}
            type="success"
          />
        )}
      </Row>
      <Row justify="center" className={styles.signUpForm}>
        <Col span={6}>
          <Form onFinish={onFinish}>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                },
              ]}
              validateStatus={formErrors.username ? 'error' : undefined}
              help={formErrors.username}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Username"
                value={formData.username}
                onChange={(e) => {
                  changeFormData({ ...formData, username: e.target.value });
                }}
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                },
              ]}
              validateStatus={formErrors.email ? 'error' : undefined}
              help={formErrors.email}
            >
              <Input
                prefix={<MailFilled />}
                placeholder="Email"
                value={formData.email}
                onChange={(e) => {
                  changeFormData({ ...formData, email: e.target.value });
                }}
              />
            </Form.Item>
            <Form.Item
              name="password1"
              rules={[
                {
                  required: true,
                },
              ]}
              validateStatus={formErrors.password1 ? 'error' : undefined}
              help={formErrors.password1}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
                value={formData.password1}
                onChange={(e) => {
                  changeFormData({ ...formData, password1: e.target.value });
                }}
              />
            </Form.Item>
            <Form.Item
              name="password2"
              rules={[
                {
                  required: true,
                },
              ]}
              validateStatus={formErrors.password2 ? 'error' : undefined}
              help={formErrors.password2}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Repeat Password"
                value={formData.password2}
                onChange={(e) => {
                  changeFormData({ ...formData, password2: e.target.value });
                }}
              />
            </Form.Item>

            <Form.Item
              validateStatus={formErrors.non_field_errors ? 'error' : undefined}
              help={formErrors.non_field_errors}
            >
              <Button
                type="primary"
                htmlType="submit"
                className={styles.formBtn}
                loading={loading}
              >
                {_('Sign Up')}
              </Button>
            </Form.Item>
          </Form>
          <Link
            to={CLIENT_URLS.AUTH.SIGN_IN.buildPath()}
            classNAme={styles.signInLink}
          >
            {_('Sign In')}
          </Link>
          {process.env.REACT_APP_GOOGLE_RECAPTCHA_SITEKEY && (
            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA_SITEKEY}
              onChange={(response) => {
                if (response) {
                  signUp(response);
                } else {
                  recaptchaRef.current.execute();
                }
              }}
            />
          )}
        </Col>
      </Row>
    </>
  );
};

export default SignUp;
