"use client";
import React from "react";
import { Input, Button, Card } from "@nextui-org/react";
import Image from "next/image";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-vector/blue-sedan-car-isolated-white-vector_53876-67352.jpg?t=st=1717080645~exp=1717084245~hmac=ec8d427ca60afaf2127043862b2af52e4d8dd85e16c5fe1fc4cdc38d560be9de&w=740")',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <Card className="backdrop-blur-md bg-white bg-opacity-10 border border-white border-opacity-30 p-8 rounded-xl max-w-md w-full">
          <h1 className="text-3xl text-white font-bold mb-6 text-center">
            Please Register !
          </h1>
          <RegisterForm />
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
