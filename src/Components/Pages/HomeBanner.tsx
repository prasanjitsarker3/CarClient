"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      <div className="absolute inset-0 z-10 bg-black bg-opacity-50"></div>
      <div className="relative z-20 max-w-7xl mx-auto px-6 flex flex-col items-center text-center text-white">
        <h1 className="text-4xl font-bold mb-4">
          Ride the Future with Our Cars
        </h1>
        <p className="text-lg mb-6">
          Discover the latest in automotive innovation and technology.
          Experience the thrill of the ride.
        </p>
        <Button as="a" href="#" color="primary">
          Learn More
        </Button>
      </div>
      <Image
        src="https://img.freepik.com/free-vector/blue-sedan-car-isolated-white-vector_53876-67352.jpg?t=st=1717080645~exp=1717084245~hmac=ec8d427ca60afaf2127043862b2af52e4d8dd85e16c5fe1fc4cdc38d560be9de&w=740" // Replace with your image path in the public folder
        alt="Car Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
    </div>
  );
};

export default HomeBanner;
