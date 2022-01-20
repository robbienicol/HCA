import React from "react"

const Gets = () => {
  const [results, setResults] = React.useState("")

  const getSearch = async () => {
    try {
      await ytApi
        .get("/search", {
          params: {
            q: results,
          },
        })
        .then((res) => setSearch(res.data))
    } catch (err) {
      console.log(err)
    }
  }
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
  const getAll = async () => {
    try {
      await ytApi
        .get("/playlistItems", {
          params: {
            playlistId: "UUL03ygcTgIbe36o2Z7sReuQ",
          },
        })
        .then((res) => setSearch(res.data))
    } catch (err) {
      console.log(err)
    }
  }
  const getCovid = async () => {
    try {
      await ytApi
        .get("/search", {
          params: {
            q: "COVID",
          },
        })
        .then((res) => setSearch(res.data))
    } catch (err) {
      console.log(err)
    }
  }
  React.useEffect(() => {
    getHomePage()
  }, [])
}
