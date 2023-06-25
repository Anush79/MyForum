import { createContext, useContext, useReducer } from "react";
import { forumData } from "../data";
const DataContext = createContext();
function reducerFunction(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "UPVOTE":
      return { ...state, posts: payload };
    case "DOWNVOTE":
      return { ...state, posts: payload };
    case "BOOKMARK":
      
      return { ...state, posts: payload };
    case "LATEST":
      const updatedArray = state.posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      return { ...state, posts: [...updatedArray] };
    case "POPULAR":
      const mostUpvotedFirstArray= state.posts.sort((a,b)=>b.upvotes-a.upvotes)
      return{...state, posts:[...mostUpvotedFirstArray]}
    default:
      return {...state}
  }
}

export function DataProvider({ children }) {
  const [forumDataState, forumDispatch] = useReducer(
    reducerFunction,
    forumData
  );

  const upVoteFunction = (id) => {
    const updatedArray = forumDataState.posts.map((item) => {
      return item.postId === id
        ? { ...item, upvotes: item.upvotes + 50 }
        : item;
    });
    forumDispatch({ type: "UPVOTE", payload: [...updatedArray] });
  };
  const downVoteFunction = (id) => {
    const updatedArray = forumDataState.posts.map((item) => {
      return item.postId === id
        ? { ...item, downvotes: item.downvotes + 50 }
        : item;
    });
    console.log("downvoted");
    forumDispatch({ type: "DOWNVOTE", payload: [...updatedArray] });
  };
  const bookMarkFunction = (id) => {
    const updatedArray = forumDataState.posts.map((item) => {
      return item.postId === id
        ? { ...item, isBookmarked: !item.isBookmarked }
        : item;
    });
    forumDispatch({ type: "BOOKMARK", payload: [...updatedArray] });
  };

  return (
    <DataContext.Provider
      value={{
        forumDataState,
        bookMarkFunction,
        upVoteFunction,
        downVoteFunction,
        forumDispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
export const useData = () => {
  return useContext(DataContext);
};
