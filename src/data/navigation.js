import {
  LayoutDashboard,
  Map,
  BookOpen,
  Bookmark,
  FileText,
  User,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Roadmap",
    path: "/roadmap",
    icon: Map,
  },
  {
    title: "Algorithms",
    path: "/algorithms",
    icon: BookOpen,
  },
  {
    title: "Bookmarks",
    path: "/bookmarks",
    icon: Bookmark,
  },
  {
    title: "Notes",
    path: "/notes",
    icon: FileText,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];