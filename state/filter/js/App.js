'use strict'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: props.filters[0],
      projectsFiltered: props.projects
    };
  }

  render() {
    return (
      <div>
        <Toolbar
          filters={this.props.filters}
          selected={this.state.selectedFilter}
          onSelectFilter={this.handleSetFilter} />
        <Portfolio projects={this.state.projectsFiltered} />
      </div>
    );
  }

  handleSetFilter = (filter) => {
    let projects = this.props.projects;

    this.setState({
      selectedFilter: filter,
      projectsFiltered: projects.filter(project => filter === 'All' || project.category === filter )
    });

  };

}