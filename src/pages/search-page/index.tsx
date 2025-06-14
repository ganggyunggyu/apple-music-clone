import React from 'react';

const categories = [
  { title: '여름 사운드', color: 'from-yellow-400 to-pink-400' },
  { title: 'Apple Music Live', color: 'from-red-400 to-pink-600' },
  { title: 'Sing', color: 'from-pink-400 to-red-500' },
  { title: '공간 음향', color: 'from-red-500 to-pink-700' },
  { title: 'K-Pop', color: 'from-pink-600 to-pink-700' },
  { title: '차트', color: 'from-yellow-500 to-green-600' },
  { title: '팝', color: 'from-pink-500 to-pink-600' },
  { title: '클래식', color: 'from-purple-500 to-purple-700' },
  { title: '재즈', color: 'from-blue-400 to-blue-600' },
  { title: '힙합/랩', color: 'from-blue-500 to-blue-700' },
];

export const SearchPage = () => {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">검색</h1>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((item, idx) => (
          <div
            key={idx}
            className={`aspect-[2/1] rounded-2xl overflow-hidden bg-gradient-to-br ${item.color} flex items-end p-4`}
          >
            <span className="text-lg font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((item, idx) => (
          <div
            key={idx}
            className={`aspect-[2/1] rounded-2xl overflow-hidden bg-gradient-to-br ${item.color} flex items-end p-4`}
          >
            <span className="text-lg font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </main>
  );
};
