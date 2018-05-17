import React from 'react'
import Draw from "esri/toolbars/draw";
import LayerList from "esri/dijit/LayerList"
import arcgisUtils from "esri/arcgis/utils"
import { connect } from "react-redux";
import { addArticle } from "./actions/index";

class B extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isDrawing: false
        }
    }

    componentDidMount() {
        if (!this.myWidget) {
            arcgisUtils.createMap(this.props.map.itemId, "map").then(response => {
                this.myWidget = new LayerList({
                    map: response.map,
                    layers: arcgisUtils.getLayerList(response)
                }, "layerList");
                this.myWidget.startup();
            });
            this.draw = new Draw(this.props.map, {
                tooltipOffset: 20,
                drawTime: 90
            });
        }
    }

    startDrawing(bool) {
        this.setState({
            isDrawing: !this.state.isDrawing
        })
        bool ? this.draw.activate(Draw.POLYGON) : this.draw.deactivate()

    }
    redux() {
        this.props.addArticle({ 'toktok': '465465465' });
    }

    render() {
        const l = this.props.list


        return (
            <div>
                <h2>B component</h2>
                <button onClick={() => this.redux()}>dispacth</button>
                <button onClick={() => this.startDrawing(!this.state.isDrawing)}>start drawing</button>
                {l.map((v, i) => <div key={i} onClick={e => this.props.callBack(v)}>{v.toString() + " item in the list  "}</div>)}

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
};

// export default B
export default connect(null, mapDispatchToProps)(B);


