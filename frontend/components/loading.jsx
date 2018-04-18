import React from 'react';

export const LoadingScreen = () => {
  return (
    <main className="animated fadeIn">
      <section className="loading-screen">
        <div className="loading-container">
          <div className="loading-rocket-fire">
            <div className="loading-rocket">
              <i className="fas fa-rocket"
                data-fa-transform="rotate-315"></i>
            </div>
            <div className="loading-fire">
              <i className="fab fa-gripfire"
                data-fa-transform="rotate-180"></i>
            </div>
          </div>
        </div>
      </section>
      <section className="loading-screen-whitespace">

      </section>
    </main>
  );
};
