import { NextResponse } from 'next/server';

// 🔥 penting biar gak error fetch
export const runtime = 'nodejs';

export async function GET() {
  try {
    const res = await fetch(
      'https://script.google.com/macros/s/AKfycbynJ3zwstgyVsiZeI1GsB7ml-wlGJnFOxTgFziI1-MwOAjxFwexoXcyqMq6XznVdz_0/exec',
      {
        method: 'GET',
        cache: 'no-store',
      }
    );

    const data = await res.json();

    return NextResponse.json(data);

  } catch (error) {
    console.error('ERROR API:', error);

    return NextResponse.json(
      { error: 'Failed to fetch' },
      { status: 500 }
    );
  }
}
