import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, FormEvent, FC } from "react";
import { ShieldCheckIcon } from "@heroicons/react/solid";
import { Layout } from "../components/Layout";
import { useMutateAuth } from "../hooks/useMutateAuth";
import { supabase } from "../utils/supabase";

import styles from "./Auth.module.css";

const Auth: NextPage = () => {
  const user = supabase.auth.user();
  const { push, pathname } = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const {
    email,
    setEmail,
    password,
    setPassword,
    loginMutation,
    registerMutation,
  } = useMutateAuth();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user) {
      supabase.auth.signOut();
    } else {
      if (isLogin) {
        loginMutation.mutate();
      } else {
        registerMutation.mutate();
      }
    }
  };

  return (
    <>
      {user ? (
        <Layout title="Auth">
          <form onSubmit={handleSubmit}>
            <button
              type="submit"
              className={styles.SubmitButton}
              // "flex w-full justify-center rounded-md bg-indigo-600 py-2 px-4 text-sm text-white"
            >
              ログアウト
            </button>
          </form>
        </Layout>
      ) : (
        <Layout title="Auth">
          {/* <ShieldCheckIcon className="mb-8 h-12 w-12 text-blue-500" /> */}
          <div>{isLogin ? "ログイン" : "ユーザ登録"}</div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                required
                className={styles.EmailInput}
                // "my-2 rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="password"
                required
                className={styles.EmailInput}
                // "my-2 rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              className={styles.SubmitButton}
              // "flex w-full justify-center rounded-md bg-indigo-600 py-2 px-4 text-sm text-white"
            >
              {isLogin ? "ログイン" : "ユーザ登録"}
            </button>
            <div
              className={styles.LoginMode}
              // "my-6 flex items-center justify-center text-sm"
            >
              {" "}
              <span
                onClick={() => setIsLogin(!isLogin)}
                className={styles.Text}
                // "cursor-pointer font-medium hover:text-indigo-500"
              >
                {isLogin ? "ユーザ登録ですか？" : "ログインですか？"}
              </span>
            </div>
          </form>
        </Layout>
      )}
    </>
  );
};

export default Auth;
