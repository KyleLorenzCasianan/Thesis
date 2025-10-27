import React from 'react'

const LandPageFeature = () => {
  return (
    <div className="py-20 px-4 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">
          Why Choose Our System?
        </h2>
        <p className="text-center text-base-content/70 mb-12 max-w-2xl mx-auto">
          Advanced soil monitoring technology to help you make data-driven decisions for optimal crop growth
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-primary/20">
            <div className="card-body items-center text-center">
              <div className="bg-primary rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="card-title text-primary">Real-Time Monitoring</h3>
              <p className="text-base-content/70">Track NPK levels, pH, moisture, and temperature in real-time with precision sensors</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-secondary/20">
            <div className="card-body items-center text-center">
              <div className="bg-secondary rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="card-title text-secondary">AI-Powered Insights</h3>
              <p className="text-base-content/70">Machine learning algorithms provide crop recommendations and fertility predictions</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-accent/20">
            <div className="card-body items-center text-center">
              <div className="bg-accent rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="card-title text-accent">Mobile Access</h3>
              <p className="text-base-content/70">Monitor your fields from anywhere with our mobile-responsive dashboard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandPageFeature