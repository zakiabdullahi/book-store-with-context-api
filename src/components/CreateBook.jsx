/* eslint-disable no-unused-vars */
import { useState } from "react";
import useBook from "../Contexts/BookContext";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const { addBook, books } = useBook();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = "bId" + Math.random().toString(16).slice(2);
    const newBook = {
      id: id,
      name,
      author,
      description,
      price,
      imageUrl,
    };
    // console.log(id);
    addBook(newBook);
    setName("");
    setAuthor("");
    setDescription("");
    setPrice("");
    setImageUrl("");
    navigate("/books");
  };
  return (
    <div className="mt-24 md:mt-0">
      <div className=" pl-6 flex flex-col   items-center">
        <h1 className="dark:text-white">Create Book</h1>
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

export default CreateBook;
