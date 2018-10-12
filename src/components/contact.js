import React, { Component } from 'react';
import {
    Grid,
    Cell,
    List,
    ListItem,
    ListItemContent
} from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>

                        <h2>R Haekal</h2>
                        <img
                            src="http://www.kluneo.com/static/avatar.svg"
                            alt="Avatar Profile"
                            style={{height: '250px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            Reprehenderit dolor ex fugiat labore minim. 
                            Dolor sit ut in magna Lorem reprehenderit. 
                            Eu dolor nisi et veniam id reprehenderit minim. 
                            Pariatur pariatur officia cupidatat commodo incididunt mollit. 
                            Duis proident cillum duis eu quis adipisicing. 
                            Id qui irure tempor tempor cillum aliqua aliqua aliqua quis elit. 
                        </p>

                    </Cell>
                    <Cell col={6}>

                        <h2>Contact Me</h2>

                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true"></i> 
                                        (123) 456-7899
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                                        (123) 456-7899
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-telegram" aria-hidden="true"></i>
                                        @scoutDev
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        scoutdev@gmail.com
                                    </ListItemContent>
                                </ListItem>

                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;