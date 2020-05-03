import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Row, Col, Form, Input, Button, Alert } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { useMutate } from 'restful-react';
import { useRouteMatch } from 'react-router-dom';

import { _ } from 'utils/trans';

import SERVER_URLS from 'routes/server';

import styles from './index.module.scss';

const ResetPasswordConfirm = () => {
  const match = useRouteMatch();
  const { uid, token } = match.params;
  const [successAlert, changeSuccessAlert] = useState();
  const [formData, changeFormData] = useState({
    new_password1: '',
    new_password2: '',
  });
  const [formErrors, changeFormErrors] = useState({});
  const { mutate, loading } = useMutate({
    verb: 'POST',
    path: SERVER_URLS.RESET_PASSWORD_STEP_2.buildPath(),
  });

  const onFinish = async (values) => {
    try {
      await mutate({
        ...values,
        uid,
        token,
      });
      changeSuccessAlert(_('Password has been reset with the new password.'));
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
        <h1>{_('Reset your password')}</h1>
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
      <Row justify="center">
        <Col span={6}>
          <Form onFinish={onFinish} layout="vertical">
            <Form.Item
              name="new_password1"
              label={_('Password')}
              rules={[
                {
                  required: true,
                },
              ]}
              validateStatus={formErrors.new_password1 ? 'error' : undefined}
              help={formErrors.new_password1}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder={_('Password')}
                value={formData.new_password1}
                onChange={(e) => {
                  changeFormData({
                    ...formData,
                    new_password1: e.target.value,
                  });
                }}
              />
            </Form.Item>
            <Form.Item
              name="new_password2"
              label={_('Repeat Password')}
              rules={[
                {
                  required: true,
                },
              ]}
              validateStatus={formErrors.new_password2 ? 'error' : undefined}
              help={formErrors.new_password2}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder={_('Repeat Password')}
                value={formData.new_password2}
                onChange={(e) => {
                  changeFormData({
                    ...formData,
                    new_password2: e.target.value,
                  });
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
                {_('Reset password')}
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default ResetPasswordConfirm;
