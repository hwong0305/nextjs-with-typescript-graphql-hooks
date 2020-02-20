import { useQuery } from '@apollo/react-hooks';
import withApollo from '../lib/withApollo';
import { GET_CONTINENTS } from '../lib/queries';

type Continent = {
  code: string;
  name: string;
};

const Index = () => {
  const { data } = useQuery(GET_CONTINENTS);
  if (data) {
    const { continents } = data as { continents: Continent[] };
    return (
      <div>
        <h1>Continents</h1>
        <ul>
          {continents.map(e => (
            <li key={e.code}>
              <a href={`/continents/${e.code}`}>{e.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return <h1>Continents</h1>;
};

export default withApollo(Index);
