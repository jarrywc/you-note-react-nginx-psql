
## Resources

### Prisma

[Prisma](https://vercel.com/guides/nextjs-prisma-postgres)

Commands (all in root directory of project)
: Startup/Install Host
: ``$ npm install prisma --save-dev``
: Bootstrap to App
: ``$ npx prisma init``
: Push tables to database
: ``$ npx prisma db push``
: Add dummy data
: ``$ npx prisma studio``
: Startup/Install Client
: ``$ npm install @prisma/client``
: Update Schema
: ``$ npx prisma generate``

Important Files

| File          |  Path  |                Description |
|:--------------|:------:|---------------------------:|
| schema.prisma | prisma | Configure database schemas |
| prisma.ts     |  lib   |         Prisma client file |


### NextAuth

[NextAuth](https://next-auth.js.org/getting-started/example)

