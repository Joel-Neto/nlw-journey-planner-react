import { AtSign, User, X } from "lucide-react";
import { FormEvent } from "react";
import Button from "../Button";

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void;
  createTrip: (ev: FormEvent<HTMLFormElement>) => void;
  setOwnerName: (ownerName: string) => void
  setOwnerEmail: (ownerEmail: string) => void
}

function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
  setOwnerName,
  setOwnerEmail
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-zinc-900 w-[640px] rounded-xl py-5 px-6 shadow-shape space-y-5">
        <div className="space-y-2">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar criação de viagem
            </h2>
            <button onClick={closeConfirmTripModal}>
              <X className="size-5 text-zinc-400 transition duration-200 hover:text-zinc-200" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{" "}
            <span className="text-zinc-100 font-semibold">
              Florianópolis, Brasil
            </span>{" "}
            nas datas de{" "}
            <span className="text-zinc-100 font-semibold">
              16 a 27 de Agosto de 2024
            </span>{" "}
            preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <div className="h-14 px-4 flex items-center flex-1  gap-2 bg-zinc-950 border border-zinc-800 rounded-lg">
            <User className="ml-1 text-zinc-400 size-5" />
            <input
              type="text"
              name="name"
              placeholder="Seu nome completo"
              className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1"
              onChange={(ev) => setOwnerName(ev.target.value)}
            />
          </div>

          <div className="h-14 px-4 flex items-center flex-1  gap-2 bg-zinc-950 border border-zinc-800 rounded-lg">
            <AtSign className="ml-1 text-zinc-400 size-5" />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail pessoal"
              className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1"
              onChange={(ev) => setOwnerEmail(ev.target.value)}
            />
          </div>

          <Button type="submit" variant="primary" size="full">
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ConfirmTripModal;
