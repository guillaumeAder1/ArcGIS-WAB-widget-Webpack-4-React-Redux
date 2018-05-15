import React from 'react'
import B from './B'
import FeatureLayer from 'esri/layers/FeatureLayer';

class A extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: null
        }
        this.firePerimeterFL = new FeatureLayer("https://sampleserver6.arcgisonline.com/arcgis/rest/services/Wildfire/FeatureServer/2", {
            mode: FeatureLayer.MODE_ONDEMAND,
            outFields: ["*"],
            id: "firePerimeterFL"
        });
        this.props.map.addLayer(this.firePerimeterFL);
    }

    changevalue(e) {
        this.setState((state, props) => {
            return {
                selected: e
            }
        });
    }

    render() {
        const current = this.state.selected;
        return (
            <div>
                <h1>A component after</h1>
                {current}
                <B list={[1, 2, 3, 4, 5, 6]} map={this.props.map} callBack={e => this.changevalue(e)} />
            </div>
        )
    }
}

export default A
