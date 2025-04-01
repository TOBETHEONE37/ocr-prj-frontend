'use client';
import { useState } from 'react';

export default function OcrUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<{ original: string; translated: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch('https://my-backend-production.up.railway.app/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setResult(data);
    } catch (e) {
      console.error(e);
      alert('OCR 처리 시 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl bg-white p-4 shadow rounded">
      <input type="file" accept="image/*" onChange={e => setFile(e.target.files?.[0] || null)} />
      <button
        onClick={handleUpload}
        disabled={loading || !file}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {loading ? '처리 중...' : 'OCR & 번역 시작'}
      </button>

      {result && (
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-2"> OCR 결과 (원문)</h2>
          <pre className="bg-gray-100 p-2 rounded whitespace-pre-wrap">{result.original}</pre>

          <h2 className="text-lg font-bold mt-4 mb-2"> GPT 번역</h2>
          <pre className="bg-gray-100 p-2 rounded whitespace-pre-wrap">{result.translated}</pre>
        </div>
      )}
    </div>
  );
}