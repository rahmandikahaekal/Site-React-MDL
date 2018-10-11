import React, { Component } from 'react';
import {
    Tabs,
    Tab
} from 'react-mdl';

class Project extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab : 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0 ){
            return (
                <div>
                    <h1>This is React Tab</h1>
                </div>
            )
        } else if(this.state.activeTab === 1) {
            return (
                <div>
                    <h1>This is Angular Tab</h1>
                </div>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <div>
                    <h1>This is Vue Tab</h1>
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

                <section className="project-grid">
                    {this.toggleCategories()}
                </section>
            </div>
        );
    }
}

export default Project;