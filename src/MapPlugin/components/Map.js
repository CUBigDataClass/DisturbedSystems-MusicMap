import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import React from 'react';
import {connect} from 'react-redux'
import {Loader, Icon, Header} from "semantic-ui-react"


class Map extends React.Component {

    componentDidMount() {
        /* Chart code */
        // Themes begin
        //         am4core.useTheme(am4themes_animated);
        // Themes end

        // Create map instance
        let chart = am4core.create("chartdiv", am4maps.MapChart);

        // Set map definition
        chart.geodata = am4geodata_usaLow;

        // Set projection
        chart.projection = new am4maps.projections.AlbersUsa();

        // Create map polygon series
        let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

        //Set min/max fill color for each area
        polygonSeries.heatRules.push({
            property: "fill",
            target: polygonSeries.mapPolygons.template,
            min: am4core.color("#f8c8ac"),
            max: am4core.color("#e85a4f")
            // "min": 
  // "max": am4core.color("#AAAA00")
        });

        // Make map load polygon data (state shapes and names) from GeoJSON
        polygonSeries.useGeodata = true;

        // Set heatmap values for each state
        polygonSeries.data = this.props.data || [{}];
        // Set up heat legend
        let heatLegend = chart.createChild(am4maps.HeatLegend);
        heatLegend.series = polygonSeries;
        heatLegend.align = "right";
        heatLegend.valign = "bottom";
        heatLegend.width = am4core.percent(10);
        heatLegend.marginRight = am4core.percent(4);
        heatLegend.marginBottom = am4core.percent(4);
        heatLegend.minValue = 0;
        heatLegend.maxValue = 40000000;

        // Set up custom heat map legend labels using axis ranges
        let minRange = heatLegend.valueAxis.axisRanges.create();
        minRange.value = heatLegend.minValue;
        minRange.label.text = "Low";
        let maxRange = heatLegend.valueAxis.axisRanges.create();
        maxRange.value = heatLegend.maxValue;
        maxRange.label.text = "High";

        // Blank out internal heat legend value axis labels
        heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function (labelText) {
            return "";
        });
        //
        // Configure series tooltip
        let polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}: {value}";
        polygonTemplate.nonScalingStroke = true;
        polygonTemplate.strokeWidth = 0.5;

        // Create hover state and set alternative fill color
        let hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#d6cec9");

        this.chart = chart;
        this.chartData = polygonSeries;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    componentDidUpdate(oldProps) {
        // console.log("NEW PROPS SEARCH", this.props.data)

        this.chartData.data = this.props.data
    }

    render() {
        return (
            <div className={"mapContainer"}>
                <div>
                    <Header as='h3' textAlign='center'>
                        <Header.Content>Look! the Tweets are coming from ... </Header.Content>
                    </Header>
                </div>
                {
                    (this.props.data[0].loaded || this.props.data.length > 1) ? "" :
                        <Loader active size='medium'>Calculating the twitter data</Loader>


                }
                <div id="chartdiv"></div>
            </div>
        );
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
        data: state.mapReducer
    }
}

export default connect(
    mapStateToProps,
)(Map)

