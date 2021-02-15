import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SecondPower({ refreshResults }) {
    const classes = useStyles();
    const [values, setValues] = useState({});
    const [result, setResult] = useState(0);
    const history = useHistory();

    const handleOnSubmit = e => {
        e.preventDefault();

        fetch('v1/getAPower/' + values.s, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            if (data.success === 'true') {
                setResult(data.result);
            }
        });
    };

    const handleOnChange = e => {
        setValues({
            ...values,
            [e.target.name]: parseInt(e.target.value)
        });
    };

    const handleOnBack = () => {
        refreshResults();
        history.push("/");
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    <p>Result: <span>{result}</span></p>
                </Typography>
                <Avatar className={classes.avatar}>
                    <KeyboardArrowUpIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Take the value to the 2nd power
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleOnSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                autoComplete="fvalue"
                                name="s"
                                variant="outlined"
                                required
                                fullWidth
                                id="s"
                                label="First Value"
                                autoFocus
                                type="number"
                                onChange={handleOnChange}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Submit
                    </Button>
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        onClick={handleOnBack}
                    >
                        Back
                    </Button>
                </form>
            </div>
        </Container>
    );
}