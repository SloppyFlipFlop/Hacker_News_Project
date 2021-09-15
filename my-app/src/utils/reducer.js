export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true };

    case "SET_HITS":
      return {
        ...state,
        loading: false,
        hits: action.payload.hits,
        nbpages: action.payload.nbpages,
      };

    case "HANDLE_SEARCH":
      return {
        ...state,
        page: 0,
        query: action.payload,
      };

    case "REMOVE_ARTICLE":
      return {
        ...state,
        hits: state.hits.filter((hit) => hit.objectID !== action.payload),
      };

    default:
      throw new Error(`No Matching Stories`);
  }
};
