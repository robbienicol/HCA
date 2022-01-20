import React, { useEffect } from "react"
import { NextPage } from "next"
import Header from "./components/Header"
import Body from "./components/Body"
import axios from "axios"
import { ytApi } from "../api/youtube"

const Home: NextPage = () => {
  const [search, setSearch] = React.useState([])

  React.useEffect(() => {
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
