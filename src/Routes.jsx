import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Login from "pages/Login";
import Signup from "pages/Signup";
import PasswordRecovery from "pages/PasswordRecovery";
import Home1 from "pages/Home1";
import Stories from "pages/Stories";
import SingleStory from "pages/SingleStory";
import SinglePost from "pages/SinglePost";
import SingleVideo from "pages/SingleVideo";
import VideoFullScreen from "pages/VideoFullScreen";
import Events from "pages/Events";
import SingleEvent from "pages/SingleEvent";
import SearchResults from "pages/SearchResults";
import Notifications from "pages/Notifications";
import Messages from "pages/Messages";
import DirectMessage from "pages/DirectMessage";
import VideoChat from "pages/VideoChat";
import GroupMessage from "pages/GroupMessage";
import MyFriends from "pages/MyFriends";
import UserProfile from "pages/UserProfile";
import Gallery from "pages/Gallery";
import SinglePhoto from "pages/SinglePhoto";
import MyProfile from "pages/MyProfile";
import Settings from "pages/Settings";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
    {
      path: "passwordrecovery",
      element: <PasswordRecovery />,
    },
    {
      path: "home1",
      element: <Home1 />,
    },
    {
      path: "stories",
      element: <Stories />,
    },
    {
      path: "singlestory",
      element: <SingleStory />,
    },
    {
      path: "singlepost",
      element: <SinglePost />,
    },
    {
      path: "singlevideo",
      element: <SingleVideo />,
    },
    {
      path: "videofullscreen",
      element: <VideoFullScreen />,
    },
    {
      path: "events",
      element: <Events />,
    },
    {
      path: "singleevent",
      element: <SingleEvent />,
    },
    {
      path: "searchresults",
      element: <SearchResults />,
    },
    {
      path: "notifications",
      element: <Notifications />,
    },
    {
      path: "messages",
      element: <Messages />,
    },
    {
      path: "directmessage",
      element: <DirectMessage />,
    },
    {
      path: "videochat",
      element: <VideoChat />,
    },
    {
      path: "groupmessage",
      element: <GroupMessage />,
    },
    {
      path: "myfriends",
      element: <MyFriends />,
    },
    {
      path: "userprofile",
      element: <UserProfile />,
    },
    {
      path: "gallery",
      element: <Gallery />,
    },
    {
      path: "singlephoto",
      element: <SinglePhoto />,
    },
    {
      path: "myprofile",
      element: <MyProfile />,
    },
    {
      path: "settings",
      element: <Settings />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
