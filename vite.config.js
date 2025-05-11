import react from '@vitejs/plugin-react';

export default {
  plugins: [
    react({
      jsx: 'react', // Explicitly enable JSX transform (for React 17 and higher)
    }),
  ],
};
