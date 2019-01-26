import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import seedData from './seed.json';

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjrd2efqtc9wi01794swtqqgw',
});

(async () => {
  const results = await Promise.all(
    seedData.map(location =>
      client.mutate({
        mutation: gql`
          mutation addTestData(
            $name: String!
            $description: String!
            $address: String!
            $latitude: String!
            $longitude: String!
            $rating: Float!
            $photos: [LocationphotosPhoto!]
            #        $reviews: [LocationreviewsReview!]
            $openTimespans: [LocationopenTimespansOpenTimespan!]
            $categoryId: ID
            $cityId: ID
          ) {
            createLocation(
              name: $name
              address: $address
              description: $description
              latitude: $latitude
              longitude: $longitude
              rating: $rating
              photos: $photos
              #          reviews: $reviews
              openTimespans: $openTimespans
              categoryId: $categoryId
              cityId: $cityId
            ) {
              id
              name
            }
          }
        `,
        variables: location,
      }),
    ),
  );
  console.log(results);
})();
