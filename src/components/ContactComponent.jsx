import React from "react"

const ContactComponent = () => {
  return (
    <div className="w-full max-w-sm bg-white boarder rounded m-12 p-6">
      <div className="text-2xl text-purple-500 font-bold text-center ">
        Say Hey!
      </div>
      <form>
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold"
          >
            {" "}
            Name
          </label>
          <input
            type="text"
            className="shadow  border rounded w-full py-2 px-3 mt-1 text-gray-700 
            leading-tight focus:outline-none bg-white focus:shadow-outline"
          />
        </div>
        <div className="mt-2">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold"
          >
            Email
          </label>
          <input
            type="email"
            className="shadow  border rounded w-full py-2 px-3 mt-1 text-gray-700 
            leading-tight focus:outline-none bg-white focus:shadow-outline"
          />
        </div>
        <div className="mt-2">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            className="shadow  border rounded w-full py-2 px-3 mt-1 text-gray-700 
            leading-tight focus:outline-none bg-white focus:shadow-outline"
          ></textarea>
          <button
            class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline 
            focus:outline-none text-white font-bold py-2 px-4 w-full rounded"
            type="button"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactComponent
