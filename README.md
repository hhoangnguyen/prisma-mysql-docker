<h2>Docker Container for express + prisma + mysql</h2>

Built to work with Shopify App tutorial https://shopify.dev/docs/apps/build/build?framework=remix

<h3>How to use:</h3>

1. Run following to generate schema
   `npm run prisma generate`
2. Copy file ./prisma.js to ./app/prisma.js
3. Run docker commands
   `docker compose up -d`

If you're following the tutorial, update tutorial repo prisma/schema.prisma (not the one in this repo) - port is 3305:

```javascript
datasource db {
  provider = "mysql"
  url = "mysql://root:prisma@localhost:3305/prisma"
}
```

and prisma/migrations/migration_lock.toml

`provider = "mysql"`

Restart your shopify app

`shopify app dev`

Verify you can connect to prisma in this container from your shopify app with mysql database
