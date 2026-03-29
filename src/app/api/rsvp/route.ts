import { NextResponse } from 'next/server';

// 🔥 penting biar gak error fetch
export const runtime = 'nodejs';

export async function GET() {
  try {
    const res = await fetch(
      'https://script.google.com/macros/s/AKfycbwgmG1fpbv-RZChCzwdULVEEKdb51TnW3nEpDbeolv2DF0Bq9u-oMxRXIMdkAHVKh9V/exec',
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