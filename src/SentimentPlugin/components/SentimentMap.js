import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import React from 'react';
import {connect} from 'react-redux'
import {Loader, Icon, Header} from "semantic-ui-react"
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


class SentimentMap extends React.Component {

    componentDidMount() {
        // Create map instance
        am4core.useTheme(am4themes_animated);

        let chart = am4core.create("chartdiv2", am4charts.PieChart);

        // Set data
        chart.data = [{
            sentiment : "Search",
            value : 100
        }];

        // Create series
        let series = chart.series.push(new am4charts.PieSeries());
        series.labels.template.disabled = true;

        series.dataFields.value = "value";
        series.dataFields.category = "sentiment";

        // Let's cut a hole in our Pie chart the size of 40% the radius
        chart.innerRadius = am4core.percent(40);


        // Add a legend
        chart.legend = new am4charts.Legend();
        chart.legend.position = "right";
        this.chart = chart
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    componentDidUpdate(oldProps) {
        let sentimentObj = this.props.data
        let self = this;
        let count =0
        setInterval(function () {
            let index = count%7 +1 // 1---7
            self.chart.data = sentimentObj[index]
            count++;
        }, 5000)
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

