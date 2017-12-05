import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
// react component used to create charts
import ChartistGraph from 'react-chartist';
// function that returns a color based on an interval of numbers
import { scaleLinear } from "d3-scale";
// react components used to create a SVG / Vector map
import Card from 'components/Card/Card.jsx';
import StatsCard from 'components/Card/StatsCard.jsx';
import Tasks from 'components/Tasks/Tasks.jsx';

import {
    dataPie,
    dataSales,
    optionsSales,
    responsiveSales,
    dataBar,
    optionsBar,
    responsiveBar,
    table_data
} from 'variables/Variables.jsx';
class Dashboard extends Component{
    render(){
        return (
            <div className="main-content">
                <Grid fluid>
                    <Row>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-server text-warning"></i>}
                                statsText="Doanh thu"
                                statsValue="105,000"
                                statsIcon={<i className="fa fa-refresh"></i>}
                                statsIconText="Cập nhật ngay"
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-wallet text-success"></i>}
                                statsText="Hóa đơn"
                                statsValue="345"
                                statsIcon={<i className="fa fa-calendar-o"></i>}
                                statsIconText="Hôm nay"
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-graph1 text-danger"></i>}
                                statsText="Hàng bán"
                                statsValue="2993"
                                statsIcon={<i className="fa fa-clock-o"></i>}
                                statsIconText="Cập nhật ngay"
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="fa fa-twitter text-info"></i>}
                                statsText="Thống kê"
                                statsValue="+45"
                                statsIcon={<i className="fa fa-refresh"></i>}
                                statsIconText="Cập nhật ngay"
                            />
                        </Col>
                    </Row>
                    
                <Row>
                    <Col md={4}>
                        <Card
                            title="Thống kê hàng bán"
                            category="Số lượng nguyên liệu dùng trong ngày"
                            content={
                                <ChartistGraph data={dataPie} type="Pie"/>
                            }
                            legend={
                                <div>
                                    <i className="fa fa-circle text-info"></i> Gà
                                    <i className="fa fa-circle text-danger"></i> Thịt
                                    <i className="fa fa-circle text-warning"></i> Rau củ
                                </div>
                            }
                            stats={
                                <div>
                                    <i className="fa fa-clock-o"></i> 2 ngày gần đây
                                </div>
                            }
                        />
                    </Col>
                    <Col md={8}>
                        <Card
                            title="Thống kê doanh thu"
                            category="24 giờ qua"
                            content={
                                <ChartistGraph
                                    data={dataSales}
                                    type="Line"
                                    options={optionsSales}
                                    responsiveOptions={responsiveSales}/>
                                }
                                legend={
                                    <div>
                                        <i className="fa fa-circle text-info"></i> Nhà hàng 1
                                        <i className="fa fa-circle text-danger"></i> Nhà hàng 2
                                        <i className="fa fa-circle text-warning"></i> Nhà hàng 3
                                    </div>
                                }
                                stats={
                                    <div>
                                        <i className="fa fa-history"></i> Cập nhật 3 phút trước
                                    </div>
                                }
                            />
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col md={6}>
                            <Card
                                title="2014 Sales"
                                category="All products including Taxes"
                                content={
                                    <ChartistGraph
                                        data={dataBar}
                                        type="Bar"
                                        options={optionsBar}
                                        responsiveOptions={responsiveBar}
                                    />
                                }
                                legend={
                                    <div>
                                        <i className="fa fa-circle text-info"></i> Tesla Model S
                                        <i className="fa fa-circle text-danger"></i> BMW 5 Series
                                    </div>
                                }
                                stats={
                                    <div>
                                        <i className="fa fa-check"></i> Data information certified
                                    </div>
                                }
                            />
                        </Col>
                    </Row> */}
                </Grid>
            </div>
        );
    }
}

export default Dashboard;