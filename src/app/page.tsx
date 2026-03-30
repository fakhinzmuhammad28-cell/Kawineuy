// =======================================
// 🔥 WAJIB AGAR WHATSAPP BACA OG IMAGE
// =======================================
export const dynamic = "force-static";

import { HomeView } from "@/sections";
import GuestName from "./components/GuestName";

export default function Home() {
  return (
    <main>
      <GuestName />
      <HomeView />

      <h1 className="text-3xl font-bold mt-6"></h1>
    </main>
  );
}