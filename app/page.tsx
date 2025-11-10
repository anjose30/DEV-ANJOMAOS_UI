import Input from "@/components/ui/Input";

export default function page() {
  return (
    <div className="h-svh w-full p-4 flex flex-col gap-2 justify-center items-center">
      <Input types="email" />
      <Input label="Nueva entrada" placeholder="texto" types="normal" />
      <Input label="Nueva entrada" placeholder="texto" types="password" />
      <Input label="Nueva entrada" placeholder="texto" types="date" />
    </div>
  );
}
