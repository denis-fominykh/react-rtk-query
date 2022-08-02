import { useParams } from 'react-router-dom';

import { Loader } from 'components/Loader';
import { PageHeader, PageContent, ButtonReverseLink } from 'pages/People/PeopleItem/styled';
import { useGetCharacterByIdQuery } from 'service/peopleApi';

type PeopleParams = {
  itemId: string | undefined;
};

export function PeopleItem(): JSX.Element {
  const { itemId = '1' } = useParams<PeopleParams>();
  const { isLoading, isError, data, status } = useGetCharacterByIdQuery(itemId);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <h1>{status}</h1>
      ) : (
        <>
          <PageHeader>
            <h1>{data?.name}</h1>
            <ButtonReverseLink to="/people">Back</ButtonReverseLink>
          </PageHeader>
          <PageContent>
            <p>Gender: {data?.gender}</p>
            <p>Mass: {data?.mass}</p>
            <p>Height: {data?.height}</p>
            <p>Birth year: {data?.birth_year}</p>
          </PageContent>
        </>
      )}
    </div>
  );
}
