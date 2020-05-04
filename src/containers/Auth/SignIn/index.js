import React, { useState, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  LoginOutlined,
  EnterOutlined,
} from '@ant-design/icons';
import { useMutate } from 'restful-react';
import { useHistory, Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { _ } from 'utils/trans';

import { AuthUserContext } from 'containers/ContextProviders/AuthUserService';
import CLIENT_URLS from 'routes/client';
import SERVER_URLS from 'routes/server';

import SelectLocale from 'components/SelectLocale';

import styles from './index.module.scss';

const SignIn = () => {
  const history = useHistory();
  const location = useLocation();
  const authUserContext = useContext(AuthUserContext);
  const [formData, changeFormData] = useState({
    email_or_slug: '',
    password: '',
  });
  const [formErrors, changeFormErrors] = useState({});
  const { mutate, loading } = useMutate({
    verb: 'POST',
    path: SERVER_URLS.SIGN_IN.buildPath(),
  });

  const onFinish = async (values) => {
    try {
      await mutate(values);
      changeFormErrors({});
      const search = queryString.parse(location.search);

      if (search.next) {
        window.location.href = search.next;
      } else {
        authUserContext.authUser.refetch();
        history.push(CLIENT_URLS.DASHBOARD.INDEX.buildPath());
      }
    } catch (errors) {
      if (errors.status === 400) {
        changeFormErrors(errors.data);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{_('Sign in')}</title>
        <meta name="description" content={_('Sign in')} />
      </Helmet>
      <SelectLocale className={styles.selectLocale} />
      <Row justify="center">
        <div className="auth-brand-logo" />
        <span className="auth-brand-title">{_('Teme')}</span>
      </Row>
      <Row justify="center">
        <h1>{_('Sign In')}</h1>
        <div className="auth-age" />
      </Row>
      <Row justify="center">
        <span>{_('Social network for adults')}</span>
      </Row>
      <Row justify="center" className={styles.signInForm}>
        <Col span={6}>
          <Form
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              label={_('Email or Username')}
              name="email_or_slug"
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
                placeholder={_('Email or Username')}
                value={formData.email_or_slug}
                onChange={(e) => {
                  changeFormData({
                    ...formData,
                    email_or_slug: e.target.value,
                  });
                }}
              />
            </Form.Item>
            <Form.Item
              label={_('Password')}
              name="password"
              rules={[
                {
                  required: true,
                },
              ]}
              validateStatus={formErrors.password ? 'error' : undefined}
              help={formErrors.password}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder={_('Password')}
                value={formData.password}
                onChange={(e) => {
                  changeFormData({ ...formData, password: e.target.value });
                }}
              />
            </Form.Item>
            <Form.Item>
              <Form.Item
                label={_('Remember me')}
                name="remember"
                valuePropName="checked"
                noStyle
              >
                <Checkbox>{_('Remember me')}</Checkbox>
              </Form.Item>

              <Link
                className={styles.resetPasswordLink}
                to={CLIENT_URLS.AUTH.RESET_PASSWORD.buildPath()}
              >
                <LockOutlined /> {_('Forgot password')}
              </Link>
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
                <LoginOutlined /> {_('Sign In')}
              </Button>
            </Form.Item>
            <Link
              className={styles.signUpLink}
              to={CLIENT_URLS.AUTH.SIGN_UP.buildPath()}
            >
              <EnterOutlined /> {_('Sign Up')}
            </Link>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default SignIn;
