import React from "react"
import { NextPage } from "next"
import Header from "./components/Header"
import Body from "./components/Body"
import { ytApi } from "../api/youtube"

const Home: NextPage = () => {
  const [search, setSearch] = React.useState([])
  const getHomePage = async () => {
    try {
      await ytApi
        .get("/playlistItems", {
          params: {
            playlistId: "PLogA9DP2_vSekxHP73PXaKD6nbOK56CJw",
          },
        })
        .then((res) => setSearch(res.data))
    } catch (err) {
      console.log(err)
    }
  }
  React.useEffect(() => {
    getHomePage()
    ytApi
  }, [])

  return (
    <div>
      <Header setSearch={setSearch} />
      <Body search={search} />
    </div>
  )
}

export default Home
