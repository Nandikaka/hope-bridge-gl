import { Box, Button, InputBase } from '@mui/material';
import type { FormEvent } from 'react';

export const NewsletterForm = () => {
  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Implement newsletter subscription logic here
  };

  return (
    <Box
      component='form'
      onSubmit={handleSubscribe}
      sx={{
        display: 'flex',
        alignItems: 'center',
        maxWidth: 420,
        padding: '4px',
        borderRadius: 100,
        backgroundColor: 'white',
      }}
    >
      <InputBase
        type='email'
        required
        placeholder='Adresa ta de email'
        slotProps={{ input: { 'aria-label': 'Adresa ta de email' } }}
        sx={{ flex: 1, paddingX: '16px', fontSize: 15 }}
      />
      <Button type='submit' variant='contained'>
        Abonează-te
      </Button>
    </Box>
  );
};
