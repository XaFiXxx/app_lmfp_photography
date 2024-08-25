import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    birthday: '',
    password: '',
    password_confirmation: '',
    role: 'visiteur', // Définir un rôle par défaut
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = process.env.REACT_APP_API_URL; // Utiliser la variable d'environnement
      const response = await axios.post(`${apiUrl}/register`, formData);
      console.log(response.data);
      toast.success('Inscription réussie!', {
        position: "top-right", // Remplacement par la chaîne de caractère
        autoClose: 5000, // Le toast se fermera après 5 secondes
      });
    } catch (error) {
      console.error('Il y a eu une erreur!', error.response ? error.response.data : error.message);
      toast.error("Erreur lors de l'inscription.", {
        position: "top-right", // Remplacement par la chaîne de caractère
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md">
        <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="firstname">
              Prénom
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
              id="firstname"
              name="firstname"
              type="text"
              placeholder="Prénom"
              required
              autoFocus
              value={formData.firstname}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="lastname">
              Nom
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Nom"
              required
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="birthday" className="block text-sm font-medium text-gray-300">
              Date de naissance
            </label>
            <input
              type="date"
              name="birthday"
              id="birthday"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-700 text-white"
              required
              value={formData.birthday}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-300">
              Rôle
            </label>
            <select
              id="role"
              name="role"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-gray-700 text-white"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="visiteur">Visiteur</option>
              <option value="mannequin">Mannequin</option>
              <option value="photographe">Photographe</option>
              <option value="photographe">Oraganisateur d'évennement</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
              Mot de passe
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
              id="password"
              name="password"
              type="password"
              placeholder="******************"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password_confirmation">
              Confirmer le mot de passe
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              placeholder="******************"
              required
              value={formData.password_confirmation}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              S'inscrire
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Register;
