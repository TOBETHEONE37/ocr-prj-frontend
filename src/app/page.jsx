'use client';
import OcrUploader from '@/components/OcrUploader';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">한의학 고서 OCR + 번역</h1>
      <OcrUploader />
    </main>
  );
}