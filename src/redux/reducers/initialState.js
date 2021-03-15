const initialState = {
  comments: [
    {
      likes: 0,
      replies: [
        {
          user: "CShaffe",
          text: "Hey there",
          likes: 0,
          replies: [],
          isReply: true,
          liked: false,
        },
      ],
      user: "AlexBiz",
      text: "This is an instagram comment.",
      id: 0,
      isReply: false,
      landscape: false,
      liked: false,
    },
    {
      likes: 0,
      replies: [],
      user: "LSchiffe",
      text: "Nice!",
      id: 1,
      isReply: false,
      liked: false,
      landscape: false,
    },
  ],
};
export default initialState;
