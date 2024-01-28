import { createTheme, MantineProvider } from '@mantine/core';

import { Shell } from '../Shell/ui';
import '@mantine/core/styles.css';

function App() {
  const theme = createTheme({
    fontFamily: 'Open Sans, sans-serif',
  });

  return (
    <MantineProvider theme={theme} defaultColorScheme={'dark'}>
      <Shell />
    </MantineProvider>
  );
}

export default App;
