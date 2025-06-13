import React from 'react';

export const LibraryPage = () => {
  return (
    <main className="min-h-screen px-4 py-6 bg-black text-white space-y-6">
      {/* 상단 배너 */}
      <div className="rounded-full bg-gradient-to-r from-pink-600 to-red-500 px-5 py-4 flex justify-between items-center backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="text-xl">🎵</span>
          <p className="text-sm">좋아하는 음악을 듣고 다운로드하세요.</p>
        </div>
        <button className="bg-white/20 px-3 py-1 rounded-full text-sm">
          →
        </button>
      </div>

      {/* 라디오 카테고리 */}
      <section className="grid grid-cols-3 gap-4">
        {['1', 'HITS', 'COUNTRY', 'MÚSICA UNO', 'CLUB', 'CHILL'].map(
          (title) => (
            <div
              key={title}
              className="aspect-square rounded-2xl overflow-hidden bg-white/10 flex items-center justify-center text-2xl font-bold backdrop-blur-lg"
            >
              {title}
            </div>
          ),
        )}
      </section>

      {/* 실시간 방송 중 */}
      <section>
        <h2 className="text-lg font-semibold mb-3">실시간 방송 중</h2>
        <div className="rounded-2xl bg-white/10 backdrop-blur-lg p-6 text-3xl font-bold">
          Today's Hits
        </div>
      </section>
    </main>
  );
};
