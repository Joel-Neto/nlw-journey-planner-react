import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";
import Button from "../Button";

interface GuestsModalProps {
  closeGuestsModal: () => void;
  emailsToInvite: string[];
  addNewEmailToInvite: (ev: FormEvent<HTMLFormElement>) => void;
  removeEmailFromInvites: (email: string) => void;
}

function GuestsModal({
  emailsToInvite,
  addNewEmailToInvite,
  closeGuestsModal,
  removeEmailFromInvites,
}: GuestsModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-zinc-900 w-[640px] rounded-xl py-5 px-6 shadow-shape space-y-5">
        <div className="space-y-2">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
            <button onClick={closeGuestsModal}>
              <X className="size-5 text-zinc-400 transition duration-200 hover:text-zinc-200" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email, i) => (
            <div
              key={i}
              className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
            >
              <span className="text-zinc-300">{email}</span>
              <button
                onClick={() => removeEmailFromInvites(email)}
                type="button"
              >
                <X className="size-4 text-zinc-400" />
              </button>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-zinc-800"></div>

        <form
          onSubmit={addNewEmailToInvite}
          className="flex items-center gap-2 p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg"
        >
          <AtSign className="ml-1 text-zinc-400 size-5" />
          <input
            type="email"
            name="email"
            placeholder="Digite o e-mail do convidado"
            className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1"
          />
          
          <Button type="submit" variant="primary" size="default">
            Convidar <Plus className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}

export default GuestsModal;
