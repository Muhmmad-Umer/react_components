import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: 1,
      label: "Can I use react on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. ",
    },
    {
      id: 2,
      label: "Can I use react on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. ",
    },
    {
      id: 3,
      label: "Can I use react on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. ",
    },
  ];

  return <Accordion items={items} />;
}

export default App;