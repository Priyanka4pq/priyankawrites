// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const commentApi = createApi({
//   reducerPath: "commentApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://priblogback.vercel.app/api/comments",
//     credentials: "include",
//   }),
//   tagTypes: ["Comments"],
//   endpoints: (builder) => ({
//     postComment: builder.mutation({
//       query: (commentData) => ({
//         url: "/post-comment",
//         method: "POST",
//         body: commentData,
//       }),
//       invalidatesTags: (result, error, { postId }) => [
//         { type: "Comments", id: postId },
//       ],
//     }),

//     getComments: builder.query({
//       query: () => ({
//         url: "/total-comments",
//         method: "GET",
//       }),
//     }),
//   }),
// });
// export const { useGetCommentsQuery, usePostCommentMutation } = commentApi;
// export default commentApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://priblogback.vercel.app/api/comments",
    credentials: "include",
  }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    postComment: builder.mutation({
      query: (commentData) => ({
        url: "/post-comment",
        method: "POST",
        body: commentData,
      }),
      invalidatesTags: (result, error, { postId }) => [
        { type: "Comments", id: postId },
      ],
    }),

    editComment: builder.mutation({
      query: ({ commentId, updatedData }) => ({
        url: `/edit-comment/${commentId}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: ["Comments"], // Ensure all comments refresh after update
    }),

    deleteComment: builder.mutation({
      query: ({ commentId }) => ({
        url: `/delete-comment/${commentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Comments"], // Ensure all comments refresh after delete
    }),

    getComments: builder.query({
      query: () => ({
        url: "/total-comments",
        method: "GET",
      }),
      providesTags: ["Comments"],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  usePostCommentMutation,
  useEditCommentMutation,
  useDeleteCommentMutation,
} = commentApi;
export default commentApi;
