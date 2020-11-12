import React from 'react';
import {Dispatch} from "redux";
import {useDispatch, useSelector} from "react-redux";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {
    Avatar,
    Box,
    TablePagination,
    ListItemText,
    ListItem,
    List,
    Button
} from "@material-ui/core";

import {history} from '../../../history';
import {RootState} from "../../../rootReducer";
import * as actions from '../actions';
import * as I from "../interfaces";
import * as routes from '../../../routes';
import {initialState} from "../initialState";
import {Loader} from "../../../Loader";

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

export function UserList(): React.ReactComponentElement<any> {

    const dispatch: Dispatch<any> = useDispatch();

    const {
        userList,
        page,
        prevPage,
        perPage,
        isLoading,
        since,
        totalUserList,
    } = useSelector((state: RootState) => state.userList);

    React.useEffect(() => {
        if (page > prevPage && totalUserList.length <= page * perPage) {
            dispatch(actions.fetchUserList({perPage: perPage, since: since}));
            dispatch(actions.setMaxPage(page));
        } else if (prevPage > page || totalUserList.length > prevPage * perPage){
            dispatch(actions.setUserList(page, perPage));
        }
    }, [page])


    const handlePageChange = (e: any, pageValue: number) => {
        if (pageValue > page) {
            dispatch(actions.setPage(pageValue))
            dispatch(actions.setPrevPage(page))
        } else {
            dispatch(actions.setPage(pageValue))
            dispatch(actions.setPrevPage(page))
        }
    }

    const handlePerPageChange = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
        dispatch(actions.setPerPage(e.target.value))
        dispatch(actions.setPage(initialState.page))
        dispatch(actions.setPrevPage(initialState.prevPage))
    }

    const handleClick = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
        history.push(routes.USER_DETAILS.routeWithParams(e.currentTarget.value))
    }

    const classes = useStyles();

    return (
        isLoading ? <Loader isLoading={isLoading}/>
        :
            <div className={classes.root}>
                <List component="nav">
                    {userList.map((user: I.user) =>
                    <ListItem key={user.id}>
                        <Box m={2}>
                            <Button onClick={handleClick} value={user.id}>
                                <Avatar alt={user.login} src={user.avatar_url} />
                            </Button>
                            <ListItemText primary={user.login} />
                        </Box>
                    </ListItem>)}
                </List>
                <TablePagination
                    component="div"
                    // -1 means number of pages is not specified server side
                    count={-1}
                    page={page}
                    onChangePage={handlePageChange}
                    rowsPerPage={perPage}
                    onChangeRowsPerPage={handlePerPageChange}
                />
            </div>
    );
}