import React from 'react';
import {connect} from 'react-redux'
import { Grid, Cell } from "styled-css-grid";

import Welcome from './welcome'

export default class App extends React.Component {
    render() {
        return (
            <Grid  columns={2} gap="2px">
                <Cell height={3} width={2} center middle><Welcome/></Cell>
                <Cell height={10} width={2} center middle>Map Component</Cell>
                <Cell height={10} width={1} center middle>Artist and the album</Cell>
                <Cell height={3} width={1} center middle>Stream tweets</Cell>

                <Cell width={2} center middle>Miscellaneous like google events and stuff</Cell>
            </Grid>
        );
    }
}

