<h2>Docker Container for express + prisma + mysql</h2>

Built to work with Shopify App tutorial https://shopify.dev/docs/apps/build/build?framework=remix

<h3>How to use:</h3>

1. Pull this repo locally:

   `git pull https://github.com/hhoangnguyen/prisma-mysql-docker.git`

2. Run following to generate schema:

   `npm run prisma generate`

3. Copy file `./prisma.js` to `./app/prisma.js`
4. Run docker command:

   `docker compose up -d`

5. If you're following the tutorial, update tutorial code in `prisma/schema.prisma` (not the one in this repo) - port is <b>3305</b>:

   ```javascript
   datasource db {
      provider = "mysql"
      url = "mysql://root:prisma@localhost:3305/prisma"
   }
   ```

   and in `prisma/migrations/migration_lock.toml`

   ```javascript
   provider = "mysql";
   ```

6. Navigate to http://localhost:3076/qrCode. If you already created some qr codes from above shopify tutorial, should see a collection of qrcodes or an empty collection.

7. Restart your shopify app. Verify can connect to prisma in this container from your shopify app by reloading your shopify development store
   ```javascript
   shopify app dev
   ```

If you run into issues, feel free to reach out. Thanks
