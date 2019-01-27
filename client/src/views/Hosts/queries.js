import gql from 'graphql-tag';

export const initializeHostById = gql`
  query GetLocation($id: ID) {
    Location(id: $id) {
      name
      description
      category {
        id
        name
      }
      photos {
        url
      }
      openTimespans {
        id
        openTime
        closeTime
      }
    }
  }
`;

export const getAllCategories = gql`
  query getCategories {
    allCategories {
      id
      name
    }
  }
`;

export const UPDATE_NORMAL_FIELDS = gql`
  mutation editLocation(
    $id: ID!
    $name: String
    $description: String
    $categoryId: ID
  ) {
    updateLocation(
      id: $id
      name: $name
      description: $description
      categoryId: $categoryId
    ) {
      name
      description
      category {
        name
      }
    }
  }
`;

export const ADD_IMAGE = gql`
  mutation addImage($url: String!, $caption: String!, $locationId: ID!) {
    createPhoto(url: $url, caption: $caption, locationId: $locationId) {
      url
      caption
      location {
        photos {
          url
          caption
        }
      }
    }
  }
`;

export const EDIT_IMAGE_CAPTION = gql`
  mutation editImageCaption($id: ID!, $caption: String!) {
    updatePhoto(id: $id, caption: $caption) {
      caption
    }
  }
`;

export const REMOVE_IMAGE = gql`
  mutation removeImage($id: ID!) {
    deletePhoto(id: $id) {
      id
    }
  }
`;

export const EDIT_HOURS = gql`
  mutation editHours($id: ID!, $openTime: DateTime!, $closeTime: DateTime!) {
    updateOpenTimespan(id: $id, openTime: $openTime, closeTime: $closeTime) {
      openTime
      closeTime
    }
  }
`;
