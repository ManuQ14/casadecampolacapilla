import axios from "axios";

export default async function handler(req, res) {
  const placeId = req.query.placeId;
  if (!placeId) {
    return res.status(400).send("Missing placeId parameter");
  }

  //const apiKey = "AIzaSyC1TL86PhjMQAZ8VUli4KQpngox0bOijM0"; // Reemplaza con tu API Key
  const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJa9a-wxhUuZURWP9hFWNy2Wc&fields=name,rating,reviews&key=AIzaSyC1TL86PhjMQAZ8VUli4KQpngox0bOijM0`;

  //https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ9a-wxhUhUZURW9PhNWy2Wc&fields=rating,name,reviews&key=AIzaSyC1TL86PhjMQAZ8VUli4KQpngox0bOijM0&language=es

  try {
    const response = await axios.get(apiUrl);
    if (response.data.status === "OK") {
      const reviews = response.data.result.reviews || [];
      const limitedReviews = reviews.slice(0, 5);
      res.setHeader("Access-Control-Allow-Origin", "*"); // Habilita CORS
      res.setHeader("Access-Control-Allow-Methods", "GET"); // Habilita el método GET
      res.status(200).json({ reviews: limitedReviews });
    } else {
      res.status(500).send("Error fetching place details");
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal server error");
  }
}
