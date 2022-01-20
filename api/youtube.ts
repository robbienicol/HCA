import axios from "axios"
import { useEffect } from "react"

const KEY = "AIzaSyDziTS02clZWBgqa7l_RUnfnSr1_YB4DSI"

export const ytApi = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    channelId: "UCL03ygcTgIbe36o2Z7sReuQ",
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
  headers: {},
})
