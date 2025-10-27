import React from 'react'
import { Link } from 'react-router'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-lg">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            Soil Fertility Monitoring
          </Link>
        </div>
        <div className="flex-none">
          <Link to="/">
            <button className="btn btn-ghost">Back to Home</button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-primary mb-8 text-center">
            About This Project
          </h1>
          
          <div className="card bg-base-100 shadow-xl mb-8">
            <div className="card-body">
              <h2 className="card-title text-2xl text-secondary mb-4">Project Overview</h2>
              <p className="text-base-content/80 text-lg leading-relaxed">
                The Soil Fertility Monitoring and Fertigation System is an innovative solution designed to help farmers optimize their agricultural practices through data-driven insights. This project combines modern sensor technology with machine learning algorithms to provide real-time soil analysis and crop suitability recommendations.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl mb-8">
            <div className="card-body">
              <h2 className="card-title text-2xl text-secondary mb-4">Key Features</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="badge badge-primary mt-1">1</span>
                  <div>
                    <h3 className="font-semibold text-lg">Real-Time Soil Monitoring</h3>
                    <p className="text-base-content/70">Track NPK levels, pH, moisture, and temperature with precision sensors</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="badge badge-secondary mt-1">2</span>
                  <div>
                    <h3 className="font-semibold text-lg">AI-Powered Analysis</h3>
                    <p className="text-base-content/70">Machine learning algorithms provide crop recommendations and fertility predictions</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="badge badge-accent mt-1">3</span>
                  <div>
                    <h3 className="font-semibold text-lg">Automated Fertigation</h3>
                    <p className="text-base-content/70">Intelligent irrigation and fertilization based on real-time soil conditions</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="badge badge-info mt-1">4</span>
                  <div>
                    <h3 className="font-semibold text-lg">Mobile & Web Access</h3>
                    <p className="text-base-content/70">Monitor your fields from anywhere with responsive web and mobile apps</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl mb-8">
            <div className="card-body">
              <h2 className="card-title text-2xl text-secondary mb-4">Technology Stack</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Frontend</h3>
                  <ul className="list-disc list-inside space-y-1 text-base-content/70">
                    <li>React + Vite</li>
                    <li>Tailwind CSS + DaisyUI</li>
                    <li>React Native (Mobile)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Backend</h3>
                  <ul className="list-disc list-inside space-y-1 text-base-content/70">
                    <li>Node.js + Express</li>
                    <li>MongoDB Database</li>
                    <li>IoT Sensor Integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl text-secondary mb-4">Our Mission</h2>
              <p className="text-base-content/80 text-lg leading-relaxed">
                Our mission is to empower farmers with advanced technology to make informed decisions about soil health and crop management. By providing accessible, accurate, and actionable data, we aim to improve agricultural productivity while promoting sustainable farming practices.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/register">
              <button className="btn btn-primary btn-lg rounded-full px-8">
                Get Started Today
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
