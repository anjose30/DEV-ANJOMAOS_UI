"use client";
import { Mail, Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
// import "@/components/css/Input.css"
import { motion } from "motion/react";

interface Inputprom {
  placeholder?: string;
  label?: string;
  types?: "normal" | "email" | "password" | "date";
}

function NormalImput(
  classNames: { input: string; label: string },
  placeholder: string,
  label: string
) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className={classNames.label}>{label}</label>}
      <motion.input
        whileHover={{ scale: 1.01 }}
        type="text"
        className={classNames.input}
        placeholder={placeholder}
      />
    </div>
  );
}

function EmailImput(classNames: { input: string; label: string }) {
  return (
    <div className="flex flex-col gap-1 relative">
      <motion.label className={classNames.label}>Email</motion.label>
      <Mail className="absolute bottom-2 right-3" strokeWidth={1} />
      <motion.input
        whileHover={{ scale: 1.01 }}
        type="email"
        className={classNames.input}
        placeholder="example@gmail.com"
      />
    </div>
  );
}

function PassswordImput(classNames: { input: string; label: string }) {
  const [viewP, setViewP] = useState(false);

  return (
    <div className="flex flex-col gap-1 relative">
      <label className={classNames.label}>Contraseña</label>
      <motion.button
        whileTap={{ scale: 0.95 }}
        type="button"
        onClick={() => setViewP((v) => !v)}
        className="absolute bottom-2 right-3  z-20"
        aria-label={viewP ? "Ocultar contraseña" : "Mostrar contraseña"}
      >
        {viewP ? (
          <EyeClosed className="cursor-pointer" strokeWidth={1} />
        ) : (
          <Eye className="cursor-pointer" strokeWidth={1} />
        )}
      </motion.button>
      <motion.input
        whileHover={{ scale: 1.01 }}
        type={viewP ? "text" : "password"}
        className={classNames.input}
        placeholder=""
      />
    </div>
  );
}

function DateImput(classNames: { input: string; label: string }) {
  return (
    <div className="flex flex-col gap-1 relative">
      <label className={classNames.label}>Fecha</label>
      <motion.input
        whileHover={{ scale: 1.01 }}
        type="date"
        className={classNames.input}
      />
    </div>
  );
}

export default function Input({
  placeholder,
  label,
  types = "normal",
}: Inputprom) {
  const Classname = {
    input:
      "p-2 min-w-70 transition border border-anj-gbw-100/80 rounded-xl hover:border-anj-gbw-300 focus:bg-anj-gbw-100/10",
    label: "text-sm font-medium ml-2 text-anj-gbw-300 ",
  };

  const getTypes = () => {
    if (types === "email") return EmailImput(Classname);
    if (types === "password") return PassswordImput(Classname);
    if (types === "date") return DateImput(Classname);
    return NormalImput(Classname, placeholder ?? "", label ?? "");
  };

  return <>{getTypes()}</>;
}
