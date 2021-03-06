import { Server, Model, RestSerializer } from "miragejs";
import {
  loginHandler,
  signupHandler,
} from "./backend/controllers/AuthController";
import {
  userUpdateHandler,
} from "./backend/controllers/UserController";
import {
  getHistoryVideosHandler,
  addVideoToHistoryHandler,
  removeVideoFromHistoryHandler,
  clearHistoryHandler,
} from "./backend/controllers/HistoryController";
import {
  getAllVideosHandler,
  getVideoHandler,
} from "./backend/controllers/VideoController";
import {
  getAllCategoriesHandler,
  getCategoryHandler,
} from "./backend/controllers/CategoryController";
import {
  getLikedVideosHandler,
  addItemToLikedVideos,
  removeItemFromLikedVideos,
} from "./backend/controllers/LikeController";
import {
  getNotes,
  getNotesbyVideo,
  addNotes,
  removeNote,
  EditNotes
} from "./backend/controllers/NotesController";
import {
  getWatchLaterVideosHandler,
  addVideoToWatchLaterHandler,
  removeVideoFromWatchLaterHandler,
  clearWatchLaterHandler,
} from "./backend/controllers/WatchLaterController";
import {
  getAllPlaylistsHandler,
  addNewPlaylistHandler,
  removePlaylistHandler,
  getVideosFromPlaylistHandler,
  addVideoToPlaylistHandler,
  removeVideoFromPlaylistHandler,
} from "./backend/controllers/PlaylistController";
import { videos } from "./backend/db/videos";
import { categories } from "./backend/db/categories";
import { users } from "./backend/db/users";

export function makeServer({ environment = "development" } = {}) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    // TODO: Use Relationships to have named relational Data
    models: {
      video: Model,
      category: Model,
      user: Model,
      like: Model,
      history: Model,
      playlist: Model,
      watchLater: Model,
      notes: Model
    },

    // Runs on the start of the server
    seeds(server) {
      server.logging = false;
      videos.forEach((item) => {
        server.create("video", { ...item });
      });
      categories.forEach((item) => server.create("category", { ...item }));
      users.forEach((item) =>
        server.create("user", {
          ...item,
          likes: [],
          history: [],
          playlists: [],
          watchLater: [],
          notes: []
        })
      );
    },

    routes() {
      this.namespace = "api";
      // auth routes (public)
      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));

      // Update User Profile
      this.post("/user/profile", userUpdateHandler.bind(this));

      // video routes (public)
      this.get("/videos", getAllVideosHandler.bind(this));
      this.get("video/:videoId", getVideoHandler.bind(this));

      // TODO: POST VIDEO TO DB

      // categories routes (public)
      this.get("/categories", getAllCategoriesHandler.bind(this));
      this.get("/categories/:categoryId", getCategoryHandler.bind(this));

      //notes
      this.get("/notes", getNotes.bind(this));
      this.get("/notes/:videoId", getNotesbyVideo.bind(this));
      this.post("/addNotes", addNotes.bind(this));
      this.post("/editNote/:NoteId", EditNotes.bind(this));
      this.delete("/removeNote/:Id", removeNote.bind(this));

      // likes routes (private)
      this.get("/user/likes", getLikedVideosHandler.bind(this));
      this.post("/user/likes", addItemToLikedVideos.bind(this));
      this.delete("/user/likes/:videoId", removeItemFromLikedVideos.bind(this));

      // playlist routes (private)
      this.get("/user/playlists", getAllPlaylistsHandler.bind(this));
      this.post("/user/playlists", addNewPlaylistHandler.bind(this));
      this.delete(
        "/user/playlists/:playlistId",
        removePlaylistHandler.bind(this)
      );

      this.get(
        "/user/playlists/:playlistId",
        getVideosFromPlaylistHandler.bind(this)
      );
      this.post(
        "/user/playlists/:playlistId",
        addVideoToPlaylistHandler.bind(this)
      );
      this.delete(
        "/user/playlists/:playlistId/:videoId",
        removeVideoFromPlaylistHandler.bind(this)
      );

      // history routes (private)
      this.get("/user/history", getHistoryVideosHandler.bind(this));
      this.post("/user/history", addVideoToHistoryHandler.bind(this));
      this.delete(
        "/user/history/:videoId",
        removeVideoFromHistoryHandler.bind(this)
      );
      this.delete("/user/history/all", clearHistoryHandler.bind(this));

      // watchLater routes (private)
      this.get("/user/watchLater", getWatchLaterVideosHandler.bind(this));
      this.post("/user/watchLater", addVideoToWatchLaterHandler.bind(this));
      this.delete(
        "/user/watchLater/:videoId",
        removeVideoFromWatchLaterHandler.bind(this)
      );
      this.delete("/user/watchLater/all", clearWatchLaterHandler.bind(this));
    },
  });
}
