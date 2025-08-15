import React from 'react';

export const Character: React.FC = () => {
  console.log('Character component rendering...');

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #F0F8FF, #E9ECEF)',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{
        fontSize: '3rem',
        color: '#FF6B9D',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        🦄 Karakter Sayfası Test
      </h1>
      
      <div style={{
        background: '#FFE66D',
        color: '#2D2D2D',
        padding: '1rem',
        borderRadius: '10px',
        margin: '1rem',
        textAlign: 'center',
        fontSize: '1.1rem'
      }}>
        Bu sayfa çalışıyor! 🎉
      </div>
      
      <button style={{
        padding: '1rem 2rem',
        background: '#FF6B9D',
        color: 'white',
        border: 'none',
        borderRadius: '10px',
        fontSize: '1.2rem',
        cursor: 'pointer',
        margin: '1rem'
      }} onClick={() => alert('Buton çalışıyor!')}>
        Test Butonu (Tıkla!)
      </button>
      
      <a href="/" style={{
        padding: '1rem 2rem',
        background: '#4ECDC4',
        color: 'white',
        border: 'none',
        borderRadius: '10px',
        fontSize: '1.2rem',
        cursor: 'pointer',
        margin: '1rem',
        textDecoration: 'none'
      }}>
        ← Ana Sayfaya Dön
      </a>
      
      <div style={{
        background: '#FFE66D',
        color: '#2D2D2D',
        padding: '1rem',
        borderRadius: '10px',
        margin: '1rem',
        textAlign: 'center',
        fontSize: '1.1rem'
      }}>
        Eğer bu mesajı görüyorsan, sayfa düzgün çalışıyor! 🎉
      </div>
    </div>
  );
};

export default Character; 