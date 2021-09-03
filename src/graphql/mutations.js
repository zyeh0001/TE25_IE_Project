/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSkinPhoto = /* GraphQL */ `
  mutation CreateSkinPhoto(
    $input: CreateSkinPhotoInput!
    $condition: ModelskinPhotoConditionInput
  ) {
    createSkinPhoto(input: $input, condition: $condition) {
      id
      url
      createdAt
      updatedAt
    }
  }
`;
export const updateSkinPhoto = /* GraphQL */ `
  mutation UpdateSkinPhoto(
    $input: UpdateSkinPhotoInput!
    $condition: ModelskinPhotoConditionInput
  ) {
    updateSkinPhoto(input: $input, condition: $condition) {
      id
      url
      createdAt
      updatedAt
    }
  }
`;
export const deleteSkinPhoto = /* GraphQL */ `
  mutation DeleteSkinPhoto(
    $input: DeleteSkinPhotoInput!
    $condition: ModelskinPhotoConditionInput
  ) {
    deleteSkinPhoto(input: $input, condition: $condition) {
      id
      url
      createdAt
      updatedAt
    }
  }
`;
