const navLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold'
};

const NavBar = () => (
  <nav style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', backgroundColor: '#003580', padding: '0.5rem 0' }}>
    <a href="#resources" style={navLinkStyle}>Resources</a>
    <a href="#mentors" style={navLinkStyle}>Mentors</a>
    <a href="#faq" style={navLinkStyle}>FAQs</a>
    <a href="#feedback" style={navLinkStyle}>Feedback</a>
  </nav>
);

export default NavBar;
