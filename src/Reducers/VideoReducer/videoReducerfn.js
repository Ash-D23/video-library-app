export const videoreducerfn = (state, action) => {
    switch (action.type) {
      case "setvideos":
        return { ...state, videos: action.payload };
      case "setcategories":
        return { ...state, categories: [ ...state.categories, ...action.payload ]}
      case "selectedcategory":
        return { ...state, selectedcategory: action.payload}
      case "setcategoriesandvideos":
        return { ...state, videos: action.payload.videos, categories: [ ...state.categories, ...action.payload.categories ], isLoading: false }
      case "videoLoading":
        return { ...state, isLoading: action.payload }
      default:
        return state;
    }
};