import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = (props: ListGroupProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{props.heading}</h1>
      {props.items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li key={index} 
              className={selectedIndex == index ? 'list-group-item active' : 'list-group-item'} 
              onClick={ () => { setSelectedIndex(index); props.onSelectItem(item) }}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;