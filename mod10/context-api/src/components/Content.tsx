import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Content() {
  const { theme } = useContext(ThemeContext);
  console.log('FROM CONTENT ' +theme);
  

  return (
    <div>
      <h2>Some Content</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nesciunt
        corporis, ab beatae facilis enim cumque deleniti veniam cum eius
        asperiores assumenda? Odio, quo obcaecati? Id dolorem impedit
        consequuntur veniam!
      </p>
    </div>
  );
}

export default Content;
