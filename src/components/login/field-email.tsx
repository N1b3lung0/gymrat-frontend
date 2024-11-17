import React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const EmailField = () => {
  return (
    <div className="grid gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="m@example.com" required />
    </div>
  );
};

export default EmailField;
