import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';

export default function App() {
  const produtos = [
    {
      id: 1,
      nome: "Smartphone Galaxy S24",
      preco: 4599.00,
      descricao: "Tela Dynamic AMOLED 2X, 128GB, Câmera Tripla com IA",
      imagem: "/imagens/galaxy-s24.png"
    },
    {
      id: 2,
      nome: "Fone de Ouvido Bluetooth",
      preco: 349.90,
      descricao: "Cancelamento ativo de ruído, som HD e bateria de até 30 horas",
      imagem: "/imagens/fone.png"
    },
    {
      id: 3,
      nome: "Notebook Ultra Slim",
      preco: 3899.00,
      descricao: "Processador Intel Core i5, 16GB RAM, SSD 512GB",
      imagem: "/imagens/notebook.png"
    }
  ];

  return (
    <div>
      <Header />
      
      <main style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Catálogo de Produtos</h2>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {produtos.map((item) => (
            <ProductCard key={item.id} produto={item} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}