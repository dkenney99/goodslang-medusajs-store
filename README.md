# medusajs-backend

### local setup
- Install dependencies `yarn`
- Rename `.env.template` ->  `.env`
- To connect to your online database, from local; copy the `DATABASE_URL` value that have been auto generated on railway, and add to your `.env`

### requirements
- **postgres database** (will be automatically generated if using railway template)
- **redis** (will be automatically generated if using railway template)

### optional
 - **cloudinary**: I highly recommend using a proper media service.
   1. Sign up a free account with [cloudinary](https://cloudinary.com/invites/lpov9zyyucivvxsnalc5/yhlpdo1vaw2mq1la0nks?t=default) choose "developer API calls" type of user.
   2. Add your `cloud_name`, `api_key` & `api_secret` to .env.local this will eneable Cloudinary as a file service on local dev environment
   3. Configure the same environment variables in your railway dashboard to enable cloudinary in production.
   4. If the steps above was confusin, visit [https://medusajs.com/plugins/medusa-file-cloudinary/](https://medusajs.com/plugins/medusa-file-cloudinary/) for more setup details. 

### commands
`cd medusajs-backend/`
`yarn build` will compile app.
`yarn dev` will start local admin dashboard app to manage products and orders etc.
`yarn start` will start the backend server, needed for the storefront

# medusa-storefront

### local setup
intall dependencies `yarn`
Rename `.env.local.template` ->  `.env.local`

### requirements
- running backend `npm run start` - needed to fetch products data and more, to build nextjs pages.

### commands
`cd medusajs-storefront/`
`yarn wait` will keep calling backend endpoint until a backend responds.
`yarn build` will build the nextjs app - remember to start backend app prior to running this command.
`yarn start` will serve the frontend web shop.
