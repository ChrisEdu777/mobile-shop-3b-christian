import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';

export default function App() {
  const produtos = [
    {
      id: 1,
      nome: "Smartphone Galaxy X",
      preco: 2499.90,
      descricao: "128GB, Tela 6.5', Câmera Tripla",
      imagem: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      nome: "iPhone Pro Max",
      preco: 6999.00,
      descricao: "256GB, Tela Super Retina XDR",
      imagem: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      nome: "Fone Bluetooth Bass",
      preco: 299.90,
      descricao: "Cancelamento de ruído e bateria 30h",
      imagem: "https://via.placeholder.com/150"
    },
    {
      id: 4,
      nome: "Carregador Turbo 30W",
      preco: 119.90,
      descricao: "Carregamento rápido USB-C",
      imagem: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div>
      <Header />
      
      <main style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center' }}>Produtos em Destaque</h2>
        
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