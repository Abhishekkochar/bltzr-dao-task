## Live deployment 
[https://bltzr-dao-task-d47k95pf1-abhishekkochars-projects.vercel.app/]https://bltzr-dao-task-d47k95pf1-abhishekkochars-projects.vercel.app/ to see the live preview.
Alchemy api key is allow for th above URL. If trying to run locally please provide API in local .env file.

## Getting Started
First, run the development server:

```bash
npm i

npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

When clicked on `fetch` button without providing an wallet address, address `0x9355e3fa0d4B14A14ca160497e20438249b7C360` Pudgy Penguins collection will be shown. 

## A brief overview of the chosen technologies and APIs.

We have selected React, and TS with Next.js for development purposes. We are using 3rd-party API and deployment services such as Alchemy and Vercel, to fetch the provided address's NFTs and deploy the app respectively.

## Challenges faced and how they were overcome.

We had Nft's image conflict in starting. When importing images over the internet, we need to specify the image's remote patterns. While this is not the major issue, however, most of the time, different collections have different image URLs. This can't be automated. In this case, we decided to use Alchemy's cached URL, this provided us with a stable source.

- If there are more than 100 Nfts held by the user, the backend will have to call the API again with PageKey param. This will incur unwanted API calls.
- Few spam NFTs can add up the API calls as well.

To encounter the above, we passed the Pudgy Penguins contract address. Doing so will get us this specific collection. We can up to 20 contract addresses.


## Any assumptions made during development.
- Only a valid ERC20 address will be provided.
- Only input address that holds the Pudgy collection.
- Only read basic NFT data.
- Only processing image for NFTs, no video.
