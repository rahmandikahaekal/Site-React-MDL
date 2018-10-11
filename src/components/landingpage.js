import React, { Component } from 'react';
import {
    Cell,
    Grid
} from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100',height: '100',}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://www.w3schools.com/howto/img_avatar.png"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Front end Web Developer</h1>

                            <hr />

                            <p>HTML5/CSS3 | Bootstrap | Semantic UI | JavaScript | ReactJS | NodeJS | Express | MySQL | NeDB</p>   

                            <div className="social-links">

                                {/* Linkedin */}
                                <a href="http://www.linkedin.com/in/rahmandikahaekal" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>

                                {/* Github */}
                                <a href="https://github.com/rahmandikahaekal" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>

                                {/* Freecodecamp */}
                                <a href="https://www.freecodecamp.org/rahmandikahaekal" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true"></i>
                                </a>

                                {/* Youtube */}
                                <a href="https://www.youtube.com/channel/UC4v2mtCMN3M8PqV9Nny6L_Q" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true"></i>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;