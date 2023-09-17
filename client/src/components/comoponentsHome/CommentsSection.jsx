export const CommentsSection = ({ comments = [] }) => {
  return (
    <>
      <h1 className="text-center font-bold text-3xl font-farro my-10">Nuestros usuarios Satisfechos</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {comments.map((item, index) => (
          <div className="bg-white shadow-md rounded-lg p-4 mx-2 my-2" key={index}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full mr-2" />
                <div>
                  <p className="text-gray-800 font-semibold">{item.name}</p>
                  <p className="text-gray-500 text-sm">{item.date}</p>
                </div>
              </div>
            </div>
            <p className="mt-2 text-gray-600">{item.comment}</p>
          </div>
        ))}
      </section>
    </>
  )
}