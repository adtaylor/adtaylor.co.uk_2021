/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPostBySlug = /* GraphQL */ `
  query GetPostBySlug($slug: String!) {
    getPostBySlug(slug: $slug) {
      id
      slug
      title
      content
      status
      createdAt
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
      blogPostsId
    }
  }
`;
export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      posts {
        items {
          id
          slug
          title
          content
          status
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
      slug
      title
      content
      status
      createdAt
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
      blogPostsId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $id: ID
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPosts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        slug
        title
        content
        status
        createdAt
        blog {
          id
          name
          createdAt
          updatedAt
        }
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
        image
        tracks {
          name
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
          image
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const postBySlug = /* GraphQL */ `
  query PostBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        slug
        title
        content
        status
        createdAt
        blog {
          id
          name
          createdAt
          updatedAt
        }
        updatedAt
        blogPostsId
      }
      nextToken
    }
  }
`;
export const postsByStatus = /* GraphQL */ `
  query PostsByStatus(
    $status: Status!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByStatus(
      status: $status
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        slug
        title
        content
        status
        createdAt
        blog {
          id
          name
          createdAt
          updatedAt
        }
        updatedAt
        blogPostsId
      }
      nextToken
    }
  }
`;
