import React from "react"
import { ytApi } from "../../api/youtube"

const Header = ({ setSearch }: any) => {
  const [results, setResults] = React.useState<string>("")

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
  return (
    <nav className="bg-orange-100 flex items-center justify-between flex-wrap bg-teal p-6">
      <div className="block lg:hidden"></div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            onClick={getCovid}
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            COVID Videos
          </a>
          <a
            onClick={getAll}
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            All Videos
          </a>

          <div className="flex relative mx-auto w-1/4 max-w-md">
            <input
              onChange={(e) => setResults(e.target.value)}
              className="border-2 border-primary bg-red transition h-12 px-5 pr-16 rounded-md focus:outline-none w-full text-black text-lg "
              type="search"
              name="search"
              placeholder="Search"
            />
            <button
              onClick={getSearch}
              type="submit"
              className="absolute right-2 top-3 mr-4"
            >
              Go
            </button>
          </div>
        </div>
        <div>HCA</div>
      </div>
    </nav>
  )
}

export default Header
