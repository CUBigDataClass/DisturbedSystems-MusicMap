import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import React from 'react';
import {connect} from 'react-redux'
import {Loader, Icon, Header} from "semantic-ui-react"


class SentimentMap extends React.Component {

    componentDidMount() {
        // Create map instance
        let chart = am4core.create("chartdiv2", am4charts.PieChart);

        // Set data
        chart.data = {
            1: [{
                "sentiment": "positive",
                "value": 50
            }, {
                "sentiment": "negative",
                "value": 30
            }, {
                "sentiment": "neutral",
                "value": 20
            }],
            2: [{
                "sentiment": "positive",
                "value": 50
            }, {
                "sentiment": "negative",
                "value": 30
            }, {
                "sentiment": "neutral",
                "value": 20
            }], 3: [{
                "sentiment": "positive",
                "value": 50
            }, {
                "sentiment": "negative",
                "value": 30
            }, {
                "sentiment": "neutral",
                "value": 20
            }], 4: [{
                "sentiment": "positive",
                "value": 50
            }, {
                "sentiment": "negative",
                "value": 30
            }, {
                "sentiment": "neutral",
                "value": 20
            }], 5: [{
                "sentiment": "positive",
                "value": 50
            }, {
                "sentiment": "negative",
                "value": 30
            }, {
                "sentiment": "neutral",
                "value": 20
            }],
            6: [{
                "sentiment": "positive",
                "value": 50
            }, {
                "sentiment": "negative",
                "value": 30
            }, {
                "sentiment": "neutral",
                "value": 20
            }],
            7: [{
                "sentiment": "positive",
                "value": 50
            }, {
                "sentiment": "negative",
                "value": 30
            }, {
                "sentiment": "neutral",
                "value": 20
            }],
        };

        chart.data = [{}]
        // Create series
        let series = chart.series.push(new am4charts.PieSeries());
        series.dataFields.value = "value";
        series.dataFields.category = "sentiment";
        this.chart = chart
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    componentDidUpdate(oldProps) {

        // this.chartData.data = this.props.data
    }

    render() {
        return (
            <div className={"sentimentMapContainer"}>

                <div id="chartdiv2"></div>
            </div>
        );
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
        data: state.sentimentMapReducer
    }
}

export default connect(
    mapStateToProps,
)(SentimentMap)

