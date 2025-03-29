// import React, { useState } from "react";
// import SearchBlog from "./SearchBlog";
// import { useFetchBlogsQuery } from "../../redux/features/blogs/blogsApi";
// import { Link } from "react-router-dom";

// const Blog = () => {
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("");
//   const [query, setQuery] = useState({ search: "", category });

//   // get data using Redux
//   console.log(query);
//   const { data: blogs = [], error, isLoading } = useFetchBlogsQuery(query);
//   console.log(blogs);

//   const handleSearchChange = (e) => {
//     setSearch(e.target.value);
//   };

//   const handleSearch = () => setQuery({ search, category });
//   return (
//     <div className="mt-16 container mx-auto">
//       <SearchBlog
//         search={search}
//         handleSearchChange={handleSearchChange}
//         handleSearch={handleSearch}
//       />

//       {isLoading && <div>Loading.....</div>}
//       {error && <div>{error.toString}</div>}

//       <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
//         {blogs.map((blog) => (
//           <Link to={`/blogs/${blog._id}`} key={blog._id} className="shadow-md">
//             <img src={blog.coverImg} alt="" className="h-80 w-full" />
//             <h2 className="text-xl p-4">{blog.title}</h2>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blog;

import React, { useState, useEffect } from "react";
import SearchBlog from "./SearchBlog";
import { useFetchBlogsQuery } from "../../redux/features/blogs/blogsApi";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState({ search: "", category });

  // get data using Redux
  const { data: blogs = [], error, isLoading } = useFetchBlogsQuery(query);

  useEffect(() => {
    console.log("Query updated:", query);
  }, [query]);

  console.log("Blogs Data:", blogs);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    setQuery({ search, category });
  };

  return (
    <div className="mt-16 container mx-auto">
      <SearchBlog
        search={search}
        handleSearchChange={handleSearchChange}
        handleSearch={handleSearch}
      />

      {isLoading && <div>Loading.....</div>}
      {error && <div>{error.toString()}</div>}

      <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {blogs.map((blog) => (
          <Link
            to={`/blogs/${blog._id}`}
            key={blog._id}
            className="shadow-md rounded-2xl overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={blog?.coverImg}
              alt=""
              className="h-80 w-full object-cover rounded-t-2xl"
            />
            <h2 className="text-xl p-4 bg-white rounded-b-2xl">{blog.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
