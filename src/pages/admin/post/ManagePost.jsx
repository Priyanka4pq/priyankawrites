

import React, { useState } from "react";
import {
  useDeleteBlogMutation,
  useFetchBlogsQuery,
} from "../../../redux/features/blogs/blogsApi";
import { formatDate } from "../../../utilis/formateDate";
import { Link } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";

const ManagePost = () => {
  const [query, setQuery] = useState({ search: "", category: "" });
  const { data: blogs = [], isLoading, refetch } = useFetchBlogsQuery(query);
  const [deleteBlog] = useDeleteBlogMutation();

  const handleDelete = async (id) => {
    try {
      const response = await deleteBlog(id).unwrap();
      alert(response.message);
      refetch();
    } catch (error) {
      console.error("Failed to delete blog", error);
    }
  };

  return (
    <section className="py-10 bg-gray-100">
      <div className="w-full mb-12 xl:mb-0 px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-2xl rounded-2xl overflow-hidden">
          <div className="rounded-t mb-0 px-6 py-4 bg-gray-800 text-white flex justify-between items-center">
            <h3 className="text-xl font-semibold">All Blogs</h3>
            <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition duration-150">
              See all
            </button>
          </div>

          <div className="block w-full overflow-x-auto">
            <table className="min-w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-700 uppercase bg-gray-300 border-b">
                    No.
                  </th>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-700 uppercase bg-gray-300 border-b">
                    Blog Name
                  </th>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-700 uppercase bg-gray-300 border-b">
                    Publishing Date
                  </th>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-700 uppercase bg-gray-300 border-b">
                    Editor Manage
                  </th>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-700 uppercase bg-gray-300 border-b">
                    Delete
                  </th>
                </tr>
              </thead>

              <tbody>
                {blogs.map((blog, index) => (
                  <tr
                    key={index}
                    className="odd:bg-gray-100 even:bg-gray-200 hover:bg-gray-400 transition duration-200"
                  >
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {blog.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {formatDate(blog.createdAt)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 hover:text-gray-900 font-medium">
                      <Link
                        to={`/dashboard/update-items/${blog._id}`}
                        className="flex gap-1 items-center"
                      >
                        <MdModeEditOutline /> Edit
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button
                        onClick={() => handleDelete(blog._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition duration-150"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagePost;
