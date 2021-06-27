import React, { RefObject } from 'react';
import 'content/default.css';
import AdressColumn from 'components/AdressColumn';
import DataColumn from 'components/DataColumn';
import AsciiColumn from 'components/AsciiColumn';

export default class HexContentView<P> extends React.Component {
    dragCounter : number = 0;
    dropRef = React.createRef<HTMLDivElement>();
    addressColumn : AdressColumn = new AdressColumn({});
    dataColumn : DataColumn = new DataColumn({});
    asciiColumn : AsciiColumn = new AsciiColumn({});

    state = {
        dragging: false
    }

    constructor(props: Readonly<P> | P){
        super(props);

        //console.log('constructor');
        this.handleDragIn = this.handleDragIn.bind(this);
        this.handleDragOut = this.handleDragOut.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
    }

    setData(data : Array<number>, adress : number) {
        this.dataColumn.setData(data);
        this.asciiColumn.setData(data);
    }

    handleDrag(e : any) : void {
        //console.log('handleDrag');
        e.preventDefault();
        e.stopPropagation();
    }  
    handleDragIn(e : any) : void {
        //console.log('handleDragIn');
        e.preventDefault();
        e.stopPropagation();
        this.dragCounter++;
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            this.setState({dragging: true});
        }
    }  
    handleDragOut(e : any) : void {
        //console.log('handleDragOut');
        e.preventDefault();
        e.stopPropagation();
        this.dragCounter--;
        if (this.dragCounter === 0) {
            this.setState({dragging: false});
        }
    }  
    handleDrop(e : any) : void {
        //console.log('handleDrop');
        e.preventDefault();
        e.stopPropagation();
        this.setState({dragging: false});
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            //this.props.handleDrop(e.dataTransfer.files);
            e.dataTransfer.clearData();
            this.dragCounter = 0;
        }
    }

    componentDidMount() {
        //console.log('componentDidMount');
        //let div = this.dropRef.current
        this.dropRef.current?.addEventListener('dragenter', this.handleDragIn)
        this.dropRef.current?.addEventListener('dragleave', this.handleDragOut)
        this.dropRef.current?.addEventListener('dragover', this.handleDrag)
        this.dropRef.current?.addEventListener('drop', this.handleDrop)
    }  
      
    componentWillUnmount() {
        //console.log('componentWillUnmount');
        //let div = this.dropRef.current
        this.dropRef.current?.removeEventListener('dragenter', this.handleDragIn)
        this.dropRef.current?.removeEventListener('dragleave', this.handleDragOut)
        this.dropRef.current?.removeEventListener('dragover', this.handleDrag)
        this.dropRef.current?.removeEventListener('drop', this.handleDrop)
    }

    render() {
        return (
            <div ref={this.dropRef} className="hex-content-view">
                { this.addressColumn.render() }
                { this.dataColumn.render() }
                { this.asciiColumn.render() }
                
                {this.state.dragging &&
          <div 
            style={{
              border: 'dashed grey 4px',
              backgroundColor: 'rgba(255,255,255,.8)',
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0, 
              right: 0,
              zIndex: 9999
            }}
          >
            <div 
              style={{
                position: 'absolute',
                top: '50%',
                right: 0,
                left: 0,
                textAlign: 'center',
                color: 'grey',
                fontSize: 36
              }}
            >
              <div>drop here :)</div>
            </div>
          </div>
        }
            </div>
        );
    }
}