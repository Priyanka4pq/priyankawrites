// import React, { useEffect, useRef, useState } from "react";
// import { useSelector } from "react-redux";
// import EditorJS from "@editorjs/editorjs";
// import Header from "@editorjs/header";
// import EditorjsList from "@editorjs/list";
// import { usePostBlogMutation } from "../../../redux/features/blogs/blogsApi";
// import { useNavigate } from "react-router-dom";
// const AddPost = () => {
//   const editorRef = useRef(null);
//   const [title, setTitle] = useState("");
//   const [coverImg, setCoverImage] = useState("");
//   const [metaDesciption, setMetaDesciption] = useState("");
//   const [category, setCategory] = useState("");
//   const [rating, setRating] = useState(0);
//   const [message, setMessage] = useState("");
//   const [postBlog, { isLoading }] = usePostBlogMutation();

//   const { user } = useSelector((state) => state.auth);

//   useEffect(() => {
//     const editor = new EditorJS({
//       holder: "editorjs",
//       onReady: () => {
//         editorRef.current = editor;
//       },
//       autofocus: true,
//       tools: {
//         header: {
//           class: Header,
//           inlineToolbar: true,
//         },
//         list: {
//           class: EditorjsList,
//           inlineToolbar: true,
//         },
//       },
//     });
//     return () => {
//       editor.destroy();
//       editorRef.current = null;
//     };
//   }, []);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const content = await editorRef.current.save();
//       const newPost = {
//         title,
//         coverImg,
//         content,
//         category,
//         description: metaDesciption,
//         author: user?._id,
//         rating,
//       };
//       // console.log(newPost);
//       const response = await postBlog(newPost).unwrap();
//       console.log(response);
//       alert("Blog is posted successfully");
//       navigate("/");
//     } catch (error) {
//       console.log("Failed to Submit post", error);
//       setMessage("Failed to submit post. Please try again");
//     }
//   };
//   return (
//     <div className="bg-white md:p-8 p-2">
//       <h2 className="text-2xl font-semibold ">Create A New Blog Post</h2>
//       <form onSubmit={handleSubmit} className="space-y-5 pt-8">
//         <div className="space-y-4">
//           <label className="font-semibold text-xl">Blog Title: </label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
//             placeholder="Ex: Marina del Rey Merriot..."
//             required
//           />
//         </div>

//         {/* blog details */}
//         <div className="flex flex-col md:flex-row justify-between items-start gap-4">
//           {/* left side */}
//           <div className="mg:w-2/3 w-full">
//             <p className="font-semibold text-xl mb-5">Content Section</p>
//             <p className="text-xs italic">Write your post below here...</p>
//             <div id="editorjs"></div>
//           </div>
//           {/* right side */}
//           <div className="md:w-1/3 w-full border p-5 space-y-5">
//             <p className="text-xl font-semibold">Choose Blog Format</p>
//             {/* for images */}
//             <div className="space-y-4">
//               <label className="font-semibold text-xl">Blog Cover: </label>
//               <input
//                 type="text"
//                 value={coverImg}
//                 onChange={(e) => setCoverImage(e.target.value)}
//                 className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
//                 placeholder="https://unsplash.com/image/cover-photo-of-blog1.png..."
//                 required
//               />
//             </div>
//             {/* category */}
//             <div className="space-y-4">
//               <label className="font-semibold text-xl">Category: </label>
//               <input
//                 type="text"
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
//                 placeholder="RoofTop/Travel/Natures.."
//                 required
//               />
//             </div>
//             {/* meta description */}
//             <div className="space-y-4">
//               <label className="font-semibold text-xl">
//                 Meta Description:{" "}
//               </label>
//               <textarea
//                 cols={4}
//                 rows={4}
//                 type="text"
//                 value={metaDesciption}
//                 onChange={(e) => setMetaDesciption(e.target.value)}
//                 className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
//                 placeholder="Write your blog meta desciption..."
//                 required
//               />
//             </div>
//             {/* rating */}
//             <div className="space-y-4">
//               <label className="font-semibold text-xl">Rating:</label>
//               <input
//                 type="text"
//                 value={rating}
//                 onChange={(e) => setRating(e.target.value)}
//                 className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
//                 required
//               />
//             </div>

//             {/* author */}
//             <div className="space-y-4">
//               <label className="font-semibold text-xl">Author: </label>
//               <input
//                 type="text"
//                 value={user.username}
//                 className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
//                 placeholder={`{user.username} (not editable)`}
//                 disabled
//               />
//             </div>
//           </div>
//         </div>

//         {message && <p className="text-red-500">{message}</p>}
//         <button
//           disabled={isLoading}
//           type="submit"
//           className="w-full mt-5 bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md"
//         >
//           Add New Blog
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddPost;

import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import EditorjsList from "@editorjs/list";
import { usePostBlogMutation } from "../../../redux/features/blogs/blogsApi";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  const [coverImg, setCoverImage] = useState("");
  const [metaDesciption, setMetaDesciption] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [postBlog, { isLoading }] = usePostBlogMutation();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const editor = new EditorJS({
      holder: "editorjs",
      onReady: () => {
        editorRef.current = editor;
      },
      autofocus: true,
      tools: {
        header: {
          class: Header,
          inlineToolbar: true,
        },
        list: {
          class: EditorjsList,
          inlineToolbar: true,
        },
      },
    });
    return () => {
      editor.destroy();
      editorRef.current = null;
    };
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const content = await editorRef.current.save();
      const newPost = {
        title,
        coverImg,
        content,
        category,
        description: metaDesciption,
        author: user?._id,
        rating,
      };
      const response = await postBlog(newPost).unwrap();
      console.log(response);
      alert("Blog is posted successfully");
      navigate("/");
    } catch (error) {
      console.log("Failed to Submit post", error);
      setMessage("Failed to submit post. Please try again");
    }
  };

  return (
    <div className="bg-gray-50 p-8 md:p-10 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Create A New Blog Post
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <label className="font-semibold text-xl text-gray-700">
            Blog Title:{" "}
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-white border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none px-5 py-3 rounded-md shadow-sm"
            placeholder="Ex: Marina del Rey Marriott..."
            required
          />
        </div>

        {/* Blog Details */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Side */}
          <div className="md:w-2/3 w-full">
            <p className="font-semibold text-xl text-gray-700 mb-3">
              Content Section
            </p>
            <p className="text-xs italic text-gray-500 mb-2">
              Write your post below here...
            </p>
            <div
              id="editorjs"
              className="border p-4 rounded-md shadow-sm bg-white"
            ></div>
          </div>

          {/* Right Side */}
          <div className="md:w-1/3 w-full border p-6 bg-white rounded-md shadow-sm space-y-6">
            <p className="text-xl font-semibold text-gray-700">
              Choose Blog Format
            </p>

            {/* Blog Cover */}
            <div className="space-y-4">
              <label className="font-semibold text-xl text-gray-700">
                Blog Cover:{" "}
              </label>
              <input
                type="text"
                value={coverImg}
                onChange={(e) => setCoverImage(e.target.value)}
                className="w-full bg-white border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none px-5 py-3 rounded-md shadow-sm"
                placeholder="https://unsplash.com/image/cover-photo-of-blog1.png..."
                required
              />
            </div>

            {/* Category */}
            <div className="space-y-4">
              <label className="font-semibold text-xl text-gray-700">
                Category:{" "}
              </label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-white border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none px-5 py-3 rounded-md shadow-sm"
                placeholder="RoofTop/Travel/Nature..."
                required
              />
            </div>

            {/* Meta Description */}
            <div className="space-y-4">
              <label className="font-semibold text-xl text-gray-700">
                Meta Description:{" "}
              </label>
              <textarea
                cols={4}
                rows={4}
                value={metaDesciption}
                onChange={(e) => setMetaDesciption(e.target.value)}
                className="w-full bg-white border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none px-5 py-3 rounded-md shadow-sm"
                placeholder="Write your blog meta description..."
                required
              />
            </div>

            {/* Rating */}
            <div className="space-y-4">
              <label className="font-semibold text-xl text-gray-700">
                Rating:{" "}
              </label>
              <input
                type="text"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="w-full bg-white border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none px-5 py-3 rounded-md shadow-sm"
                required
              />
            </div>

            {/* Author */}
            <div className="space-y-4">
              <label className="font-semibold text-xl text-gray-700">
                Author:{" "}
              </label>
              <input
                type="text"
                value={user.username}
                className="w-full bg-white border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none px-5 py-3 rounded-md shadow-sm"
                placeholder={`{user.username} (not editable)`}
                disabled
              />
            </div>
          </div>
        </div>

        {/* Message */}
        {message && <p className="text-red-500">{message}</p>}

        {/* Submit Button */}
        <button
          disabled={isLoading}
          type="submit"
          className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {isLoading ? "Posting..." : "Add New Blog"}
        </button>
      </form>
    </div>
  );
};

export default AddPost;
