/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateMixtape = /* GraphQL */ `
  subscription OnCreateMixtape {
    onCreateMixtape {
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
export const onUpdateMixtape = /* GraphQL */ `
  subscription OnUpdateMixtape {
    onUpdateMixtape {
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
export const onDeleteMixtape = /* GraphQL */ `
  subscription OnDeleteMixtape {
    onDeleteMixtape {
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
