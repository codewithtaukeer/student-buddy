const Section = ({ id, title, children }) => (
  <section id={id}>
    <h2 style={{ color: '#002366' }}>{title}</h2>
    {children}
  </section>
);

export default Section;

