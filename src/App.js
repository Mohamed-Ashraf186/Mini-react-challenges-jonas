import { useState } from "react";

export default function App() {
  const [collapsedNumWords, setCollapsedNumWords] = useState(15);

  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1f09cd",
  expanded,
  className,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  function handleCollapsed(str, num) {
    // Split the string into an array of words
    const words = str.split(" ");

    // Limit the words to the first 20 elements
    const limitedWords = words.slice(0, num);

    // Join the limited words back into a string with spaces
    const result = limitedWords.join(" ") + "...";

    return result;
  }

  function handleShow() {
    setIsExpanded((prev) => !prev);
  }

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };

  return (
    <div className={className}>
      <span>
        {isExpanded ? children : handleCollapsed(children, collapsedNumWords)}
      </span>
      <button style={buttonStyle} onClick={handleShow}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
