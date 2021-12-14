/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      posts {
        items {
          id
          title
          createdAt
          updatedAt
          blogPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      blogPostsId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        blogPostsId
      }
      nextToken
    }
  }
`;
export const getMixtape = /* GraphQL */ `
  query GetMixtape($id: ID!) {
    getMixtape(id: $id) {
      id
      spotify_id
      playlist {
        name
        description
        images {
          url
        }
        tracks {
          name
          preview_url
          duration_ms
          url
          artist
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMixtapes = /* GraphQL */ `
  query ListMixtapes(
    $filter: ModelMixtapeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMixtapes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        spotify_id
        playlist {
          name
          description
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
