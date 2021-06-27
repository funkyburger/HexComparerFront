import React from 'react';
import StringUtil from 'utils/StringUtil'

export default class AdressColumn extends React.Component {
    address : number = 0;

    setAddress(address : number) : void {
        this.address = address - address % 256;
    }

    getAddresses() : Array<number> {
        let result : Array<number> = [];

        for(let i = 0; i <= 256; i += 16){
            result.push(this.address + i);
        }

        return result;
    }

    render(){
        return <div className="adress-column">
            <table>
                <tbody>
                    {this.getAddresses().map((a, i) => 
                            <tr>
                                <td>
                                    { StringUtil.toHex(a) }
                                </td>
                            </tr>
                        )}
                        
                    

                    {/* { for(let i : number = this.address; i < 0; i++){
                            <div></div>
                    }} */}

                    {/* <tr><td>0x00</td></tr>
                    <tr><td>0x01</td></tr>
                    <tr><td>0x02</td></tr> */}
                </tbody>
            </table>
        </div>
    }
}