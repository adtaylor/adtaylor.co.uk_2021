/* Amplify Params - DO NOT EDIT
	API_ADTAYLORCOUK_GRAPHQLAPIENDPOINTOUTPUT
	API_ADTAYLORCOUK_GRAPHQLAPIIDOUTPUT
	API_ADTAYLORCOUK_GRAPHQLAPIKEYOUTPUT
	API_ADTAYLORCOUK_MIXTAPETABLE_ARN
	API_ADTAYLORCOUK_MIXTAPETABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const axios = require('axios');

function parseTracks(track) {
  const {name, preview_url, duration_ms, artists, external_urls} = track.track

  return {
    name, preview_url, duration_ms,
    url: external_urls.spotify,
    artist: artists[0].name
  }
}

function parseSpotifyResponse(data) {
  let {name, description, images, tracks} = data
  tracks = tracks.items.map(parseTracks)
  return { name, description, images, tracks }
}

async function fetchSpotifyData(playlistId) {
  const regex = /(?<=Spotify\.Entity = )(.*)(?=;)/gm
  const url = `https://open.spotify.com/playlist/${playlistId}`
  const response = await axios.get(url)
  const data = JSON.parse(response.data.match(regex))
  return parseSpotifyResponse(data)
}

exports.handler = async (event) => {
  const spotifyData = await fetchSpotifyData(event.source.spotify_id)
  return spotifyData
}
