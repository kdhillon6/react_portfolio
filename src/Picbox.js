import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import lightbulb from './assets/lightbulb.png';

class Picbox extends Component {
  render() {
    return (
        <div class="pbox">
            <table border="0" width="100%">
                <tr>
                    <td><img src={"lightbulb.jpg"} width="300" height="180"/></td>
                    <td>
                        <ul>
                            <li>Description of project</li>
                            <li>In point form</li>
                            <li>Or a small summary</li>
                            <li>In paragraph form?</li>
                        </ul>
                    </td>
                </tr>
            </table>
        </div>
    );
  }
}


export default Picbox;
