import React from 'react'
import { Menu,Dropdown , Row, Col } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import Book from '../Book'
import RentCarportForm from '../RentCarportForm'
import RentOrderList from '../RentOrderList'
import BookOrder from '../BookOrder'

class Navigator extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const menu = (
          <Menu>
            <Menu.Item>
              <Link to="/bookOrder">book order</Link>             
            </Menu.Item>
            <Menu.Item>
              <Link to="/rentOrder">rent order</Link>
            </Menu.Item>
          </Menu>
          )
        return (
          <HashRouter>
            <Row className="nav">
              <Col span={3}>
                <img src="/logo.png" height={48} alt="logo" className="logo" />
              </Col>
              <Col span={12}>
                <Menu defaultSelectedKeys={["book"]} mode="horizontal" className="nav-tab">
                  <Menu.Item key="book">
                    <Link to="/book">Book</Link>
                  </Menu.Item>
                  <Menu.Item key="rent">
                    <Link to="/rent">Rent</Link>
                  </Menu.Item>
                </Menu>
              </Col>
              <Col span={3} offset={6}>
                <Dropdown overlay={menu} trigger={["click"]}>
                  <Avatar size={42} src="/avatar.jpg" className="avatar" />
                </Dropdown>
              </Col>
            </Row>
            <Switch>
              <Route exact path="/book"><Book /></Route>
              <Route exact path="/rent"><RentCarportForm /></Route>
              <Route exact path="/rentOrder"><RentOrderList /></Route>
              <Route exact path="/bookOrder"><BookOrder /></Route>
            </Switch>
          </HashRouter>
        )
    }
}

export default Navigator