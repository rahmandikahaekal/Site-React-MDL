import React, { Component } from 'react';
import {
    Grid,
    Cell,
    Tabs,
    Tab,
    Card,
    CardTitle,
    CardText,
    CardActions,
    Button,
    CardMenu,
    IconButton
} from 'react-mdl';

class Project extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab : 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0 ){
            return (
                <div className="project-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{width: '350', margin: 'auto'}}>
                    <CardTitle style={{
                        color: '#fff', 
                        height: '200px',
                        background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center center no-repeat'}}
                    >React Project #1</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Project 2 */}
                <Card shadow={5} style={{width: '350', margin: 'auto'}}>
                    <CardTitle style={{
                        color: '#fff', 
                        height: '200px',
                        background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center center no-repeat'}}
                    >React Project #2</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Project 3 */}
                <Card shadow={5} style={{width: '350', margin: 'auto'}}>
                    <CardTitle style={{
                        color: '#fff', 
                        height: '200px',
                        background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center center no-repeat'}}
                    >React Project #1</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        } else if(this.state.activeTab === 1) {
            return (
                <div className="project-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{width: '350', margin: 'auto'}}>
                    <CardTitle style={{
                        color: '#fff', 
                        height: '200px',
                        background: 'url(https://cdn.thenewstack.io/media/2017/11/d1023795-angular-back.png) center center no-repeat'}}
                    >Angular Project #1</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Project 2 */}
                <Card shadow={5} style={{width: '350', margin: 'auto'}}>
                    <CardTitle style={{
                        color: '#fff', 
                        height: '200px',
                        background: 'url(https://cdn.thenewstack.io/media/2017/11/d1023795-angular-back.png) center center no-repeat'}}
                    >Angular Project #2</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Project 3 */}
                <Card shadow={5} style={{width: '350', margin: 'auto'}}>
                    <CardTitle style={{
                        color: '#fff', 
                        height: '200px',
                        background: 'url(https://cdn.thenewstack.io/media/2017/11/d1023795-angular-back.png) center center no-repeat'}}
                    >Angular Project #1</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <div className="project-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{width: '350', margin: 'auto'}}>
                    <CardTitle style={{
                        color: '#fff', 
                        height: '200px',
                        background: 'url(https://cdn-images-1.medium.com/max/1200/1*qHsE-PM5TLmqzmYjmlr6-A.png) center center no-repeat'}}
                    >Vue Project #1</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Project 2 */}
                <Card shadow={5} style={{width: '350', margin: 'auto'}}>
                    <CardTitle style={{
                        color: '#fff', 
                        height: '200px',
                        background: 'url(https://i.pinimg.com/originals/9d/fb/da/9dfbdaa5df3a6a9bc61fe84d058918bb.png) center center no-repeat'}}
                    >Vue Project #2</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Project 3 */}
                <Card shadow={5} style={{width: '350', margin: 'auto'}}>
                    <CardTitle style={{
                        color: '#fff', 
                        height: '200px',
                        background: 'url(https://cdn-images-1.medium.com/max/1200/1*qHsE-PM5TLmqzmYjmlr6-A.png) center center no-repeat'}}
                    >Vue Project #1</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs 
                    activeTab={this.state.activeTab} 
                    onChange={(tabId) => this.setState({ activeTab: tabId })} 
                    ripple
                >
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>Vue</Tab>
                </Tabs>

                <Grid >
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Project;