import type { NextPage } from 'next';
import useAxiosFunction from '../hooks/useAxiosFunction';
import React, { useEffect } from 'react';
import { Typography, Button, Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const Home: NextPage = () => {
  const [fetch, error, loading, trackedObjects] = useAxiosFunction();

  function handleFetch() {
    fetch({ url: 'trackingObjects/standalones' });
  }

  useEffect(() => {
    console.log('tracked objects');
    console.log(trackedObjects);
  }, [trackedObjects]);

  return (
    <Container sx={{ pt: 4 }}>
      <Typography variant='h2'>Welcome to the Bereyziat Development recruitment task</Typography>
      <Typography>
        You can find here a minimal example of "How to use the useAxiosFunction hook" - Feel free to modify it or
        implement your own if needed
      </Typography>
      <Button variant='contained' startIcon={<FontAwesomeIcon icon={faGear} />} onClick={handleFetch}>
        Try fetching some data
      </Button>
      {trackedObjects != null && <Typography>{JSON.stringify(trackedObjects)}</Typography>}
    </Container>
  );
};

export default Home;
