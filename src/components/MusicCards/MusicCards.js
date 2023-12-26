import React from 'react';
import MusicCard from '../MusicCard/MusicCard.js';
import { Grid, Grow } from '@material-ui/core';
import useStyles from './Style.js';
import HeaderSearchPage from '../Search/HeaderSearchPage.js';


const MusicCards = ({ musicData, searchTerm, setSearch, loading }) => {

    const classes = useStyles();

    return (
        <div>
            {musicData.length ? (


                <div>
                    
                    <HeaderSearchPage searchTerm={searchTerm} setSearch={setSearch} />
                    {/* {musicData?.length ? ( */}
                    <Grow in>
                        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                            {(() => {
                                let articlePush = [];
                                for (let i = 0; i < musicData?.length; i++) {
                                    articlePush.push(
                                        <Grid item xs={12} md={6} lg={3} style={{ display: "flex" }}>

                                            <MusicCard musicData={musicData[i]} i={i}></MusicCard>
                                        </Grid>
                                    )
                                }
                                return articlePush;

                            })()}
                        </Grid>
                    </Grow>
                   


                </div>


            ) : (

                <div className="search-page">

                    <HeaderSearchPage searchTerm={searchTerm} setSearch={setSearch} />
                    <h4 style={{ fontFamily: 'cursive', textAlign: 'center', position: 'relative', top: '70px' }}>
                        No searches result found
                    </h4>
                </div>


            )}
        </div>
    )
}

export default MusicCards;