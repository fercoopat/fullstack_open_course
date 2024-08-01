export default function ButtonGroup({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      {children}
    </div>
  );
}
