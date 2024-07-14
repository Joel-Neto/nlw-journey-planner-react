import { Calendar, Tag, X } from "lucide-react";
import Button from "../Button";
import { FormEvent } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void;
}

function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  const {tripId} = useParams();

  const createActivity = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    try {
      const data = new FormData(ev.currentTarget);

      const title = data.get("title")?.toString();
      const occurs_at = data.get("occurs_at")?.toString();

      await api.post(`/trips/${tripId}/activities`, {
        title,
        occurs_at
      })

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
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <button onClick={closeCreateActivityModal}>
              <X className="size-5 text-zinc-400 transition duration-200 hover:text-zinc-200" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos os convidados podem ver as atividades.
          </p>
        </div>

        <form onSubmit={createActivity} className="space-y-3">
          <div className="h-14 px-4 flex items-center flex-1  gap-2 bg-zinc-950 border border-zinc-800 rounded-lg">
            <Tag className="ml-1 text-zinc-400 size-5" />
            <input
              type="text"
              name="title"
              placeholder="Qual é a atividade?"
              className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1"
            />
          </div>

          <div className="h-14 px-4 flex items-center flex-1  gap-2 bg-zinc-950 border border-zinc-800 rounded-lg">
            <Calendar className="ml-1 text-zinc-400 size-5" />
            <input
              type="datetime-local"
              name="occurs_at"
              placeholder="Data e horário da atividade"
              className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1"
            />
          </div>

          <Button variant="primary" size="full">
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CreateActivityModal;
