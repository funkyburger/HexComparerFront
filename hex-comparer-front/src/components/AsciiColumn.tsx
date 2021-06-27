import React from 'react';
import StringUtil from 'utils/StringUtil'

export default class AsciiColumn extends React.Component {
    lines : Array<Array<string>> = [];

    public setData(data : Array<number>) {
        this.lines = [];
        let currentLine : Array<string> = [];

        for(let i : number = 0; i < data.length; i++)
        {
            if(i % 16 == 0)
            {
                this.lines.push(currentLine);
                currentLine = [];
            }
            else 
            {
                currentLine.push(StringUtil.toAscii(data[i]));
            }
        }

        this.setState({});
    }

    render(){
        return <div className="ascii-column">
            <table>
                    <tbody>
                        {this.lines.map((line, i) => 
                            <tr>
                                {line.map((ascii, j) => <td>
                                    { ascii }
                                </td>)}
                            </tr>
                        )}
                    </tbody>
                </table>
        </div>
    }
}