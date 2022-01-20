This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

OVERVIEW:

i used TailwindCSS to handling the styling to save some time, and becuase i think its a great way to style efficently. i have the main API where i do an axios request to youtube HCA channel. i limited the results to 5 for simplicity.

i decided to handle my requests in header.tsx , and set the results to my main results useState. i have a couple buttons that will filter through the API, as well as a search bar that searches within the HCA channel.

body is where i show these results. i am using an iframe for the videos, so you dont have to leave the page to view them. i mapped throught the results to display these containers. 

i have a more info button where you can see further details about the video, as wel las a share button where you can copy the video URL.
