import { HomeView } from "@/sections";
import GuestName from "./components/GuestName";

export default function Home() {
  return (
    <main>
      <GuestName />

      {/* Jika HomeView masih ingin digunakan, letakkan di bawah */}
      <HomeView />

      {/* Contoh teks tambahan */}
      <h1 className="text-3xl font-bold mt-6">
        The Wedding of Annida & Alif
      </h1>
    </main>
  );
}