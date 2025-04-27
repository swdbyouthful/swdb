'use client';
import Head from 'next/head';
import React from 'react';

const CampaignPage = () => {
  return (
    <>
      <Head>
        <title>수원동부교회 2025 행복한 사람들의 축제</title>
        <meta name="description" content="Join our campaign to make a difference!" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
      </Head>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1>Welcome to Our Campaign</h1>
          <p>Join us in making a difference!</p>
        </header>
        <section style={{ marginBottom: '30px' }}>
          <h2>About the Campaign</h2>
          <p>
            Our campaign is dedicated to bringing positive change to our community. We believe in the power of collaboration and innovation
            to solve the challenges we face.
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
    </>
  );
};

export default CampaignPage;
