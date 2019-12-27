import React, { Component, createRef } from "react";
import {
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sticky,
  Responsive,
  Dropdown
} from "semantic-ui-react";
import About from "./About";
import "./App.css";
import History from "./History";
import Interests from "./Interests";
import pic from "./pic.png";
import Work from "./Work";
import Footer from "./Footer";

class App extends Component {
  contextRef = createRef();
  state = {
    activeItem: "About Me"
  };

  handleItemClick = (event, { name }) => {
    this.setState({ activeItem: name });
  };

  handleDropdownClick = event => {
    this.setState({ activeItem: event.target.innerText });
  };
  render() {
    var item;
    if (this.state.activeItem === "About Me") {
      item = <About />;
    } else if (this.state.activeItem === "History") {
      item = <History />;
    } else if (this.state.activeItem === "Education and Work") {
      item = <Work />;
    } else if (this.state.activeItem === "Hobbies") {
      item = <Interests />;
    }
    return (
      <div className="App" ref={this.contextRef}>
        <Sticky context={this.contextRef}>
          <Responsive minWidth={768}>
            <Menu secondary attached="top" style={{ backgroundColor: "gray" }}>
              <Menu.Item name="home" onClick={this.handleItemClick} header>
                <Image src={pic} circular />
                <pre>
                  <Header as="h1"> Shivali Baghel</Header>
                </pre>
              </Menu.Item>
              <Menu.Menu position="right">
                <Menu.Item name="About Me" onClick={this.handleItemClick}>
                  About Me
                </Menu.Item>
                <Menu.Item name="History" onClick={this.handleItemClick}>
                  History
                </Menu.Item>
                <Menu.Item
                  name="Education and Work"
                  onClick={this.handleItemClick}
                >
                  Education and Work
                </Menu.Item>
                <Menu.Item name="Hobbies" onClick={this.handleItemClick}>
                  Hobbies
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Responsive>
          <Responsive maxWidth={768}>
            <Menu secondary attached="top" style={{ backgroundColor: "gray" }}>
              <Menu.Item name="home" onClick={this.handleItemClick} header>
                <Image src={pic} circular />
                <pre>
                  <Header as="h1"> Shivali Baghel</Header>
                </pre>
              </Menu.Item>
              <Menu.Menu position="right">
                <Menu.Item name="about">
                  <Dropdown icon="bars">
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={this.handleDropdownClick}>
                        About Me
                      </Dropdown.Item>
                      <Dropdown.Item onClick={this.handleDropdownClick}>
                        History
                      </Dropdown.Item>
                      <Dropdown.Item onClick={this.handleDropdownClick}>
                        Education and Work
                      </Dropdown.Item>
                      <Dropdown.Item onClick={this.handleDropdownClick}>
                        Hobbies
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Responsive>
        </Sticky>

        <Segment className="grid" placeholder attached="bottom">
          <Grid columns={2} stackable textAlign="center">
            <Grid.Row verticalAlign="middle" color="black">
              <Grid.Column>{item}</Grid.Column>
              <Grid.Column className="quote" textAlign="center">
                <Icon.Group>
                  <Icon name="quote left" corner="top left" />
                </Icon.Group>{" "}
                <span className="quotes">
                  Live each day like there's no tomorrow.... People will speak
                  anyways
                </span>{" "}
                <Icon.Group>
                  <Icon name="quote right" corner="top right" />
                </Icon.Group>
                <br />
                <br />
                <Icon.Group>
                  <Icon name="quote left" corner="top left" />
                </Icon.Group>{" "}
                <span className="quotes">
                  I have no Regrets - There is no point in regretting over your
                  past when learning from it is an available option.
                </span>{" "}
                <Icon.Group>
                  <Icon name="quote right" corner="top right" />
                </Icon.Group>
                <h4>
                  <i className="quotes"> ~ Shivali Baghel</i>
                </h4>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
