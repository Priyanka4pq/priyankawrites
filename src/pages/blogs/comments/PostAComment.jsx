// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { usePostCommentMutation } from "../../../redux/features/comments/commentApi";
// import { useFetchBlogsByIdQuery } from "../../../redux/features/blogs/blogsApi";

// const PostAComment = () => {
//   const { id } = useParams();
//   const [comment, setComment] = useState("");
//   const { user } = useSelector((state) => state.auth);
//   const navigate = useNavigate();
//   // console.log(user);
//   const [postComment] = usePostCommentMutation();
//   const { refetch } = useFetchBlogsByIdQuery(id, { skip: !id });
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!user) {
//       alert("Please login to comment on this post.");
//       navigate("/login");
//       return;
//     }
//     const newComment = {
//       comment: comment,
//       user: user?._id,
//       postId: id,
//     };
//     // console.log(newComment);
//     try {
//       const response = await postComment(newComment).unwrap();
//       console.log(response);
//       alert("Comment posted Successfully");
//       setComment("");
//       refetch();
//     } catch (error) {
//       alert("An error occured while posting comment");
//     }
//   };
//   return (
//     <div className="mt-8">
//       <h3 className="text-lg font-medium mb-8">Leave a Comment</h3>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           name="text"
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//           cols="30"
//           rows="10"
//           placeholder="Share your opinion about this post."
//           className="w-full bg-bgPrimary focus:outline-none p-5"
//         />
//         <button
//           type="submit"
//           className="w-full bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PostAComment;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { usePostCommentMutation } from "../../../redux/features/comments/commentApi";
import { useFetchBlogsByIdQuery } from "../../../redux/features/blogs/blogsApi";

const PostAComment = () => {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [postComment] = usePostCommentMutation();
  const { refetch } = useFetchBlogsByIdQuery(id, { skip: !id });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !user._id) {
      alert("Please login to comment on this post.");
      navigate("/login");
      return;
    }

    if (!comment.trim()) {
      alert("Comment cannot be empty.");
      return;
    }

    const newComment = {
      comment: comment.trim(),
      user: user._id,
      postId: id,
    };

    setLoading(true);
    try {
      const response = await postComment(newComment).unwrap();
      console.log(response);
      alert("Comment posted successfully");
      setComment("");
      refetch();
    } catch (error) {
      console.error("Error posting comment:", error);
      alert(
        error?.data?.message || "An error occurred while posting the comment"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-lg font-medium mb-4">Leave a Comment</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          name="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          cols="30"
          rows="5"
          placeholder="Share your opinion about this post."
          className="w-full bg-bgPrimary focus:outline-none p-3 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-primary hover:bg-indigo-500 text-white font-medium py-2 rounded-md mt-4"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default PostAComment;
