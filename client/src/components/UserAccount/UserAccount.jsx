import React from 'react';
import {
  Container, Avatar, Grid,
} from '@mui/material';

export default function UserAccout() {
  return (
    <Container>
      <Grid container spacing={2} style={{ marginLeft: '100px', marginTop: '150px' }}>
        <Grid item xs={4}>
          <Avatar
            alt="Remy Sharp"
            style={{
              width: '100px', height: '100px',
            }}
            src="/static/images/avatar/1.jpg"
          />
        </Grid>
        <Grid item xs={8}>
          xs=8
        </Grid>
      </Grid>

    </Container>
  );
}
