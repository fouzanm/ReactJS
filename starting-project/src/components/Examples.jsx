import TabButton from './TabButton.jsx'
import Section from './Section.jsx';
import Tabs from './Tabs.jsx'
import { useState } from "react";
import { EXAMPLES } from "../data.js";

export default function Examples() {
    const [ selectedTopic, setSelectedTopic ] = useState()
    function handleClick(selectedButton) {
        console.log(selectedButton)
        setSelectedTopic(selectedButton);
      }
    let tabContent = "Please select a topic"
    if (selectedTopic) {
        tabContent = <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
            <code>
            {EXAMPLES[selectedTopic].code}
            </code>
        </pre>
        </div>
    }
    return (
        <Section title="Examples" id="examples">
            
            <Tabs ButtonContainer="menu" button={<>
                <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleClick('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleClick('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleClick('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleClick('state')}>States</TabButton>
                </>}>
                {tabContent}
            </Tabs>
        
        </Section>
    )
}