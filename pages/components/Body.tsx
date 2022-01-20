import React from "react"
import { ytApi } from "../../api/youtube"

const Body = ({ search }: any) => {
  const [showModal, setShowModal] = React.useState<boolean>(false)
  const [selectData, setSelectData] = React.useState<any>()
  const infoModal = (e: boolean | ((prevState: boolean) => boolean)) => {
    setShowModal(true)
    setSelectData(e)
  }
  function copyToClipboard() {
    window.prompt(
      "Copy to clipboard: Ctrl+C, Enter",
      `https://www.youtube.com/watch?v=${selectData?.snippet.resourceId.videoId}`
    )
  }
  return (
    <div>
      {showModal === true ? (
        <div className="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800">
          <div className="bg-white rounded-lg w-1/2">
            <div className="flex flex-col items-start p-4">
              <div className="flex items-center w-full">
                <div className="text-gray-900 font-medium text-lg">
                  More Info
                </div>
                <svg
                  onClick={() => setShowModal(!showModal)}
                  className="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                </svg>
              </div>
              <div className="">
                Channel Title: {selectData?.snippet.channelTitle}
                <br />
                Channel Id: {selectData?.snippet.resourceId.videoId}
              </div>
              <div className="ml-auto">
                <button
                  onClick={() => setShowModal(!showModal)}
                  className="bg-transparent mr-3 hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  Close
                </button>
                <button
                  onClick={copyToClipboard}
                  className="bg-transparent mr-3 hover:bg-gray-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
                >
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <section className="flex flex-wrap bg-[#d3d4d4]">
          {search?.items?.map((e: any, i: React.Key | null | undefined) => {
            return (
              <div key={i} className="w-1/3 container">
                <div className="mt-10 px-4">
                  <div className="bg-white rounded-lg overflow-hidden mb-10">
                    <iframe
                      width="550"
                      height="315"
                      src={`https://www.youtube.com/embed/tgbNymZ7vqY${e.id.videoId}`}
                    ></iframe>
                    <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                      <h3>
                        <a
                          href="javascript:void(0)"
                          className="
                                font-semibold
                                text-dark text-xl
                                sm:text-[22px]
                                md:text-xl
                                lg:text-[22px]
                                xl:text-xl
                                2xl:text-[22px]
                                mb-4
                                block
                                hover:text-primary
                                "
                        >
                          {e.snippet.title}
                        </a>
                      </h3>
                      <p className="text-base text-body-color leading-relaxed mb-7">
                        {e.snippet.description}
                      </p>
                      <a
                        className="
                             inline-block
                             mr-3
                             py-2
                             px-7
                             border border-[#E5E7EB]
                             rounded-full
                             text-base text-body-color
                             font-medium
                             transition
                             "
                      >
                        {e.snippet.publishedAt}
                      </a>
                      <a
                        onClick={() => infoModal(e)}
                        className="
                        cursor-pointer
                             inline-block
                             py-2
                             px-7
                             border border-[#E5E7EB]
                             rounded-full
                             text-base text-body-color
                             font-medium
                             hover:border-primary hover:bg-primary hover:text-white
                             transition
                             "
                      >
                        More Info
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </section>
      )}
    </div>
  )
}

export default Body
