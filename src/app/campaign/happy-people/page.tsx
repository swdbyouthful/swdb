'use client';
import React from 'react';

const CampaignPage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>Welcome to Our Campaign</h1>
        <p>Join us in making a difference!</p>
      </header>
      <section style={{ marginBottom: '30px' }}>
        <h2>About the Campaign</h2>
        <p>
          Our campaign is dedicated to bringing positive change to our community. We believe in the power of collaboration and innovation to
          solve the challenges we face.
        </p>
      </section>
      <section>
        <h2>Get Involved</h2>
        <p>
          Whether you want to volunteer, donate, or spread the word, there are many ways to contribute. Together, we can achieve great
          things.
        </p>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px',
          }}
          onClick={() => alert('Thank you for your interest!')}
        >
          Join Us
        </button>
      </section>
    </div>
  );
};

export default CampaignPage;
