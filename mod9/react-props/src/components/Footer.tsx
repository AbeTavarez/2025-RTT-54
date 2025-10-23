import "./Footer.css";

interface FooterProps {
    currentYear: number;
}

function Footer(props: FooterProps) {
  return (
    <footer className="container">
      <div>Social Links</div>

      <div>{props.currentYear}</div>

      <ul style={{backgroundColor: 'blue'}}>
        <li>YouTube</li>
        <li>Twitter/X</li>
        <li>Facebook</li>
      </ul>
    </footer>
  );
}

export default Footer;