// import React from "react";
// import commentorIcon from "../../../assets/hero-carosel/user.jpg";
// import { formatDate } from "../../../utilis/formateDate";
// import PostAComment from "./PostAComment";
// import { useSelector } from "react-redux";

// const CommentCard = ({ comments }) => {
//   console.log(comments);
//   const user = useSelector((state) => state.auth.user);

//   return (
//     <div className="my-6 bg-white p-8">
//       <div>
//         {comments?.length > 0 ? (
//           <div>
//             <h3 className="text-lg font-medium">All Comments</h3>
//             <div>
//               {comments.map((Comment, index) => {
//                 <div key={index}>
//                   <div>
//                     <img src={commentorIcon} alt="" className="h-14" />
//                     <div>
//                       <p className="text-lg font-medium underline capitalize underline-offset-4 text-blue-400">
//                         {comment?.user?.username}
//                       </p>
//                       <p className="text-[12px] italic">
//                         {formatDate(comment.createdAt)}
//                       </p>
//                     </div>
//                   </div>
//                   {/* comment detail */}
//                   <div className="text-gray-600 mt-5 border p-8">
//                     <p className="md:w-4/5">{comment?.comment}</p>
//                   </div>
//                 </div>;
//               })}
//             </div>
//           </div>
//         ) : (
//           <div className="text-lg font-medium">No comments found!</div>
//         )}
//       </div>

//       {/* comment input here */}
//       <PostAComment />
//     </div>
//   );
// };

// export default CommentCard;

// import React from "react";
// import commentorIcon from "../../../assets/hero-carosel/user.jpg";
// import { formatDate } from "../../../utilis/formateDate";
// import PostAComment from "./PostAComment";
// import { useSelector } from "react-redux";

// const CommentCard = ({ comments }) => {
//   console.log(comments);
//   const user = useSelector((state) => state.auth.user);

//   return (
//     <div className="my-6 bg-white p-8">
//       <div>
//         {comments?.length > 0 ? (
//           <div>
//             <h3 className="text-lg font-medium">All Comments</h3>
//             <div>
//               {comments.map((comment, index) => (
//                 <div key={index} className="mb-6">
//                   <div className="flex items-center gap-4">
//                     <img
//                       src={commentorIcon}
//                       alt="User"
//                       className="h-14 w-14 rounded-full"
//                     />
//                     <div>
//                       <p className="text-lg font-medium underline capitalize text-blue-400">
//                         {comment?.user?.username || "Anonymous"}
//                       </p>
//                       <p className="text-[12px] italic text-gray-500">
//                         {formatDate(comment.createdAt)}
//                       </p>
//                     </div>
//                   </div>
//                   {/* Comment detail */}
//                   <div className="text-gray-600 mt-5 border p-4 rounded-md shadow-sm">
//                     <p className="md:w-4/5">{comment?.comment}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ) : (
//           <div className="text-lg font-medium">No comments found!</div>
//         )}
//       </div>

//       {/* Comment input form */}
//       <PostAComment />
//     </div>
//   );
// };

// export default CommentCard;

import React from "react";
import { Trash } from "lucide-react"; // Import delete icon
import commentorIcon from "../../../assets/hero-carosel/user.jpg";
import { formatDate } from "../../../utilis/formateDate";
import PostAComment from "./PostAComment";
import { useSelector } from "react-redux";
import { useDeleteCommentMutation } from "../../../redux/features/comments/commentApi";
import { useFetchBlogsByIdQuery } from "../../../redux/features/blogs/blogsApi";
import { useParams } from "react-router-dom";

const CommentCard = ({ comments, onDelete }) => {
  console.log(comments);
  const { id } = useParams();
  const user = useSelector((state) => state.auth.user);
  const [deleteComment] = useDeleteCommentMutation();
  const { refetch } = useFetchBlogsByIdQuery(id, { skip: !id });
  //  const [deletingCommentId, setDeletingCommentId] = useState(null);

  const handleDelete = async (commentId) => {
    try {
      const wantsToDelete = confirm("Do you really want to delte it???");
      if (wantsToDelete === false) return;
      const response = await deleteComment({ commentId });
      console.log(response);
      refetch();
    } catch (error) {
      console.error("Error posting comment:", error);
      alert(
        error?.data?.message || "An error occurred while posting the comment"
      );
    }
  };

  return (
    <div className="my-6 bg-white p-8">
      <div>
        {comments?.length > 0 ? (
          <div>
            <h3 className="text-lg font-medium">All Comments</h3>
            <div>
              {comments.map((comment, index) => (
                <div key={index} className="mb-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={commentorIcon}
                      alt="User"
                      className="h-14 w-14 rounded-full"
                    />
                    <div>
                      <p className="text-lg font-medium underline capitalize text-blue-400">
                        {comment?.user?.username || "Anonymous"}
                      </p>
                      <p className="text-[12px] italic text-gray-500">
                        {formatDate(comment.createdAt)}
                      </p>
                    </div>
                  </div>
                  {/* Comment detail */}
                  <div className="text-gray-600 mt-5 border p-4 rounded-md shadow-sm flex justify-between items-center">
                    <p className="md:w-4/5">{comment?.comment}</p>
                    {/* Show delete button only for the comment's author */}
                    {user && user._id === comment?.user?._id && (
                      <button
                        onClick={() => handleDelete(comment._id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash size={20} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-lg font-medium">No comments found!</div>
        )}
      </div>

      {/* Comment input form */}
      <PostAComment />
    </div>
  );
};

export default CommentCard;
