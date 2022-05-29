import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";
import { v4 as uuid } from "uuid";

export const getNotes = function (schema, request) {
  const  user = requiresAuth.call(this, request);
    if (!user?._id) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const notes = schema.users.findBy({ _id: user?._id }).notes;
    return new Response(200, {}, { notes });
};

 export const getNotesbyVideo = function (schema, request) {
    const id = request.params.videoId;
    const user = requiresAuth.call(this, request);
    if (!user?._id) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const notes = schema.users.findBy({ _id: user?._id }).notes;
    const notesbyVideo = notes.filter((item) => item.videoId === id)
    return new Response(200, {}, { notes: notesbyVideo });
  };

  export const addNotes = function (schema, request) {
    const user = requiresAuth.call(this, request);
    try {
      if (!user?._id) {
        new Response(
          404,
          {},
          {
            errors: ["The email you entered is not Registered. Not Found error"],
          }
        );
      }
      const notes = schema.users.findBy({ _id: user?._id }).notes;
      const { note } = JSON.parse(request.requestBody);
      const newNote = {
        ...note,
        _id: uuid(),
        createdAt: formatDate(),
        updatedAt: formatDate(),
      }
      notes.push(newNote);
      this.db.users.update({ _id: user?._id }, { notes });
      return new Response(201, {}, { note: newNote });
    } catch (error) {
      return new Response(
        500,
        {},
        {
          error,
        }
      );
    }
  };

  export const EditNotes = function (schema, request) {
    const user = requiresAuth.call(this, request);
    try {
      if (!user?._id) {
        new Response(
          404,
          {},
          {
            errors: ["The email you entered is not Registered. Not Found error"],
          }
        );
      }
      const id = request.params.NoteId;
      const notes = schema.users.findBy({ _id: user?._id }).notes;
      const { noteData } = JSON.parse(request.requestBody);

      this.db.users.update({ _id: user?._id }, { notes: notes.map((item) => item._id === id ? noteData : item ) });
      return new Response(201, {}, { notes: schema.users.notes });
    } catch (error) {
      return new Response(
        500,
        {},
        {
          error,
        }
      );
    }
  };

  export const removeNote = function (schema, request) {
    const user = requiresAuth.call(this, request);
    try {
      if (!user?._id) {
        new Response(
          404,
          {},
          {
            errors: ["The email you entered is not Registered. Not Found error"],
          }
        );
      }
      let notes = schema.users.findBy({ _id: user?._id }).notes;
      const Id = request.params.Id;
      notes = notes.filter((item) => item._id !== Id);
      this.db.users.update({ _id: user?._id }, { notes });
      return new Response(200, {}, {  });
    } catch (error) {
      return new Response(
        500,
        {},
        {
          error,
        }
      );
    }
  };
