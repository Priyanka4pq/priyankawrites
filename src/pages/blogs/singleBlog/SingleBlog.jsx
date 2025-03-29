// import React from "react";
// import { useParams } from "react-router-dom";
// import { useFetchBlogsByIdQuery } from "../../../redux/features/blogs/blogsApi";
// import SingleBlogCard from "./SingleBlogCard";
// import CommentCard from "../comments/CommentCard";
// import RelatedBlog from "./RelatedBlog";

// const SingleBlog = () => {
//   const { id } = useParams();
//   //   console.log(id);
//   const { data: blog, error, isLoading } = useFetchBlogsByIdQuery(id);
//   console.log(blog);
//   return (
//     <div className="text-primary container mx-auto mt-8">
//       <div>
//         {isLoading && <div>Loading....</div>}
//         {error && <div>Something went wrong....</div>}
//         {blog?.post && (
//           <div className="flex flex-col lg:flex-row justify-between items-start md:gap-12 gap-8">
//             <div className="lg:w-2/3 w-full">
//               <SingleBlogCard blog={blog.post} />
//               <CommentCard comments={blog?.comments} />
//             </div>
//             <div className="bg-white lg:w-1/3 w-full">
//               <RelatedBlog />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SingleBlog;

import React from "react";
import { useParams } from "react-router-dom";
import { useFetchBlogsByIdQuery } from "../../../redux/features/blogs/blogsApi";
import SingleBlogCard from "./SingleBlogCard";
import CommentCard from "../comments/CommentCard";
import RelatedBlog from "./RelatedBlog";

const SingleBlog = () => {
  const { id } = useParams();
  const { data: blog, error, isLoading } = useFetchBlogsByIdQuery(id);

  if (isLoading) return <div>Loading....</div>;
  if (error) return <div>Something went wrong....</div>;
  if (!blog || !blog.post) return <div>Blog not found</div>;

  return (
    <div className="text-primary container mx-auto mt-8">
      <div className="flex flex-col lg:flex-row justify-between items-start md:gap-12 gap-8">
        <div className="lg:w-2/3 w-full">
          <SingleBlogCard blog={blog.post} />
          <CommentCard comments={blog?.comments || []} />
        </div>
        <div className="bg-white lg:w-1/3 w-full">
          <RelatedBlog />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
