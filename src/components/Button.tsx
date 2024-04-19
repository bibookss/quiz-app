interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button className="btn btn-primary" onClick={props.onClick}>{props.text}</button>
  )
}

export default Button