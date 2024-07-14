import {
  CheckCircle2,
  CircleDashed,
  UserCog,
} from "lucide-react";
import Button from "../Button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import NewGuestInviteModal from "./NewGuestInviteModal";

interface Participant {
  id: string;
  name: string | null;
  email: string;
  is_confirmed: boolean;
}

function Guests() {
  const { tripId } = useParams();
  const [participants, setParticipants] = useState<Participant[]>([]);

  const [isNewGuestInviteModalOpen, setIsNewGuestInviteModalOpen] =
    useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/trips/${tripId}/participants`);
        setParticipants(response.data.participants);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    fetchData();
  }, [tripId]);

  const openNewGuestInviteModal = () => {
    setIsNewGuestInviteModalOpen(true);
  };

  const closeNewGuestInviteModal = () => {
    setIsNewGuestInviteModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>

      <div className="space-y-5">
        {participants.map((participant, index) => (
          <div
            key={participant.id}
            className="flex items-center justify-between gap-4"
          >
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">
                {participant.name || `Convidado ${index}`}
              </span>
              <span className="block text-sm text-zinc-400 truncate">
                {participant.email}
              </span>
            </div>
            {participant.is_confirmed ? (
              <CheckCircle2 className="size-5 shrink-0 text-green-400" />
            ) : (
              <CircleDashed className="text-zinc-400 size-5 shrink-0" />
            )}
          </div>
        ))}
      </div>

      <Button onClick={openNewGuestInviteModal} variant="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>

      {isNewGuestInviteModalOpen && (
        <NewGuestInviteModal closeNewGuestInviteModal={closeNewGuestInviteModal}/>
      )}
    </div>
  );
}

export default Guests;
