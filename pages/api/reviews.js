//import fetch from 'node-fetch';

let cachedReviews = null;
let lastFetchTime = 0;

export default async function handler(req, res) {
  const CACHE_DURATION = 12 * 60 * 60 * 1000; // 12 horas

  if (Date.now() - lastFetchTime < CACHE_DURATION && cachedReviews) {
    return res.status(200).json({ reviews: cachedReviews });
  }

  try {
    const apiKey = process.env.GOOGLE_API_KEY; // No cambiar, esto funciona en Vercel
    const placeId = "ChIJa9a-wxhUuZURWP9hFWNy2Wc";
    const url = `https://maps.googleapis.com/maps/api/place/details/json?placeId=${placeId}&fields=reviews&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status === "OK") {
      cachedReviews = data.result.reviews || [];
      lastFetchTime = Date.now();
      res.status(200).json({ reviews: cachedReviews });
    } else {
      res.status(500).json({ error: "Error fetching reviews" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
