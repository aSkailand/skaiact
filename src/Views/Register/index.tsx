import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, Input, FormHelperText, Button, CardActions, CardContent, Typography, Link } from '@material-ui/core';
import Card from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './index.scss';
import { connect } from 'react-redux';
import { registerUser } from '../../actions';
import { Redirect } from 'react-router-dom';

interface Props {
    addUser?: (email: string, pw: string) => Promise<void>
}

interface State {
    email: string;
    pw: string;
    redirect: boolean;
}

class Register extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            email: '',
            pw: '',
            redirect: false
        }
    }

    handleEmailChange = (event: any) => {
        this.setState({
            email: event.target.value
        });
        console.log(this.state.email);
    }

    handlePwChange = (event: any) => {
        this.setState({
            pw: event.target.value
        });
    }

    register = () => {
        this.props.addUser!(this.state.email, this.state.pw)
        .then(() => {
            alert('User created!');
            this.setState({redirect: true});
        });
    }

    render(){
        return(
                <>
                    {this.state.redirect ? <Redirect to='/'/> : null}
                    <Card className="register" elevation={3}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Register
                            </Typography>
                            <Grid item xs={12}>
                                <FormControl>
                                    <InputLabel htmlFor='user-email'>Email address</InputLabel>
                                    <Input value={this.state.email} onChange={this.handleEmailChange} type='email' id='user-input' aria-describedby='user-helper-text'/>
                                    <FormHelperText id='user-helper-text'>Enter a valid email.</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl>
                                    <InputLabel htmlFor='user-password'>Password</InputLabel>
                                    <Input value={this.state.pw} onChange={this.handlePwChange} type='password' id='user-password' aria-describedby='pw-helper-text'/>
                                    <FormHelperText id='pw-helper-text'>Enter a password</FormHelperText>
                                </FormControl>
                            </Grid>
                            
                            <Grid item xs={12}>
                            <CardActions>
                                <Button className='button' variant='contained' color='primary'title='Submit' onClick={this.register}>Submit</Button>
                            </CardActions>
                    
                            </Grid>
                        </CardContent>
                    </Card>
                </>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        registered: state.registered
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addUser: (email: string, pw: string) => dispatch(registerUser(email, pw))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);