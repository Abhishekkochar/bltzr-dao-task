## Getting Started
## Instructions on how to set up and run the project.
First, run the development server:

```bash
npm i

npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

When clicked on ``fetch`` button without providing an wallet address, address `0xC79BAB87c2ead914A29e394Fbe28E1ef78b57115`'s NFTs will be shown. 


## A brief overview of the chosen technologies and APIs.

We have selected React, TS with Next.js for the devleopment purpose. We are using 3rd-party api and deployment services such as Alchemy and Vercel, to fetch provided address's NFTs and deploy the app respectively.

## Challenges faced and how they were overcome.

We had Nft's image confict in starting. When importing images over the internet, we need to specify the image's remote patterns. While this is not the major issue, however most of the time, different collections have different image url. This can't be automated. In this case, we decided to use Alchemy's cached url, this provide us with the stable source.

## Any assumptions made during development.
- Only the valid ERC20 address will be provided.