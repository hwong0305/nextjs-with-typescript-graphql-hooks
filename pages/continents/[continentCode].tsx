import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { GET_CONTINENT } from '../../lib/queries';
import withApollo from '../../lib/withApollo';

type Country = {
  code: string;
  name: string;
  emoji: string;
};

const Continent = () => {
  const router = useRouter();
  const { continentCode } = router.query;

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

  return <h1>Loading</h1>;
};

export default withApollo(Continent);
