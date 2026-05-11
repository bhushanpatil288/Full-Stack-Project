import React from "react";

const TweetCard = ({ data }) => {
  const initials = data.author.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="w-full lg:w-1/2 xl:w-1/3 p-5">
      <div className="p-10 bg-white border border-gray-200 rounded-2xl hover:shadow-md shadow-sm transition flex flex-col justify-between h-full">
        <div>
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
              {initials}
            </div>

            <div>
              <h2 className="font-semibold text-gray-900 leading-none">
                {data.author.name}
              </h2>
            </div>
          </div>

          {/* Tweet Title */}
          <div className="mt-4">
            <h3 className="text-lg font-bold text-gray-900 text-start">
              {data.title}
            </h3>
          </div>

          {/* Tweet Content */}
          <div className="mt-2">
            <p className="text-gray-700 leading-relaxed text-start">
              {data.description}
            </p>
          </div>


        </div>

        <div>
          {/* Footer */}
          <div className="mt-5 flex items-center justify-between text-sm text-gray-500">
            <span>
              {new Date(data.createdAt).toLocaleString()}
            </span>

            <span className="uppercase tracking-wide text-xs bg-gray-100 px-2 py-1 rounded-full">
              {data.author.role}
            </span>
          </div>

          {/* Actions */}
          <div className="mt-5 flex items-center gap-6 text-gray-500 border-t pt-4">
            <button className="hover:text-blue-500 transition">
              💬 Reply
            </button>

            <button className="hover:text-green-500 transition">
              🔁 Repost
            </button>

            <button className="hover:text-red-500 transition">
              ❤️ Like
            </button>

            <button className="hover:text-yellow-500 transition">
              📤 Share
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TweetCard;