export default function ProductCard({ produto }) {
  return (
    <div style={{
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '16px',
      margin: '10px',
      width: '240px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      backgroundColor: '#ffffff'
    }}>
      <img 
        src={produto.imagem} 
        alt={produto.nome} 
        style={{ 
          width: '100%', 
          height: '140px', 
          objectFit: 'contain', // Ajusta a imagem inteira sem cortar
          padding: '5px',
          borderRadius: '4px' 
        }} 
      />
      <h3 style={{ margin: '10px 0 5px 0', fontSize: '1.1rem' }}>{produto.nome}</h3>
      <p style={{ fontSize: '0.85rem', color: '#64748b', minHeight: '40px' }}>{produto.descricao}</p>
      <p style={{ fontWeight: 'bold', color: '#16a34a', fontSize: '1.1rem', margin: '10px 0' }}>
        R$ {produto.preco.toFixed(2)}
      </p>
      <button style={{
        backgroundColor: '#2563eb',
        color: 'white',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}>
        Comprar
      </button>
    </div>
  );
}