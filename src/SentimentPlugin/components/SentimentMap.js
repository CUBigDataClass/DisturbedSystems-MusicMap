import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import React from 'react';
import {connect} from 'react-redux'
import {Loader, Icon, Header} from "semantic-ui-react"
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

class SentimentMap extends React.Component {
    constructor(props) {
        super(props);
        this.charts = []
        this.chartIds = ["chartdiv1", "chartdiv2", "chartdiv3", "chartdiv4", "chartdiv5", "chartdiv6", "chartdiv7"]
        this.chartDivs = []
        this.timer = null
    }

    template(idName, titleName) {
        // Create map instance
        am4core.useTheme(am4themes_animated);

        let chart = am4core.create(idName, am4charts.PieChart);

        // Set data
        chart.data = [{
            sentiment: "Stone Cold",
            value: 100
        }];

        // Create series
        let series = chart.series.push(new am4charts.PieSeries());
        series.labels.template.disabled = true;

        series.dataFields.value = "value";
        series.dataFields.category = "sentiment";

        series.slices.template.stroke = am4core.color("#ffffff");
        series.slices.template.strokeWidth = 4;
        series.slices.template.strokeOpacity = 1;

        series.colors.list = [am4core.color("#e85a4f"), am4core.color("#f8c8ac"), am4core.color("#DCD5D4")]
        // series.colors.baseColor = am4core.color("#f8c8ac");
        // series.colors.maxLightness = 0.9;
        // series.colors.step = 1;
        

        // series.slices.template.max = am4core.color("#e85a4f");
        // series.slices.template.min = am4core.color("#e85a4f");


        // Let's cut a hole in our Pie chart the size of 40% the radius
        chart.innerRadius = am4core.percent(30);


        // Add a legend
        chart.legend = new am4charts.Legend();
        chart.legend.position = "right";
        let title = chart.titles.create();
        title.text = titleName;
        title.fontSize = 25;
        return chart;
    }

    componentDidMount() {
        let i = 1
        for (let id of this.chartIds) {
            this.charts.push(this.template(id, "Day  " + i))
            i++
        }
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    componentDidUpdate(oldProps) {
        let sentimentObj = this.props.data;
        this.chartDivs = this.chartIds.map((id) => document.getElementById(id))

        let self = this;
        for (let div of self.chartDivs) {
            div.style.display = "none"
        }

        if(!sentimentObj[7]){
            return false

        }
        let index = 1

        for (let chart of this.charts) {
            console.log("pusing the data into the chart ",sentimentObj[index], index)

            chart.data = sentimentObj[index]
            index++
        }


        this.chartDivs[0].style.display = ""
        let count = 1

        clearInterval(this.timer)

        this.timer = setInterval(function () {
            let index = count % 7// 0---6
            // console.log("indexxxxxxxxxxxxxxx",index,self.chartDivs[index])
            for (let div of self.chartDivs) {
                div.style.display = "none"
            }

            self.chartDivs[index].style.display = ""
            console.log("indexxxxxxxxxxxxxxx",index,self.chartDivs[index])

            count++;
        }, 2000)
    }

    render() {
        let data = this.props.data
        let isLoaded = data[0] ? data[0].loaded : false

        if (isLoaded) {

            return (<div className={"sentimentMapContainer"}>
                <div>
                    <Header as='h10' icon textAlign='center'>
                        <Icon name='smile' size="massive" color='blue'/>
                        <Header.Content>Sentiment Chart</Header.Content>
                    </Header>
                </div>
                <div className={"sentimentLoading"}>
                    <Header as='h3' textAlign='center' icon='search' content='Seach to see the Sentiment Data!!'/>
                </div>
                <div className={"hide"} id="chartdiv1"></div>
                <div className={"hide"} id="chartdiv2"></div>
                <div className={"hide"} id="chartdiv3"></div>
                <div className={"hide"} id="chartdiv4"></div>
                <div className={"hide"} id="chartdiv5"></div>
                <div className={"hide"} id="chartdiv6"></div>
                <div className={"hide"} id="chartdiv7"></div>
            </div>)
        }
        return (
            <div className={"sentimentMapContainer"}>
                {
                    (this.props.data[1] || this.props.data[0].loaded) ? "" :
                        <Loader active size='medium'>Fetching the Sentiment Data</Loader>

                }
                <div id="chartdiv1"></div>
                <div id="chartdiv2"></div>
                <div id="chartdiv3"></div>
                <div id="chartdiv4"></div>
                <div id="chartdiv5"></div>
                <div id="chartdiv6"></div>
                <div id="chartdiv7"></div>
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
