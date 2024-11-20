const commonVisible = ["admin", "teacher", "student", "parent"]
const adminTeacherVisible = ["admin", "teacher"]

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: commonVisible,
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/list/teachers",
        visible: adminTeacherVisible,
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/list/students",
        visible: adminTeacherVisible,
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/list/parents",
        visible: adminTeacherVisible,
      },
      {
        icon: "/subject.png",
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/list/classes",
        visible: adminTeacherVisible,
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/list/lessons",
        visible: adminTeacherVisible,
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/list/exams",
        visible: commonVisible,
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
        visible: commonVisible,
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
        visible: commonVisible,
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
        visible: commonVisible,
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: commonVisible,
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: commonVisible,
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: commonVisible,
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: commonVisible,
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: commonVisible,
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: commonVisible,
      },
    ],
  },
]

export { menuItems }
