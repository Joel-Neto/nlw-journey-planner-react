import {
  Plus,
} from "lucide-react";
import { useState } from "react";
import CreateActivityModal from "../components/tripDetailsPage/CreateActivityModal";
import ImportantLinks from "../components/tripDetailsPage/ImportantLinks";
import Guests from "../components/tripDetailsPage/Guests";
import Activities from "../components/tripDetailsPage/Activities";
import DestinationAndDateHeader from "../components/tripDetailsPage/DestinationAndDateHeader";

function TripDetails() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  const openCreateActivityModal = () => {
    setIsCreateActivityModalOpen(true);
  };

  const closeCreateActivityModal = () => {
    setIsCreateActivityModalOpen(false);
  };

  return (
    <div className="container max-w-6xl mx-auto px-6 py-10 space-y-8">
      <DestinationAndDateHeader />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>

            <button
              onClick={openCreateActivityModal}
              className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-500"
            >
              <Plus className="size-5" />
              Cadastrar Atividade
            </button>
          </div>

          <Activities />
        </div>

        <div className="w-80 space-y-6">
          <ImportantLinks />

          <div className="w-full h-px bg-zinc-800"></div>

          <Guests />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal closeCreateActivityModal={closeCreateActivityModal} />
      )}
    </div>
  );
}

export default TripDetails;
