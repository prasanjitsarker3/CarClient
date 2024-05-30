"use client";

import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

const LoginForm = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <form className="flex flex-col gap-4">
        <Input size="md" type="email" label="Email" fullWidth />
        <div className="relative">
          <Input
            size="md"
            type={show ? "text" : "password"}
            label="Password"
            fullWidth
          />
          <span
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
            onClick={() => setShow(!show)}
          >
            {show ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>
        <Button color="primary" className="mt-4">
          Login
        </Button>
        <h1 className="text-white mt-4 text-center">
          Do not have an account?{" "}
          <Link href="/register">
            <span className="text-blue-500">Register</span>
          </Link>
        </h1>
      </form>
    </div>
  );
};

export default LoginForm;
