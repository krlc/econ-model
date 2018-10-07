import {Component} from "react"
import {render} from "react-dom"
import * as React from "react";

import {Model} from "./Components/model"

interface Props {}

interface State {
    area: number,
    floor: number[],
    type: number[],
    dist: number[],
    areaInput: string
}

interface Array<T> {
    fill(value: T): Array<T>;
}

class App extends Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            area: 40,
            floor: [1, 0],
            type: [1, 0, 0, 0, 0, 0, 0, 0, 0],
            dist: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            areaInput: "40"
        };

        this.setArea = this.setArea.bind(this);
        this.setAreaInput = this.setAreaInput.bind(this);
        this.setFloor = this.setFloor.bind(this);
        this.setType = this.setType.bind(this);
        this.setDist = this.setDist.bind(this);
    }

    private setArea(event) {
        this.setState({
            area: event.target.value,
            areaInput: event.target.value
        })
    }

    private setAreaInput(event) {
        if (event.target.value != "") {
            this.setState({
                area: event.target.value,
                areaInput: event.target.value
            })
        } else {
            this.setState({
                areaInput: event.target.value
            })
        }
    }

    private setFloor(event) {
        const floor = [0, 0];
        floor[event.target.value] = 1;

        this.setState({
            floor: floor
        })
    }

    private setType(event) {
        const type = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        type[event.target.value] = 1;

        this.setState({
            type: type
        })
    }

    private setDist(event) {
        const dist = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        dist[event.target.value] = 1;

        this.setState({
            dist: dist
        })
    }

    render() {
        return (
            <div className="model">
                <div className="section area">
                    <h2>Choose apartment area</h2>
                    <input type="range" value={this.state.area} min={10} max={200} step={5} className="slider" id="area" onChange={this.setArea} />
                    <input type="number" value={this.state.areaInput} min="5" max="10000" onChange={this.setAreaInput} /> m2
                </div>
                <div className="section floor">
                    <h2>Choose floor</h2>
                    <label htmlFor="floor1">First floor</label>
                    <input type="radio" id="floor1" value="0" checked={this.state.floor[0] === 1} onChange={this.setFloor} />
                    <label htmlFor="floor2">Last floor (roof)</label>
                    <input type="radio" id="floor2" value="1" checked={this.state.floor[1] === 1} onChange={this.setFloor} />
                </div>
                <div className="section type">
                    <h2>Choose apartment building type</h2>
                    <label htmlFor="type1">103. serija</label>
                    <input type="radio" id="type1" value="0" checked={this.state.type[0] === 1} onChange={this.setType} />
                    <label htmlFor="type2">104. serija</label>
                    <input type="radio" id="type2" value="1" checked={this.state.type[1] === 1} onChange={this.setType} />
                    <label htmlFor="type3">119. serija</label>
                    <input type="radio" id="type3" value="2" checked={this.state.type[2] === 1} onChange={this.setType} />
                    <label htmlFor="type4">467. serija</label>
                    <input type="radio" id="type4" value="3" checked={this.state.type[3] === 1} onChange={this.setType} />
                    <label htmlFor="type5">602. serija</label>
                    <input type="radio" id="type5" value="4" checked={this.state.type[4] === 1} onChange={this.setType} />
                    <label htmlFor="type6">Čeho projekts</label>
                    <input type="radio" id="type6" value="5" checked={this.state.type[5] === 1} onChange={this.setType} />
                    <label htmlFor="type7">Hruščovka</label>
                    <input type="radio" id="type7" value="6" checked={this.state.type[6] === 1} onChange={this.setType} />
                    <label htmlFor="type8">Lietuviešu projekts</label>
                    <input type="radio" id="type8" value="7" checked={this.state.type[7] === 1} onChange={this.setType} />
                    <label htmlFor="type9">M. ģim. sērija</label>
                    <input type="radio" id="type9" value="8" checked={this.state.type[8] === 1} onChange={this.setType} />
                </div>
                <div className="section district">
                    <h2>Choose apartment district</h2>
                    <label htmlFor="dist1">Cits rajons</label>
                    <input type="radio" id="type1" value="0" checked={this.state.dist[0] === 1} onChange={this.setDist} />
                    <label htmlFor="dist2">Zolitūde</label>
                    <input type="radio" id="type2" value="1" checked={this.state.dist[1] === 1} onChange={this.setDist} />
                    <label htmlFor="dist3">Vecmīlgrāvis</label>
                    <input type="radio" id="type3" value="2" checked={this.state.dist[2] === 1} onChange={this.setDist} />
                    <label htmlFor="dist4">Iļģuciems</label>
                    <input type="radio" id="type4" value="3" checked={this.state.dist[3] === 1} onChange={this.setDist} />
                    <label htmlFor="dist5">Teika</label>
                    <input type="radio" id="type5" value="4" checked={this.state.dist[4] === 1} onChange={this.setDist} />
                    <label htmlFor="dist6">Sarkandaugava</label>
                    <input type="radio" id="type6" value="5" checked={this.state.dist[5] === 1} onChange={this.setDist} />
                    <label htmlFor="dist7">Ķengarags</label>
                    <input type="radio" id="type7" value="6" checked={this.state.dist[6] === 1} onChange={this.setDist} />
                    <label htmlFor="dist8">Ziepniekkalns</label>
                    <input type="radio" id="type8" value="7" checked={this.state.dist[7] === 1} onChange={this.setDist} />
                    <label htmlFor="dist9">Pļavnieki</label>
                    <input type="radio" id="type9" value="8" checked={this.state.dist[8] === 1} onChange={this.setDist} />
                    <label htmlFor="dist10">Āgenskalns</label>
                    <input type="radio" id="type10" value="9" checked={this.state.dist[9] === 1} onChange={this.setDist} />
                    <label htmlFor="dist11">Imanta</label>
                    <input type="radio" id="type11" value="10" checked={this.state.dist[10] === 1} onChange={this.setDist} />
                    <label htmlFor="dist12">Purvciems</label>
                    <input type="radio" id="type12" value="11" checked={this.state.dist[11] === 1} onChange={this.setDist} />
                </div>
                <hr/>
                <div className="section result">
                    <h1><Model area={this.state.area} coefs={this.state.floor.concat(this.state.type.concat(this.state.dist))} /></h1>approx.
                </div>
            </div>
        );
    }
}

render(<div className="row"><App /></div>, document.getElementById("app"));
