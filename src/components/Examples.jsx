import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  const topics = [
    { id: "components", label: "Components" },
    { id: "jsx", label: "JSX" },
    { id: "props", label: "Props" },
    { id: "state", label: "State" },
  ];

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={topics.map(({ id, label }) => (
          <TabButton
            key={id}
            isSelected={selectedTopic === id}
            onSelect={() => handleSelect(id)}
          >
            {label}
          </TabButton>
        ))}
      >
        {tabContent}
      </Tabs>
      <menu></menu>
    </Section>
  );
}
