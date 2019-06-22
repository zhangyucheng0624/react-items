import ajax from "./axios.js";

export const answer = (username,password) => ajax("/login",{username,password},"post");
