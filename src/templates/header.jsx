import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Importer le hook d'authentification
import bannerImage from '../img/front/BannierreHeader.png'; 
import userIcon from '../img/front/user_icon.png';
import logoFront from '../img/front/logo_front2.png';

const categories = [
  { id: 1, name: 'Catégorie 1' },
  { id: 2, name: 'Catégorie 2' },
  { id: 3, name: 'Catégorie 3' }
];

function Header() {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth(); // Utiliser l'authentification

  const isActive = (path) => {
    return location.pathname === path ? 'text-orange-500' : 'text-gray-100 hover:text-orange-500';
  };

  const toggleDropdownMenu = (event) => {
    event.preventDefault();
    const dropdown = document.getElementById('profile-dropdown');
    dropdown.classList.toggle('hidden');
  };

  return (
    <header className="relative bg-black" style={{ backgroundImage: `url(${bannerImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover', marginTop: '-8px' }}>
      <div className="w-3/4 mx-auto">
        <div className="flex justify-center items-center w-full mb-4 mt-2">
          <Link to="/" className="text-center flex justify-center items-center">
            <img src={logoFront} alt="LMFP_Photography Logo" className="mt-4 w-auto h-48" />
          </Link>
        </div>

        <nav className="nav-font">
          <div className="flex items-center justify-between p-4">
            <div className="hidden md:flex md:grow md:justify-center">
              <ul className="flex text-2xl font-bold space-x-4">
                <li>
                  <Link to="/" className={`${isActive('/')} mr-10`}>Accueil</Link>
                </li>
                <li>
                  <Link to="/posts" className={`${isActive('/posts')} mr-10`}>Posts</Link>
                </li>
                <li>
                  <Link to="/galerie" className={`${isActive('/galerie')} mr-10`}>Galerie</Link>
                </li>
                <li className="relative group">
                  <Link to="#" className={`${isActive('/categories')} mr-10 inline-flex items-center`}>
                    Catégories
                  </Link>
                  <ul className="hidden absolute mt-1 text-center bg-white bg-opacity-100 text-gray-900 group-hover:block z-50">
                    {categories.map((categorie) => (
                      <li key={categorie.id}>
                        <Link to={`/categories/${categorie.id}`} className="block hover:bg-gray-300 px-4 py-2">
                          {categorie.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                {!isAuthenticated && (
                  <li>
                    <Link to="/login" className="text-gray-100 hover:text-orange-500 ml-8">Connexion</Link>
                  </li>
                )}
                {isAuthenticated && (
                  <li className="relative">
                    <Link to="#" onClick={toggleDropdownMenu} className="block ml-8">
                      <img src={userIcon} alt="Profil" className="w-10 h-10 rounded-full" />
                    </Link>
                    <div id="profile-dropdown" className="hidden absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                      <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profil</Link>
                      <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</Link>
                      <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={logout}>
                        Se déconnecter
                      </Link>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
