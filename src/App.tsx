import { useState } from 'react';
import './App.css';

// Import dos componentes
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Card } from './components/Card/Card';
import { Button } from './components/Button/Button';
import { InputField } from './components/InputField/InputField';
import { Modal } from './components/Modal/Modal';
import { Alert } from './components/Alert/Alert';
import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';
import { Footer } from './components/Footer/Footer';

export default function App() {
  // Estados locais
  const [inputValue, setInputValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertType, setAlertType] = useState<'success' | 'error' | 'warning'>('success');
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setAlertType('success');
      setIsModalOpen(true);
    }, 1000);
  };

  return (
    <div className="app-container">
      <Header />
      <Navbar />

      <div className="content">
        <Sidebar />

        <main className="main">
          <h2>Bem-vindo ao MeuApp</h2>

          <Card
            title="Componente Card"
            content="Este é um exemplo de componente reutilizável em React + Vite."
          />

          <InputField
            label="Digite algo:"
            value={inputValue}
            onChange={(v) => setInputValue(v)}
          />

          <Button label="Executar ação" onClick={handleButtonClick} />

          {isLoading && <LoadingSpinner />}

          <Alert message="Isso é um alerta de exemplo!" type={alertType} />

          <Modal
            title="Ação concluída!"
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </main>
      </div>

      <Footer />
    </div>
  );
}
