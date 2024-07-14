import { FormEvent } from "react";
import Button from "../Button";
import { AtSign, Plus, X } from "lucide-react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

interface NewGuestInviteModalProps {
  closeNewGuestInviteModal: () => void;
}

function NewGuestInviteModal({
  closeNewGuestInviteModal,
}: NewGuestInviteModalProps) {
  const {tripId} = useParams();

  const inviteNewGuest = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    try {
      const data = new FormData(ev.currentTarget);

      const email = data.get("email")?.toString();

      await api.post(`/trips/${tripId}/invites`, {
        email
      });

      window.document.location.reload();
    } catch (error: any) {
      alert(`Erro: ${error.message}`);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-zinc-900 w-[640px] rounded-xl py-5 px-6 shadow-shape space-y-5">
        <div className="space-y-2">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">Adicionar novo convidado</h2>
            <button onClick={closeNewGuestInviteModal}>
              <X className="size-5 text-zinc-400 transition duration-200 hover:text-zinc-200" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            O convidado vai receber e-mails para confirmar sua participação na
            viagem.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800"></div>

        <form
          onSubmit={inviteNewGuest}
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

export default NewGuestInviteModal;
