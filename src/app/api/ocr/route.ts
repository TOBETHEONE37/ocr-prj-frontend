import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.formData();
  const image = data.get('image');

  return NextResponse.json({ success: true });
}
