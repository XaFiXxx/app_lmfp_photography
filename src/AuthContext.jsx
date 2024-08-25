import React, { createContext, useContext, useState } from 'react';

// Créer le contexte d'authentification
const AuthContext = createContext();

// Fournir le contexte
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // faux par défaut

  // Méthodes pour se connecter et se déconnecter
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personnalisé pour utiliser l'authentification
export function useAuth() {
  return useContext(AuthContext);
}
