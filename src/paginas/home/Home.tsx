import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                <iframe src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2ddf813b-64ba-4839-883b-e1184a2edeb4/debxdpf-25f18770-1324-4745-ab53-da44d4170aba.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJkZGY4MTNiLTY0YmEtNDgzOS04ODNiLWUxMTg0YTJlZGViNFwvZGVieGRwZi0yNWYxODc3MC0xMzI0LTQ3NDUtYWI1My1kYTQ0ZDQxNzBhYmEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yGxNil8m-kukpHLecnwCfOvqqlTPlTdmxhtDfbZPC1o" width="650" height="650" frameBorder="0"allowFullScreen></iframe>
                    
                </Grid>
                <Grid xs={12} className='postagens'>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;