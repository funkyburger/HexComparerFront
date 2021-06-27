import React from 'react';
import 'content/default.css';
import StringUtil from 'utils/StringUtil'

export default class DataColumn extends React.Component {

    lines : Array<Array<number>> = [];

    // state = {
    // }

    /**
     * 
     */
    public setData(data : Array<number>) {
        this.lines = [];
        let currentLine : Array<number> = [];

        for(let i : number = 0; i < data.length; i++)
        {
            if(i % 16 == 0)
            {
                this.lines.push(currentLine);
                currentLine = [];
            }
            else 
            {
                currentLine.push( data[i]);
            }
        }

        this.setState({});
    }

    render() {
        return (
            <div className="data-column">
                <table>
                    <tbody>
                        {this.lines.map((line, i) => 
                            <tr>
                                {line.map((byte, j) => <td>
                                    { StringUtil.toByte(byte) }
                                </td>)}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}