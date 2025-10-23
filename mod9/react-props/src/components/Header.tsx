import reactLogo from "../assets/react.svg";

interface HeaderProps {
    text: string;
}

function Header(props: HeaderProps) {
    console.log(props);
    
  return (
    <header>
      <img src={reactLogo} alt="logo" />

      <h1>{props.text}</h1>
    </header>
  );
}

export default Header;
