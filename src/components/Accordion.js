import { useState } from "react";
import { faqs } from "../App";
import AccordionItem from "./AccordionItem";

export default function Accordion() {
  const [curOpen, setCurOpen] = useState();

  return (
    <div className="accordion">
      {faqs.map((item, i) => (
        <AccordionItem
          index={i}
          key={i}
          title={item.title}
          curOpen={curOpen}
          onOpen={setCurOpen}
        >
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
}
