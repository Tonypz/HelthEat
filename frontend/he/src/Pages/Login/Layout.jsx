import { Outlet } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { Grid } from '@mui/material';
import * as sc from './Layout.styled';

export const Layout = () => {
  return (
    <sc.AuthContainer>
      <Grid
        container
        direction="row"
        justifyContent="center"
        spacing={0}
        alignItems="center"
      >
        <Grid item md={6} container justifyContent="center">
          <sc.AuthWrapper>
            <Outlet />
          </sc.AuthWrapper>
        </Grid>
      </Grid>
    </sc.AuthContainer>
  );
};