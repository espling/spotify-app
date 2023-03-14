"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { signIn, signOut } from "next-auth/react";
import Button from "../Button/Button";

type AuthProps = {
  isAuth: boolean;
};

const Auth = ({ isAuth }: AuthProps) => {
  const handleLogin = async () => {
    await signIn("spotify", { callbackUrl: "http://localhost:3000" });
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <AnimatePresence>
    <LayoutGroup>
      {!isAuth ? (
        <motion.div layoutId="auth-btn">
          <Button onClick={handleLogin}>Sign in</Button>
        </motion.div>
      ) : (
        <motion.div layoutId="auth-btn">
          <Button onClick={handleSignOut}>Sign out</Button>
        </motion.div>
      )}
    </LayoutGroup>
    </AnimatePresence>
  );
};

export default Auth;
