import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404 - Page Not Found</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        The page you are looking for does not exist.
      </p>
      <Link href="/" style={{
        padding: '0.75rem 1.5rem',
        backgroundColor: '#000',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '4px',
        transition: 'background-color 0.3s ease'
      }}>
        Return Home
      </Link>
    </div>
  );
} 