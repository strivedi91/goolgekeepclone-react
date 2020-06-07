import React, { Component } from "react";
import Note from "../components/Note";

export default class NoteList extends Component {
  constructor() {
    super();
    this.state = {
      isLoding: true,
      notes: [
        {
          backgroundColor: "FFF",
          isArchieved: false,
          _id: "5edc8e7b2eba451b648cceab",
          title: "My Daily Task - Updated",
          description: "My First Note - Updated",
          createdOn: "2020-06-07T06:51:39.931Z",
          __v: 0,
        },
        {
          backgroundColor: "FFF",
          isArchieved: false,
          _id: "5edc9005ddcb3b4b284abd01",
          title: "My Daily Task",
          description: "My First Note",
          createdOn: "2020-06-07T06:58:13.155Z",
          __v: 0,
        },
      ],
    };
  }

  componentDidMount() {
    // fetch("http://localhost:3100/notes")
    //   .then((res) => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({ notes: result });
    //     },
    //     (error) => {
    //       this.setState({
    //         isLoding: false,
    //         error,
    //       });
    //     }
    //   );
  }

  render() {
    return (
      <div className="grid grid-cols-6 mt-6">
        <div className="col-start-2 col-span-4 grid grid-cols-3 gap-4">
          {this.state.notes.map((item) => (
            <Note key={item._id} note={item} />
          ))}
        </div>
      </div>
    );
  }
}
