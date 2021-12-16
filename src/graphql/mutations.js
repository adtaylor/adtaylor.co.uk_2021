/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createMixtape = /* GraphQL */ `
  mutation CreateMixtape(
    $input: CreateMixtapeInput!
    $condition: ModelMixtapeConditionInput
  ) {
    createMixtape(input: $input, condition: $condition) {
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
export const updateMixtape = /* GraphQL */ `
  mutation UpdateMixtape(
    $input: UpdateMixtapeInput!
    $condition: ModelMixtapeConditionInput
  ) {
    updateMixtape(input: $input, condition: $condition) {
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
export const deleteMixtape = /* GraphQL */ `
  mutation DeleteMixtape(
    $input: DeleteMixtapeInput!
    $condition: ModelMixtapeConditionInput
  ) {
    deleteMixtape(input: $input, condition: $condition) {
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
