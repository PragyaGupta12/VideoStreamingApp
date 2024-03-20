import { createSlice } from "@reduxjs/toolkit";
import {OFFSET_LIVE_CHAT} from './configs'

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: []
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(OFFSET_LIVE_CHAT, 1)//whenever we are adding one message we are removing one message after offset value exceeds in the livchat
      state.messages.unshift(action.payload);//unshift because we want to push the data at the first and not last
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
