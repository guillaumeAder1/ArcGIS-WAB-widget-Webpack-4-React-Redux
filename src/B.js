import React from 'react'

class B extends React.Component {

    render() {
        const l = this.props.list
        return (
            <div>
                <h2>B component</h2>
                {l.map((v, i) => <div key={i} onClick={e => this.props.callBack(v)}>{v.toString() + " item in the list  "}</div>)}
            </div>
        )
    }
}

export default B


