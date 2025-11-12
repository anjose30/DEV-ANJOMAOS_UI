import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";

export default function page() {
  return (
    <div className="h-svh w-full p-4 flex flex-col gap-2 justify-center items-center">
      <section className="gap-2 flex flex-col">
        <h2 className="m-2">Inputs</h2>
        <Input types="email" />
        <Input label="Nueva entrada" placeholder="texto" types="normal" />
        <Input label="Nueva entrada" placeholder="texto" types="password" />
        <Input label="Nueva entrada" placeholder="texto" types="date" />
      </section>
      <section className="gap-2 flex flex-col">
        <h2 className="m-2">TextArea</h2>
        <Textarea
          placeholder="Danos tu opinion "
          label="Commentario"
        ></Textarea>
      </section>
      <section className="gap-2 flex flex-col">
        <h2 className="m-2">TextArea</h2>
        <Select
          label="Armamento"
          options={[
            { value: "co", text: "Colombia" },
            { value: "mx", text: "México" },
            { value: "ar", text: "Argentina" },
          ]}
        />
      </section>
    </div>
  );
}
