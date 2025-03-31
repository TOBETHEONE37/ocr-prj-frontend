'use client';
import OcrUploader from '@/components/OcrUploader';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">한의학 고서 OCR 분석기</h1>
      <OcrUploader />
    </main>
  );
}
