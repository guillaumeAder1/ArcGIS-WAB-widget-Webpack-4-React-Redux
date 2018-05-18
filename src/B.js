import React from 'react'
import Draw from "esri/toolbars/draw";
import LayerList from "esri/dijit/LayerList"
import arcgisUtils from "esri/arcgis/utils"
import { connect } from "react-redux";
import { addArticle, asynAddArticle } from "./actions/index";
import { bindActionCreators } from 'redux'


class B extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isDrawing: false,
            currentArticle: null
        };
        this.layerListRef = React.createRef();
    }

    componentDidMount() {
        if (!this.myWidget) {
            arcgisUtils.createMap(this.props.map.itemId, "map").then(response => {
                this.myWidget = new LayerList({
                    map: response.map,
                    layers: arcgisUtils.getLayerList(response)
                }, this.layerListRef.current);
                this.myWidget.startup();
            });
            this.draw = new Draw(this.props.map, {
                tooltipOffset: 20,
                drawTime: 90
            });
        }
    }

    startDrawing(bool) {
        this.setState({ isDrawing: !this.state.isDrawing });
        bool ? this.draw.activate(Draw.POLYGON) : this.draw.deactivate();
    }
    redux() {
        const key = "#" + this.state.currentArticle + " item";
        const obj = {};
        obj[key] = 'ijsd iouhdasui dhas uidhas';
        this.props.addArticle(obj);
    }

    reduxAsync() {
        const key = "#" + this.state.currentArticle + " item";
        const obj = {};
        obj[key] = 'asdasd vsdfsd sdfgsdgdfhfghf fgf dghdfgdfgdfg';
        this.props.asynAddArticle(obj)
    }

    reduxAsyncMix() {
        const key = this.state.currentArticle
        this.props.asynAddArticleMixing({ key: 'redux mixin' })
    }

    action() {
        return (this.state.isDrawing) ? 'Stop' : 'Start';
    }

    updateState(value) {
        this.props.callBack(value);
        this.setState({ currentArticle: value });
    }

    render() {
        const l = this.props.list;
        return (
            <div>
                <h2>B component</h2>
                <button onClick={() => this.redux()}>dispacth</button>
                <button onClick={() => this.reduxAsync()}>dispacth async</button>
                <button onClick={() => this.reduxAsyncMix()}>dispacth async mixing</button>
                <button onClick={() => this.startDrawing(!this.state.isDrawing)}>{this.action()} drawing</button>
                {l.map((v, i) => <div key={i} onClick={e => this.updateState(v)}>{v.toString() + " item in the list  "}</div>)}
                <div ref={this.layerListRef} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ addArticle, asynAddArticle }, dispatch)

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//         addArticle,
//         asynAddArticle
//     }, dispatch)
// }


// export default B
export default connect(null, mapDispatchToProps)(B);


