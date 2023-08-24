import { useNavigate, useParams } from "react-router-dom";
import useBook from "../Contexts/BookContext";
import { useState } from "react";

const EditBook = () => {
  const { updateBook, books } = useBook();
  const { id } = useParams();

  const book = books.find((book) => book.id === id);
  // console.log(book.id);
  // console.log(id);
  const navigate = useNavigate();

  const [name, setName] = useState(book?.name || "");
  const [author, setAuthor] = useState(book?.author || "");
  const [description, setDescription] = useState(book?.description || "");
  const [price, setPrice] = useState(book?.price || "");
  const [imageUrl, setImageUrl] = useState(book?.imageUrl || "");
  const handleSubmit = (e) => {
    e.preventDefault();
    // const id = "bId" + Math.random().toString(16).slice(2);
    const newBook = {
      id: book.id,
      name,
      author,
      description,
      price,
      imageUrl,
    };
    // console.log(id);
    updateBook(newBook);
    setName("");
    setAuthor("");
    setDescription("");
    setPrice("");
    setImageUrl("");
    navigate("/books");
  };
  return (
    <div>
      <h1 className="text-center">Edit Book</h1>
      <div className=" pl-6 flex items-center  justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-[500px] flex flex-col space-y-4 p-4"
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Book Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="py-2 outline-none px-3 border border-gray-400 rounded-md shadow"
              type="text"
              placeholder="Book Name"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Author</label>
            <input
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
              className="py-2 outline-none px-3 border border-gray-400 rounded-md shadow"
              type="text"
              placeholder="Author"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Description</label>
            <input
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="py-2 outline-none px-3 border border-gray-400 rounded-md shadow"
              type="text"
              placeholder="Description"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Price</label>
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              className="py-2 outline-none px-3 border border-gray-400 rounded-md shadow"
              type="text"
              placeholder="Price"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">ImageUrl</label>
            <input
              onChange={(e) => setImageUrl(e.target.value)}
              value={imageUrl}
              className="py-2 outline-none px-3 border border-gray-400 rounded-md shadow"
              type="text"
              placeholder="ImageUrl"
            />
          </div>
          <button
            type="submit"
            className="lg:w-24 py-2 px-3  w-full bg-indigo-500 text-white rounded-lg"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
