/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSkinPhoto = /* GraphQL */ `
  query GetSkinPhoto($id: ID!) {
    getSkinPhoto(id: $id) {
      id
      url
      createdAt
      updatedAt
    }
  }
`;
export const listSkinPhotos = /* GraphQL */ `
  query ListSkinPhotos(
    $filter: ModelskinPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkinPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        url
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
