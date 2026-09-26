import type { FormEvent } from 'react';
import { Box, Button, Container, InputBase, Stack } from '@mui/material';
import { useNavigate } from 'react-router';
import { Banner } from '../../components/Banner/Banner';
import communityImage from '../../assets/categories/community.png';
import socialImage from '../../assets/categories/social.png';

export const HomePage = () => {
  const navigate = useNavigate();

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: connect to the newsletter endpoint
  };

  return (
    <Container maxWidth='lg' sx={{ paddingY: '48px' }}>
      <Stack spacing={8}>
        <Banner
          title='Transformă o zi de muncă într-o zi pentru comunitate.'
          description={
            <>
              <p>
                Prin Volunteer Day, companiile le oferă angajaților o zi liberă
                plătită pentru a se implica în proiecte care contează. Fie că
                plantează copaci, sprijină o cauză socială sau contribuie la un
                proiect local, fiecare angajat își poate transforma timpul
                într-o faptă bună.
              </p>
              <p>
                Tu îți iei o zi liberă. Comunitatea câștigă o zi de implicare.
              </p>
            </>
          }
          image={communityImage}
          imageAlt='Voluntari zâmbind'
          imagePosition='left'
          action={
            <Button variant='contained' onClick={() => navigate('/search')}>
              Vezi Proiecte
            </Button>
          }
        />

        <Banner
          title='Fii Parte din Schimbare'
          description='Înscrie-te în comunitatea HopeBridge și fii la curent cu proiecte noi, povești inspiraționale și oportunități de implicare.'
          image={socialImage}
          imageAlt='Voluntar care ține o cutie cu donații'
          imagePosition='right'
          action={
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
          }
        />
      </Stack>
    </Container>
  );
};
