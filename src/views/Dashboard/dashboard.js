import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import {
    Button,
    ButtonGroup,
    ButtonToolbar,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Col,
    Progress,
    Row,


  } from 'reactstrap';

  import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
//Random Numbers
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandDanger = getStyle('--danger')
const month = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const year = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const day = [];
const mainChart = {
    labels: year,
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: hexToRgba(brandInfo, 10),
        borderColor: brandInfo,
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data:data1,
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'transparent',
        borderColor: brandSuccess,
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: [],
      },
      {
        label: 'My Third dataset',
        backgroundColor: 'transparent',
        borderColor: brandDanger,
        pointHoverBackgroundColor: '#fff',
        borderWidth: 1,
        borderDash: [8, 5],
        data: [],
      },
    ],
  };

  const mainChartOpts = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function(tooltipItem, chart) {
          return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
        }
      }
    },
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
          },
        }],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 5,
            stepSize: Math.ceil(250 / 5),
            max: 250,
          },
        }],
    },
    elements: {
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      },
    },
  };
class Dashboard extends Component {
    mainChart = mainChart;
    constructor(props){
        super(props);
        this.mainChart.datasets[0].label = 'Ventes';
    }
    state = { 
        radioSelected: 2,
     }
     onRadioBtnClick(radioSelected) {
        this.setState({
          radioSelected: radioSelected,
        });
      }
    render() { 
        return ( 
            <React.Fragment>
                <div className="animated fadeIn">
                    <Row>
                        <Col>
                            <Card>
                            <CardBody>
                                <Row>
                                <Col sm="5">
                                    <CardTitle className="mb-0">Articles vendu</CardTitle>
                                    <div className="small text-muted">{new Date().getMonth()}</div>
                                </Col>
                                <Col sm="7" className="d-none d-sm-inline-block">
                                    <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
                                    <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                                    <ButtonGroup className="mr-3" aria-label="First group">
                                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>
                                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Month</Button>
                                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Year</Button>
                                    </ButtonGroup>
                                    </ButtonToolbar>
                                </Col>
                                </Row>
                                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                                <Line data={mainChart} options={mainChartOpts} height={300} />
                                </div>
                            </CardBody>
                            <CardFooter>
                                <Row className="text-center">
                                <Col sm={12} md className="mb-sm-2 mb-0">
                                    <div className="text-muted">Ventes</div>
                                    <strong>29.703 Articles</strong>
                                    <Progress className="progress-xs mt-2" color="info" value="40" />
                                </Col>
                                
                                </Row>
                            </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Dashboard;