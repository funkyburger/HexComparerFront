import React from 'react';
import 'content/default.css';
import HexContentView from 'components/HexContentView'
import DataGenerator from 'service/DataGenerator'

export default class HexComparer<P> extends React.Component {
    hexContentView : HexContentView<P> = new HexContentView({});
    compareContentView : HexContentView<P> = new HexContentView({});

    constructor(props: Readonly<P> | P){
        super(props);

        //console.log('constructor');
        this.hexContentView.setData(DataGenerator.Generate(), 0) ;
        this.compareContentView.setData(DataGenerator.Generate(), 0) ;
    }

    render() {
        return (
            <div className="hex-comparer">
                { this.hexContentView.render() }
                { this.compareContentView.render() }
            </div>
        );
    }
}