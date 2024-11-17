import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import EmailField from "./field-email";
import PasswordField from "./field-password";
const LoginContent = () => {
  return (
    <>
      <div className="grid gap-4">
        <EmailField />
        <PasswordField />
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="#" className="underline">
          Sign up
        </Link>
      </div>
    </>
  );
};

export default LoginContent;
