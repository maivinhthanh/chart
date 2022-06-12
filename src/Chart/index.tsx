import React, {FC} from "react";
import {PropsChart} from './type'

import { hoc } from "../HOC/hoc";
import LineChart  from './LineChart'
import BarChart  from './BarChart'

const LineChartHOC = hoc(LineChart);
const BarChartHOC = hoc(BarChart);

const Chart: FC<PropsChart> = (props) => {
  let data = {...props.data}

  if(!Array.isArray(props.data)){
    data = props.data.split(',').map(e => +e)
  }
  return (
    props.mode === 'line' ? (
      <LineChartHOC data={data as Array<number>} color={props.color}  />
    ): (
      <BarChartHOC data={data as Array<number>} color={props.color}  />
    )
  )
}
export default Chart