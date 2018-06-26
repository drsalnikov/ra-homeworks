'use strict';
const 
class App extends React.Component {
  componentWillMount() {
    this.setState({
      data: [],
      series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
      labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
      colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
    })
  }

  componentDidMount() {
    this.populateArray();
    setInterval(this.populateArray.bind(this), 2000);
  }

  populateArray() {
    const series = 5;
    const serieLength = 5;
    const getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min)) + min);
    let data = new Array(series).fill(new Array(serieLength).fill(0));
    data = data.map(serie => serie.map(item => getRandomInt(0, 20)));

    this.setState({ data });
  }

  render() {
    const { data, colors, labels, series } = this.state;
    return (
      <section>
        {}
        <Charts 
          className='Charts' 
          data={data} 
        >
          {({ data, max, style }) => data.map((values, serieIndex) =>
            <Chart 
              className='Charts--serie' 
              key={serieIndex}
              values={values}
              max={max}
              style={style}
              label={labels[serieIndex]}
            >
              {({ values, max, sum, sortedSerie }) => values.map((item,itemIndex) =>
                <ChartItem 
                  className='Charts--item'
                  key={itemIndex}
                  values={values}
                  item={item}
                  max={max}
                  color={colors[itemIndex]}
                >
                  {item}
                </ChartItem>
              )}
            </Chart>
          )}
        </Charts>

        <Legends labels={labels} colors={colors} />
  
      </section>
    );
  }
}
