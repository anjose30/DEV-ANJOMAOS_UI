interface Selectprom {
  label: string;
  options: { value: string; text: string }[];
}

export default function Select({ label, options }: Selectprom) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium ml-2 text-anj-gbw-300">
        {label}
      </label>
      <select className="border rounded px-2 py-1">
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.text}
          </option>
        ))}
      </select>
    </div>
  );
}
