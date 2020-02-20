# TypeScript and GraphQL Hooks Example

When I was trying to implement Apollo Client with TypeScript on Next.JS, I noticed the current library uses [graphql-let](https://github.com/piglovesyou/graphql-let#readme). However, I noticed that this requires a lot of boiler plate setup that is very likely to confuse someone new to Web Development. To promote a simple Next.JS setup, I rewritten the [With-TypeScript-GraphQL](https://github.com/zeit/next.js/tree/canary/examples/with-typescript-graphql) to use Apollo-Hooks and change the GraphQL Server to the [Countries](https://countries.trevorblades.com/) Playground.

```typescript jsx
import { useQuery } from '@apollo/react-hooks';

const Countries: React.FC = () => {
  const { data } = useQuery(GET_CONTINENT, {
    variables: {
      code: continentCode,
    },
  });

  if (data) {
    const { countries } = data.continent as { countries: Country[] };
    return (
      <div>
        <h1>{data.continent.name}</h1>
        <ul>
          {countries.map(e => (
            <li key={e.code}>
              {e.name} {e.emoji}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
```

## Deploy your own

Deploy the example using [ZEIT Now](https://zeit.co/now):

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/new/project?template=https://github.com/zeit/next.js/tree/canary/examples/with-typescript-graphql)

## How to use

### Download manually

Download the example:

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/with-typescript-graphql
cd with-typescript-graphql
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [ZEIT Now](https://zeit.co/new?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Notes

Note: Do not be alarmed that you see two renders being executed. Apollo recursively traverses the React render tree looking for Apollo query components. When it has done that, it fetches all these queries and then passes the result to a cache. This cache is then used to render the data on the server side (another React render).
https://www.apollographql.com/docs/react/api/react-ssr/#getdatafromtree
