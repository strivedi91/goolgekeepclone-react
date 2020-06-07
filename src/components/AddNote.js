import React, { Component } from "react";

export default class AddNote extends Component {
  render() {
    return (
      <div className="grid grid-cols-6 ">
        <div className="col-start-2 col-span-4 shadow appearance-none border rounded text-center py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <input
            className="mb-4 w-full outline-none font-bold"
            id="title"
            type="text"
            placeholder="Title"
          />
          <textarea
            className="w-full outline-none"
            id="description"
            placeholder="Take a note"
          />
        </div>
      </div>
    );
  }
}
