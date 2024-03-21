
import useFetchData from "../../hooks/useFetchData";

const Blog = () => {
  const { data, isLoading, isError } = useFetchData(['blog'], 'https://thawing-falls-89023-aea7c7fc4719.herokuapp.com/blog');

  return (
    <div style={{ background: "#050D14" }}>
      <div className="container mx-auto px-4 py-20">
      <h1 className="text-5xl text-white text-start my-20 font-bold ">
      Latest blog posts
      </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {isLoading && <div>Loading...</div>}
          {isError && <div>Error fetching services</div>}
          {data &&
            data.map((post) => (
              <div key={post.id} className="bg-zinc-900 shadow-md rounded-lg p-4">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-300 mb-2">
                  By {post.author} | {post.date}
                </p>
                <p className="text-gray-500">{post.content}</p>
                {/* Add read more button or link */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
