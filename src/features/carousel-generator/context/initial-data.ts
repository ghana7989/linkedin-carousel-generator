import { Theme, Slide } from "../types";

const themes: Theme[] = [
  {
    name: "Professional Blue",
    colors: ["#1F77B4", "#AEC7E8", "#FF7F0E"],
    background: "#AEC7E8",
    title: "#1F77B4",
    subtitle: "#FF7F0E",
  },
  {
    name: "Corporate Slate",
    colors: ["#2C3E50", "#95A5A6", "#ECF0F1"],
    background: "#ECF0F1",
    title: "#2C3E50",
    subtitle: "#95A5A6",
  },
  {
    name: "Executive Calm",
    colors: ["#2980B9", "#16A085", "#F39C12"],
    background: "#16A085",
    title: "#2980B9",
    subtitle: "#F39C12",
  },
  {
    name: "Business Chic",
    colors: ["#34495E", "#2ECC71", "#E74C3C"],
    background: "#2ECC71",
    title: "#34495E",
    subtitle: "#E74C3C",
  },
  {
    name: "Elegant Pearl",
    colors: ["#BDC3C7", "#2C3E50", "#E67E22"],
    background: "#BDC3C7",
    title: "#2C3E50",
    subtitle: "#E67E22",
  },
  {
    name: "Tech Innovator",
    colors: ["#3498DB", "#9B59B6", "#F1C40F"],
    background: "#F1C40F",
    title: "#3498DB",
    subtitle: "#9B59B6",
  },
  {
    name: "Startup Spark",
    colors: ["#F39C12", "#E74C3C", "#2ECC71"],
    background: "#F39C12",
    title: "#E74C3C",
    subtitle: "#2ECC71",
  },
  {
    name: "Growth Mindset",
    colors: ["#16A085", "#1ABC9C", "#3498DB"],
    background: "#1ABC9C",
    title: "#16A085",
    subtitle: "#3498DB",
  },
  {
    name: "Success Story",
    colors: ["#2ECC71", "#2980B9", "#F39C12"],
    background: "#F39C12",
    title: "#2980B9",
    subtitle: "#2ECC71",
  },
  {
    name: "Visionary Drive",
    colors: ["#9B59B6", "#E74C3C", "#16A085"],
    background: "#16A085",
    title: "#9B59B6",
    subtitle: "#E74C3C",
  },
  {
    name: "Strategic Focus",
    colors: ["#34495E", "#F1C40F", "#2980B9"],
    background: "#F1C40F",
    title: "#34495E",
    subtitle: "#2980B9",
  },
  {
    name: "Bold Leadership",
    colors: ["#E74C3C", "#900C3F", "#2C3E50"],
    background: "#900C3F",
    title: "#E74C3C",
    subtitle: "#2C3E50",
  },
  {
    name: "Creative Pulse",
    colors: ["#9B59B6", "#34495E", "#F39C12"],
    background: "#F39C12",
    title: "#9B59B6",
    subtitle: "#34495E",
  },
  {
    name: "Dynamic Strategy",
    colors: ["#2C3E50", "#16A085", "#E67E22"],
    background: "#E67E22",
    title: "#2C3E50",
    subtitle: "#16A085",
  },
  {
    name: "Future Vision",
    colors: ["#2980B9", "#2ECC71", "#F1C40F"],
    background: "#F1C40F",
    title: "#2980B9",
    subtitle: "#2ECC71",
  },
  {
    name: "Success Drive",
    colors: ["#27AE60", "#E67E22", "#2980B9"],
    background: "#E67E22",
    title: "#27AE60",
    subtitle: "#2980B9",
  },
  {
    name: "Professional Edge",
    colors: ["#2C3E50", "#E74C3C", "#3498DB"],
    background: "#3498DB",
    title: "#2C3E50",
    subtitle: "#E74C3C",
  },
  {
    name: "Impact Leader",
    colors: ["#1ABC9C", "#E74C3C", "#F39C12"],
    background: "#1ABC9C",
    title: "#E74C3C",
    subtitle: "#F39C12",
  },
  {
    name: "Innovator’s Palette",
    colors: ["#9B59B6", "#16A085", "#2ECC71"],
    background: "#16A085",
    title: "#9B59B6",
    subtitle: "#2ECC71",
  },
  {
    name: "LinkedIn Power",
    colors: ["#0077B5", "#F1C40F", "#34495E"],
    background: "#F1C40F",
    title: "#0077B5",
    subtitle: "#34495E",
  },
];

const initialSlides: Slide[] = [
  {
	id: 1,
    title: "Boost Your Productivity as a Developer",
    subtitle:
      "Unlock your potential with these 5 key strategies for maximizing efficiency and output in your coding journey",
    checked: true,
  },
  {
	id: 2,
    title: "Master Your Tools",
    subtitle:
      "Elevate your workflow by learning IDE shortcuts, customizing your development environment, and leveraging automation to handle repetitive tasks",
    checked: true,
  },
  {
	id: 3,
    title: "Practice Time Management",
    subtitle:
      "Optimize your work hours with proven techniques like the Pomodoro method and time-blocking, ensuring focused coding sessions and balanced breaks",
    checked: true,
  },
  {
	id: 4,
    title: "Continuous Learning",
    subtitle:
      "Stay ahead of the curve by consistently updating your skills, exploring new technologies, and implementing industry best practices in your projects",
    checked: true,
  },
  {
	id: 5,
    title: "Write Clean, Maintainable Code",
    subtitle:
      "Enhance code quality and team collaboration by adhering to coding standards, using meaningful variable names, and structuring your projects for long-term success",
    checked: true,
  },
  {
	id: 6,
    title: "Collaborate Effectively",
    subtitle:
      "Boost team productivity through clear communication, efficient use of version control systems, and fostering a culture of knowledge sharing",
    checked: true,
  },
  {
	id: 7,
    title: "Start Your Productivity Journey Today",
    subtitle:
      "Transform your development career by implementing these strategies incrementally, and watch as small changes lead to significant improvements in your coding efficiency",
    checked: true,
  },
];

export { themes, initialSlides };
