import React from 'react';
import moment from "moment";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Backdrop, CircularProgress, Link} from "@material-ui/core";
import {Dispatch} from "redux";
import {useDispatch, useSelector} from "react-redux";

import {RootState} from "../../../rootReducer";
import * as actions from "../../UserDetails/actions";
import {history} from "../../../history";
import * as routes from "../../../routes";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 22,
        color: 'black',
    },
    pos: {
        marginBottom: 12,
    },
});

export function UserDetails(props: any): React.ReactComponentElement<any> {
    const classes = useStyles();

    const bull = <span className={classes.bullet}>•</span>;

    const dispatch: Dispatch<any> = useDispatch();

    const {
        userDetails,
        isLoading,
    } = useSelector((state: RootState) => state.userDetails);

    const {
        match: {
            params: {
                id,
            }
        }} = props

    React.useEffect(() => {
        dispatch(actions.fetchUserDetails({id}))
    }, [])

    const handleClick = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
        history.push(routes.USER_LIST.route)
    }

    return(
        isLoading ?
            <Backdrop open={isLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            :
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {userDetails.login}
                </Typography>
                <Typography>
                    Followers: {userDetails.followers} {bull} Following: {userDetails.following}
                </Typography>
                <Typography>
                    Public gists: {userDetails.public_gists} {bull} Public repos: {userDetails.public_repos}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    <Link href={userDetails.html_url} color="inherit">
                        {userDetails.html_url}
                    </Link>
                </Typography>
                <Typography variant="body2" component="p">
                    Blog:&nbsp;
                    <Link href={userDetails.blog} color="inherit">
                        {userDetails.blog}
                    </Link>
                    <br />
                    Created: {moment(userDetails.created_at).format('LLL')}
                    <br />
                    Updated: {moment(userDetails.updated_at).format('LLL')}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleClick}>BACK TO USER LIST</Button>
            </CardActions>
        </Card>
    );
}