const axios = require('axios')

function parseImage (data) {
  const regex = /(?<=og:image" content=")(.*?)(?=")/gm;
  return data.match(regex)[0]
}

function parseTrackURLs (data) {
  const regex = /(?<="music:song" content=\")(.*?)(?=")/gm;
  return data.match(regex)
}

function parseDescription (data) {
  const regex = /(?<=description" content="Listen on Spotify: )(.*?)(?=")/gm
  return data.match(regex)[0]
}

function parseTitle (data) {
  const regex = /(?<=og:title" content=")(.*?)(?=")/gm
  return data.match(regex)[0]
}

function parseArtist (data, url) {
  const regex = /(?<=og:description" content=")(.*?)(?= · Song)/gm
  return data.match(regex)[0]
}

function parseTrackResponse(data, url) {
  return {
    name: parseTitle(data),
    duration_ms: 0,
    url,
    artist: parseArtist(data, url)
  }
}

function parsePlaylistResponse(data) {
  let name = parseTitle(data)
  let description = parseDescription(data)
  let image = parseImage(data)
  tracks = parseTrackURLs(data)
  return { name, description, image, tracks }
}

async function getSpotifyTrackData(url) {
  const response = await axios.get(url)
  return parseTrackResponse(response.data, url)
}

async function getSpotifyPlaylistData(url) {
  const response = await axios.get(url)
  return parsePlaylistResponse(response.data)
}

module.exports = { getSpotifyPlaylistData, getSpotifyTrackData }
