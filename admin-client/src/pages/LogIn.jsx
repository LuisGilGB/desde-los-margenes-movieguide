import React from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import FullHeightWrapperWithCenteredItems from '../components/fullHeightWrapperWithCenteredItems/FullHeightWrapperWithCenteredItems';
import Input from '../components/inputs/Input';
import useLoginForm from '../hooks/useLoginForm/useLoginForm';

const LogIn = () => {
  const {
    email,
    password,
    rememberMe,
    updateEmail,
    updatePassword,
    updateRememberMe,
  } = useLoginForm();
  return (
    <FullHeightWrapperWithCenteredItems
      className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      dataTestId="login-page"
    >
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <Input
              value={email}
              name="email"
              type="email"
              autoComplete="email"
              required
              className="rounded-t-md"
              placeholder="Email address"
              data-testid="login-email"
              onChange={({ target }) => {
                updateEmail(target.value);
              }}
            />
            <Input
              value={password}
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="rounded-b-md"
              placeholder="Password"
              data-testid="login-password"
              onChange={({ target }) => {
                updatePassword(target.value);
              }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
                <input
                  checked={rememberMe}
                  name="remember_me"
                  type="checkbox"
                  aria-label="Remember me"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  data-testid="login-rememberme"
                  onChange={(...params) => {
                    const { target } = params[0];
                    updateRememberMe(target.checked);
                  }}
                />
              </label>
            </div>

            <div className="text-sm">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              data-testid="login-submit"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </FullHeightWrapperWithCenteredItems>
  );
};

export default LogIn;
