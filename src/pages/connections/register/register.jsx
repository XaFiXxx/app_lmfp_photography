import React from 'react';

function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md">
        <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
            />
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
      </div>
    </div>
  );
}

export default Register;
