const cardStyle = {
  backgroundColor: 'white',
  padding: '1rem',
  marginBottom: '1rem',
  borderRadius: '8px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
};

const Card = ({ title, children }) => (
  <div style={cardStyle}>
    {title && <h3>{title}</h3>}
    {children}
  </div>
);

export default Card;
