/* Amplify Params - DO NOT EDIT
	API_ADTAYLORCOUK_GRAPHQLAPIENDPOINTOUTPUT
	API_ADTAYLORCOUK_GRAPHQLAPIIDOUTPUT
	API_ADTAYLORCOUK_GRAPHQLAPIKEYOUTPUT
	API_ADTAYLORCOUK_MIXTAPETABLE_ARN
	API_ADTAYLORCOUK_MIXTAPETABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const {getSpotifyPlaylistData, getSpotifyTrackData} = require('./scraper.js');

async function fetchSpotifyData(playlistId) {
  const url = `https://open.spotify.com/playlist/${playlistId}`
  data = await getSpotifyPlaylistData(url)

  data.tracks = await Promise.all(
    data.tracks.map(async (url) => {
      return await getSpotifyTrackData(url)
    })
  );
  // data.tracks = results
  return data
}

exports.handler = async (event) => {
  const spotifyData = await fetchSpotifyData(event.source.spotify_id)
  return spotifyData
}
