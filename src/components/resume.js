import React, { Component } from 'react';
import {
    Grid,
    Cell
} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div className="resume-body">
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="http://www.kluneo.com/static/avatar.svg"
                                alt="Avatar Profile"
                                style={{height: '250px'}}
                                />
                        </div>
                            <h2 style={{textAlign: 'center'}}>R Haekal</h2>
                            <h4 style={{color: 'grey'}}>UI Engineer</h4>
                            <hr style={{borderTop: "3px solid #833fb2", width: "50%"}}/>
                            <p>Reprehenderit elit laboris deserunt pariatur qui occaecat reprehenderit mollit. Reprehenderit minim dolore consectetur in reprehenderit non officia. Ipsum est elit eiusmod id. Esse amet laboris esse fugiat tempor amet nulla ullamco id est. Ut ut deserunt esse occaecat consectetur elit ad. Quis non pariatur anim cillum eiusmod pariatur id in. Qui reprehenderit ullamco excepteur sint do eiusmod fugiat magna Lorem voluptate consequat.</p>
                            <hr style={{borderTop: "3px solid #833fb2", width: "50%"}}/>
                            <h5>Address</h5>
                            <p>Hacker st. Pekalongan</p>
                            <h5>Phone</h5>
                            <p>(62896)</p>
                            <h5>Email</h5>
                            <p>hacker@scoutdev.com</p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h1>Education</h1>
                        
                        <Education 
                            startYear={2012}
                            endYear={2015}
                            schoolName="My University"
                            schoolDescription="Cillum duis consectetur qui id ut ut anim pariatur. Cupidatat sit cillum est in in do fugiat quis id. Laborum dolor nulla minim ut minim."
                        />

                        <Education 
                            startYear={2016}
                            endYear={2019}
                            schoolName="My University"
                            schoolDescription="Cillum duis consectetur qui id ut ut anim pariatur. Cupidatat sit cillum est in in do fugiat quis id. Laborum dolor nulla minim ut minim."
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h1>Experience</h1>

                        <Experience 
                            startYear={2017}
                            endYear="now"
                            jobName="noName Starup"
                            jobDescription="Et velit ipsum qui fugiat in eu anim mollit officia ullamco. Pariatur eu ullamco occaecat consectetur adipisicing. Aliquip ea proident nostrud consequat."
                        />

                        <Experience 
                            startYear={2017}
                            endYear="now"
                            jobName="noName Starup"
                            jobDescription="Et velit ipsum qui fugiat in eu anim mollit officia ullamco. Pariatur eu ullamco occaecat consectetur adipisicing. Aliquip ea proident nostrud consequat."
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />
                        
                        <h2>Skills</h2>

                        <Skills 
                            skills="HTML/CSS"
                            progress={85}
                        />
                        
                        <Skills 
                            skills="Javascript"
                            progress={100}
                        />
                        
                        <Skills 
                            skills="NodeJS"
                            progress={70}
                        />

                        <Skills 
                            skills="ReactJS"
                            progress={75}
                        />

                        <Skills 
                            skills="Wordpress"
                            progress={70}
                        />
                    </Cell>                    
                </Grid>
            </div>
        );
    }
}

export default Resume;