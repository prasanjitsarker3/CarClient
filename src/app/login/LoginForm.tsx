"use client";

import React, { createRef, useEffect, useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useFormState } from "react-dom";
import { UserLogin } from "@/Components/ServerAction/Auth/UserRegister";
import ActionSubmitButton from "@/Components/Common/SubmitButton";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const ref = createRef<HTMLFormElement>();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [state, formAction] = useFormState(UserLogin, null);
  useEffect(() => {
    if (state && state?.success) {
      toast.success(state?.message);
      ref.current?.reset();
      router.push("/");
    }
    if (state && !state?.success) {
      toast.error(state?.message);
    }
  }, [state, ref, router]);
  return (
    <div>
      <form ref={ref} action={formAction} className="flex flex-col gap-4">
        <Input size="md" name="email" type="email" label="Email" fullWidth />
        <div className="relative">
          <Input
            name="password"
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
        <ActionSubmitButton>Login</ActionSubmitButton>
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
