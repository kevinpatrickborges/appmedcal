import React, { createContext, useState, useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';

// 1. Criar o Contexto do Tema
const ThemeContext = createContext();

// 2. Criar o Provedor do Tema
const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Componente Principal que Aplica o Tema
const AppContent = () => {
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div>
      <h1>Meu Aplicativo de Vendas</h1>
      <ThemeToggle />
      {/* Restante do seu aplicativo */}
    </div>
  );
};

// 4. Componente de Botão para Alternar o Tema
const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
    </button>
  );
};

// 5. Componente de Cabeçalho (Opcional)
const Header = () => {
  return (
    <header>
      <h1>Meu Aplicativo de Vendas</h1>
      <ThemeToggle />
    </header>
  );
};

// 6. Componente Principal que Envolve Tudo
const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <AppContent />
    </ThemeProvider>
  );
};

// 7. Renderizar a Aplicação
ReactDOM.render(<App />, document.getElementById('root'));

// 8. Estilos CSS (Pode ser colocado em um arquivo separado ou dentro do mesmo arquivo)
const styles = `
  body.light {
    background-color: #ffffff;
    color: #000000;
  }

  body.dark {
    background-color: #121212;
    color: #ffffff;
  }
`;

// Adicionar os estilos ao documento
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);