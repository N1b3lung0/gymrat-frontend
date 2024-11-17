import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const PasswordField = () => {
  return (
    <div className="grid gap-2">
      <div className="flex items-center">
        <Label htmlFor="password">Password</Label>
        <Link href="#" className="ml-auto inline-block text-sm underline">
          Forgot your password?
        </Link>
      </div>
      <Input id="password" type="password" required />
    </div>
  );
};

export default PasswordField;
