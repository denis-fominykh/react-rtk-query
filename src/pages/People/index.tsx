import { Link } from 'react-router-dom';

import { Loader } from 'components/Loader';
import { ItemsList, PageHeader } from 'pages/People/styled';
import { useGetAllPeopleQuery } from 'redux/people/query';

export function People(): JSX.Element {
  const { isLoading, isError, data, status } = useGetAllPeopleQuery();

  return (
    <>
      <PageHeader>
        <h1>People</h1>
      </PageHeader>
      <ItemsList>
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <h1>{status}</h1>
        ) : (
          data?.results.map(({ name, birth_year: birthYear }, idx) => (
            <Link key={idx} to={`/people/${idx + 1}`}>
              <li>
                <h3>{name}</h3>
                Birth year: {birthYear}
              </li>
            </Link>
          ))
        )}
      </ItemsList>
    </>
  );
}
