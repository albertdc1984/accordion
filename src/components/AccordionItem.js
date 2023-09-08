export default function AccordionItem({
  curOpen,
  onOpen,
  index,
  title,
  children
}) {
  const isOpen = index === curOpen;

  const handleToggle = () => {
    onOpen(isOpen ? null : index);
  };
  return (
    <div className={`item ${isOpen && "open"}`} onClick={handleToggle}>
      <p className="number">{index <= 9 ? `0${index + 1}` : index + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
