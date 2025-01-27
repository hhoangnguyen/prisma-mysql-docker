<h2>Docker Container for express + prisma + mysql</h2>

Built to work with Shopify App tutorial https://shopify.dev/docs/apps/build/build?framework=remix

<h3>How to use:</h3>

1. Run following to generate schema
   <code>npm run prisma generate</code>
2. Copy file ./prisma.js to ./app/prisma.js
3. Run docker commands
   <code>docker compose up -d</code>

If you're following the tutorial, update tutorial repo prisma/schema.prisma (not the one in this repo) - port is 3305:
<code>
datasource db {
provider = "mysql"
url = "mysql://root:prisma@localhost:3305/prisma"
}
</code>
and prisma/migrations/migration_lock.toml
<code>provider = "mysql"</code>
