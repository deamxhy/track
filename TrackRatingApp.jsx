
import { useState } from "react";

const tracks = [
  {
    id: 1,
    title: "Трек 1",
    url: "https://example.com/track1.mp3",
    ratings: [],
  },
  {
    id: 2,
    title: "Трек 2",
    url: "https://example.com/track2.mp3",
    ratings: [],
  },
];

export default function TrackRatingApp() {
  const [data, setData] = useState(tracks);

  const rateTrack = (trackId, newRating) => {
    setData((prevData) =>
      prevData.map((track) => {
        if (track.id === trackId) {
          return {
            ...track,
            ratings: [...track.ratings, newRating],
          };
        }
        return track;
      })
    );
  };

  const getAverage = (ratings) => {
    if (ratings.length === 0) return 0;
    const total = ratings.reduce((sum, r) => sum + r, 0);
    return (total / ratings.length).toFixed(1);
  };

  return (
    <div style={{ padding: 20 }}>
      {data.map((track) => (
        <div key={track.id} style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
          <h2>{track.title}</h2>
          <audio controls src={track.url} style={{ width: "100%", marginBottom: 10 }} />
          <div style={{ display: "flex", gap: 10 }}>
            {[1, 2, 3, 4, 5].map((num) => (
              <button key={num} onClick={() => rateTrack(track.id, num)}>
                {num}
              </button>
            ))}
          </div>
          <p>Средняя оценка: {getAverage(track.ratings)}</p>
        </div>
      ))}
    </div>
  );
}
