import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import EditorjsList from "@editorjs/list";
import {
  useFetchBlogsByIdQuery,
  useUpdateBlogMutation,
} from "../../../redux/features/blogs/blogsApi";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePost = () => {
  const { id } = useParams();
  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  const [coverImg, setCoverImage] = useState("");
  const [metaDesciption, setMetaDesciption] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [updateBlog] = useUpdateBlogMutation();
  const {
    data: blog = {},
    error,
    isLoading,
    refetch,
  } = useFetchBlogsByIdQuery(id);
  console.log(blog);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (blog?.post) {
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
        data: blog?.post?.content || {},
      });
      return () => {
        editor.destroy();
        editorRef.current = null;
      };
    }
  }, [blog]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const content = await editorRef.current.save();
      const updatedPost = {
        title: title || blog.post.title,
        coverImg: coverImg || blog.post.coverImg,
        content,
        description: metaDesciption || blog.post.description,
        author: user?._id,
        rating: rating || blog.post.rating,
      };
      // console.log(updatedPost);
      const response = await updateBlog({ id, ...updatedPost }).unwrap();
      console.log(response);
      alert("Blog is updated successfully");
      refetch();
      navigate("/dashboard");
    } catch (error) {
      console.log("Failed to Submit post", error);
      setMessage("Failed to submit post. Please try again");
    }
  };
  return (
    <div className="bg-white md:p-8 p-2">
      <h2 className="text-2xl font-semibold ">Edit or Update Post</h2>
      <form onSubmit={handleSubmit} className="space-y-5 pt-8">
        <div className="space-y-4">
          <label className="font-semibold text-xl">Blog Title: </label>
          <input
            type="text"
            defaultValue={blog?.post?.title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
            placeholder="Ex: Marina del Rey Merriot..."
            required
          />
        </div>

        {/* blog details */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          {/* left side */}
          <div className="mg:w-2/3 w-full">
            <p className="font-semibold text-xl mb-5">Content Section</p>
            <p className="text-xs italic">Write your post below here...</p>
            <div id="editorjs"></div>
          </div>
          {/* right side */}
          <div className="md:w-1/3 w-full border p-5 space-y-5">
            <p className="text-xl font-semibold">Choose Blog Format</p>
            {/* for images */}
            <div className="space-y-4">
              <label className="font-semibold text-xl">Blog Cover: </label>
              <input
                type="text"
                defaultValue={blog?.post?.coverImg}
                onChange={(e) => setCoverImage(e.target.value)}
                className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
                placeholder="https://unsplash.com/image/cover-photo-of-blog1.png..."
                required
              />
            </div>
            {/* category */}
            <div className="space-y-4">
              <label className="font-semibold text-xl">Category: </label>
              <input
                type="text"
                defaultValue={blog?.post?.category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
                placeholder="RoofTop/Travel/Natures.."
                required
              />
            </div>
            {/* meta description */}
            <div className="space-y-4">
              <label className="font-semibold text-xl">
                Meta Description:{" "}
              </label>
              <textarea
                cols={4}
                rows={4}
                type="text"
                defaultValue={blog?.post?.description}
                onChange={(e) => setMetaDesciption(e.target.value)}
                className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
                placeholder="Write your blog meta desciption..."
                required
              />
            </div>
            {/* rating */}
            <div className="space-y-4">
              <label className="font-semibold text-xl">Rating:</label>
              <input
                type="text"
                defaultValue={blog?.post?.rating}
                onChange={(e) => setRating(e.target.value)}
                className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
                required
              />
            </div>

            {/* author */}
            <div className="space-y-4">
              <label className="font-semibold text-xl">Author: </label>
              <input
                type="text"
                value={user.username}
                className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
                placeholder={`{user.username} (not editable)`}
                disabled
              />
            </div>
          </div>
        </div>

        {message && <p className="text-red-500">{message}</p>}
        <button
          disabled={isLoading}
          type="submit"
          className="w-full mt-5 bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default UpdatePost;
