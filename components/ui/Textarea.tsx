'use client';
import { motion } from "motion/react";

interface TextAreaprom {
  placeholder?: string;
  label: string;
}
export default function Textarea({ label, placeholder }: TextAreaprom) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium ml-2 text-anj-gbw-300">
        {label}
      </label>
      <motion.textarea
        whileHover={{ scale: 1.01 }}
        name=""
        id=""
        placeholder={placeholder}
        className="p-2 min-w-70 transition border border-anj-gbw-100/80 rounded-xl hover:border-anj-gbw-300 focus:bg-anj-gbw-100/10"
      ></motion.textarea>
    </div>
  );
}
