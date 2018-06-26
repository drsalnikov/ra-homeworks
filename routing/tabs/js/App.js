class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="tabs">
          <nav className="tabs__items">
            <NavLink className="tabs__item" activeClassName="tabs__item-active" exact to="/">Рефераты</NavLink>
            <NavLink className="tabs__item" activeClassName="tabs__item-active" exact to="/creator">Криэйтор</NavLink>
            <NavLink className="tabs__item" activeClassName="tabs__item-active" exact to="/fortune">Гадалка</NavLink>
          </nav>
          <div className="tabs__content">
            <Route path="/" exact component={Essay} />
            <Route path="/creator" component={Creator} />
            <Route path="/fortune" component={Fortune} />
          </div>
        </div>
      </Router>
    );
  }
}
