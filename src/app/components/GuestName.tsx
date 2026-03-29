"use client";

import { useSearchParams } from "next/navigation";

export default function GuestName() {
  const query = useSearchParams();

  // Ambil query parameter "to"
  const guest = query.get("to") || "Tamu Undangan";

  return (
    <p className="text-center text-xl font-semibold mt-4">
      Kepada Yth: {guest}
    </p>
  );
}