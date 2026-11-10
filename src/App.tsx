import { useState } from 'react';
import './App.css';
import { Grid } from '@mui/material';
import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI';
import SelectorUI from './components/SelectorUI';

function App() {
  const [cityInput, setCityInput] = useState(''); 

  return (
    <Grid container spacing={5} sx={{ justifyContent: 'center', alignItems: 'center' }}>

      {/* Encabezado */}
      <Grid size={{ xs: 12, md: 12 }}>
        <HeaderUI />
      </Grid>

      {/* Alertas */}
      <Grid size={{ xs: 12, md: 12 }} container sx={{ justifyContent: 'flex-end', alignItems: 'center' }}>
        Elemento: Alertas
        <AlertUI description="No se prevén lluvias" />
      </Grid>

      {/* Selector */}
      <Grid size={{ xs: 12, md: 3 }}> 
        <SelectorUI cityInput={cityInput} setCityInput={setCityInput} />
      </Grid>

      {/* Indicadores */}
      <Grid size={{ xs: 12, md: 9 }}>
        Elemento: Indicadores {cityInput && `(${cityInput})`}
      </Grid>

      {/* Gráfico */}
      <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
        Elemento: Gráfico
      </Grid>

      {/* Tabla */}
      <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
        Elemento: Tabla
      </Grid>

      {/* Información adicional */}
      <Grid size={{ xs: 12, md: 12 }}>Elemento: Información adicional</Grid>

    </Grid>
  );
}

export default App;