import React from 'react';
import {Card, CardActions,CardActionArea,Typography}  from '@material-ui/core';
import useStyles from './style';


const MusicCard =({musicData :{ trackName,artistName,previewUrl},i,activeArticle})=> {
    const classes = useStyles();


    return (
        <Card  className={classes.activeCard}>
            <CardActionArea  target="_blank">


                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h3">
                            <span>
                            <b>Artist Name</b> <br/> {artistName}
                            </span>
                    </Typography> &ensp;&ensp;&ensp;
                    <Typography variant="body2" color="textSecondary" component="h3">
                        <span>
                          <b>Track Name</b> <br/>{trackName}
                        </span>
                    </Typography>
                </div>

            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <audio controls>
                <source src={previewUrl} type="audio/mp3" />

            </audio>

            </CardActions>
        </Card>
    );
}

export default MusicCard;