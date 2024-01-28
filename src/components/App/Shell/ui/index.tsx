import { AppShell } from '@mantine/core';
import { FC } from 'react';

import { Header } from './Header/ui';
import { Main } from './Main/ui';

import styles from './styles/Shell.module.scss';
export const Shell: FC = () => {
  return (
    <AppShell className={styles.shell}>
      <AppShell.Header className={styles.header}>
        <Header />
      </AppShell.Header>
      <AppShell.Main className={styles.main}>
        <Main />
      </AppShell.Main>
    </AppShell>
  );
};
