import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Row, Col, Form, Input, Button, Alert } from 'antd';
import { MailFilled } from '@ant-design/icons';
import { useMutate } from 'restful-react';
import { Link } from 'react-router-dom';

import { _ } from 'utils/trans';

import CLIENT_URLS from 'routes/client';
import SERVER_URLS from 'routes/server';

import imgLogoBlack from 'styles/img/logoBlack.png';
import styles from './index.module.scss';

const ResetPassword = () => {
  const [successAlert, changeSuccessAlert] = useState();
  const [formData, changeFormData] = useState({
    email: '',
  });
  const [formErrors, changeFormErrors] = useState({});
  const { mutate, loading } = useMutate({
    verb: 'POST',
    path: SERVER_URLS.RESET_PASSWORD_STEP_1.buildPath(),
  });

  const onFinish = async (values) => {
    try {
      const response = await mutate(values);
      changeSuccessAlert(response.detail);
      changeFormErrors({});
    } catch (errors) {
      if (errors.status === 400) {
        changeFormErrors(errors.data);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{_('Reset your password')}</title>
        <meta name="description" content={_('Reset your password')} />
      </Helmet>
      <Row justify="center">
        <img className={styles.logo} src={imgLogoBlack} alt={_('V')} />
        <span className={styles.brand}>{_('Teme')}</span>
      </Row>
      <Row justify="center">
        <h1 className={styles.title}>{_('Reset your password')}</h1>
      </Row>
      <Row justify="center" className={styles.signInForm}>
        {successAlert && (
          <Alert
            className={styles.formAlert}
            message={successAlert}
            type="success"
          />
        )}
      </Row>
      <Row justify="center" className={styles.resetPasswordForm}>
        <Col span={6}>
          <Form onFinish={onFinish} layout="vertical">
            <Form.Item
              label={_('Email')}
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
                placeholder={_('Email')}
                value={formData.email}
                onChange={(e) => {
                  changeFormData({ ...formData, email: e.target.value });
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
                {_('Send email with a link to reset your password')}
              </Button>
            </Form.Item>
            <Link
              className={styles.signInLink}
              to={CLIENT_URLS.AUTH.SIGN_IN.buildPath()}
            >
              {_('Sign In')}
            </Link>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default ResetPassword;
