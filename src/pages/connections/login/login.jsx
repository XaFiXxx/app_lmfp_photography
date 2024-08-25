import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md">
        <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              autoFocus
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="password">
              Mot de passe
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
              id="password"
              name="password"
              type="password"
              placeholder="******************"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Se connecter
            </button>
            <Link
              to="/register"
              className="inline-block align-baseline font-bold text-sm text-blue-400 hover:text-blue-600"
            >
              Pas de compte ? S'inscrire
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
