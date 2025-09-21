import React, { useState } from 'react';
import HERO_PNG from '../assets/hero-img.png';
import { useNavigate } from 'react-router-dom';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import Modal from '../components/Modal';

const LandingPage = () => {
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState('login');

  const pageComponent = {
    login: <Login setCurrentPage={setCurrentPage} />,
    signup: <SignUp setCurrentPage={setCurrentPage} />,
  };

  const handleCTA = () => {
    setOpenAuthModal(true);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="container mx-auto px-4 py-6">
        {/** Header */}
        <header className="flex justify-between items-center mb-16">
          <div className="text-xl font-bold cursor-pointer">BuilderCV</div>
          <button
            onClick={() => setOpenAuthModal(true)}
            className="bg-purple-100 text-sm font-semibold text-black px-7 py-2.5 rounded-lg hover:bg-gray-800 hover:text-white transition-colors cursor-pointer"
          >
            Login / Sign Up
          </button>
        </header>

        {/** Hero Container */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-6 leading-tight text-center md:text-left">
              Build Your{' '}
              <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#7182ff_0%,_#3cff52_100%)] bg-[length:200%_200%] animate-text-shine">
                CV Resume EFFORTLESSLY
              </span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 text-center md:text-left">
              Craft a standout CV Resume in minutes with our smart and intuitive resume builder.
            </p>
            <div className="flex justify-center md:justify-start">
              <button
                className="bg-black text-sm font-semibold text-white px-7 py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                onClick={handleCTA}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img src={HERO_PNG} alt="hero image" className="w-full rounded-lg" />
          </div>
        </div>
      </div>

      {/** Features Section */}
      <section className="mt-5 container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">
          FEATURES THAT MAKE YOU SHINE
        </h2>
        <div className="flex flex-row gap-8 overflow-x-auto md:grid md:grid-cols-3 md:overflow-x-visible custom-scrollbar pb-4">
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition min-w-[250px]">
            <h3 className="text-lg font-semibold mb-3">Easy Editing</h3>
            <p className="text-gray-600">
              Update your resume sections with live preview and instant formatting.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition min-w-[250px]">
            <h3 className="text-lg font-semibold mb-3">Beautiful Templates</h3>
            <p className="text-gray-600">
              Choose from modern, professional templates that are easy to customize.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition min-w-[250px]">
            <h3 className="text-lg font-semibold mb-3">One-Click Export</h3>
            <p className="text-gray-600">
              Download your resume instantly as a high-quality PDF with one click.
            </p>
          </div>
        </div>
      </section>

      {/** Footer */}
      <div className="text-sm bg-gray-50 text-gray-600 text-center p-5 mt-5">
        Made with ❤️ leo-teens Happy Coding
      </div>

      {/** Modal */}
      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage('login');
        }}
        hideHeader
      >
        {pageComponent[currentPage]}
      </Modal>
    </div>
  );
};

export default LandingPage;