import {Backdrop, CircularProgress} from "@material-ui/core";
import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                marginTop: theme.spacing(2),
                marginRight: theme.spacing(2),
            },
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    }),
);

export const Loader = (props: {isLoading: boolean}) => {

    const classes = useStyles();

    return (
        <Backdrop className={classes.backdrop} open={props.isLoading}>
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}