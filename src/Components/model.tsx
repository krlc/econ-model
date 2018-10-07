import {Component} from "react"
import * as React from "react";

interface Props {
    area: number
    coefs: number[]
}

interface State {}

export class Model extends Component<Props, State> {
    private calculate(): number {
        return 838.29 * this.props.area
            -4049.97 * this.props.coefs[0] // firstFloor
            -1383.42*this.props.coefs[1] // lastFloor
            +17352.73*this.props.coefs[2] // 103
            +20185.97*this.props.coefs[3] // 104
            +21201.17*this.props.coefs[4] // 119
            +20932.01*this.props.coefs[5] // 467
            +20226.93*this.props.coefs[6] // 602
            +21104.57*this.props.coefs[7] // cehupr
            +17950.07*this.props.coefs[8] // hrusc
            +17162.96*this.props.coefs[9] // LTproj
            +13358.34*this.props.coefs[10] // Mgim
            -15736.13*this.props.coefs[11] // undef_raj
            -10112.92*this.props.coefs[12] // zolit
            -19403.52*this.props.coefs[13] // vecmil
            -13271.40*this.props.coefs[14] // ilguc
            -5338.10*this.props.coefs[15] // teika
            -18443.86*this.props.coefs[16] // sarkandaug
            -14552.36*this.props.coefs[17] // kengar
            -12582.30*this.props.coefs[18] // ziepn
            -12625.71*this.props.coefs[19] // plavn
            -7765.44*this.props.coefs[20] // agen
            -11058.07*this.props.coefs[21] // imant
            -10013.37*this.props.coefs[22]; // purv
    }

    public render() {
        return <div>€ {Math.floor(this.calculate()).toLocaleString('en', {useGrouping:true})}</div>
    }
}