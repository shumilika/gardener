"use client";
import { uploadNewQuery } from "@/services/updateQueries";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const BookACall = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const notifySuccess = () => toast.success("Successfully add!");
  const notifyError = () => toast.error("This is didn't work");

  const handlyClearData = () => {
    setName("");
    setEmail("");
    setSubject("");
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const queryData = {
      name,
      email,
      subject,
      status: "New" as const,
      date: new Date().toISOString(),
    };

    try {
      await uploadNewQuery({ queryData });
      notifySuccess();
      handlyClearData();
    } catch (error) {
      notifyError();
    }
  };

  return (
    <div
      className="max-w-[400px] w-full p-[50px] flex items-center justify-center flex-col gap-[40px] 
bg-[#ddd] rounded-xl border-t-[6px] border-[1px] border-green-700"
    >
      <div>
        <Toaster />
        <h3 className="text-[22px]/[33px] text-black font-semibold">
          Book a call with our experts
        </h3>
      </div>
      <div className="h-[350px] w-full grow-0 shrink-0 basis-auto relative">
        <div className="h-full w-full relative flex justify-center items-center flex-col">
          <form
            onSubmit={handleSave}
            className="grid gap-[15px] w-full h-full grid-cols-1 grid-rows-[max-content_1fr_max-content]"
          >
            <div className="w-full grid gap-[15px] grid-flow-row">
              <input
                className="bg-white inline-block w-full p-[15px] rounded-lg border-none text-base outline-none
    focus:outline-none"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your Name"
              />
              <input
                className="bg-white inline-block w-full p-[15px] rounded-lg border-none text-base outlined-none
  focus:outline-none"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Your Email"
              />
            </div>

            <textarea
              className="bg-white inline-block w-full rounded-lg outline-none border-none p-[15px] text-base"
              placeholder="How can we help?"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <div>
              <button
                type="submit"
                className="inline-block w-full p-[15px] cursor-pointer appearance-none text-base outline-none 
    border-none rounded-lg font-semibold bg-green-700 text-white opacity-[1px] duration-300
    hover:opacity-[.8] "
              >
                Request a call
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookACall;
