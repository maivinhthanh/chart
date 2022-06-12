import { FC } from "react";
import "./LineChart.css";
import { Props } from "./type";
import {greatestValue, lessestValue} from "../utils"

const Bar: FC<any> = ({ fill = "#000", x, y, height, width }) => (
  <rect fill={fill} x={x} y={y} height={height} width={width} />
);

const BarChart: FC<Props> = (props) => {
  const { svgHeight, data, color } = props;
  const barWidth = 20;
  const barMargin = 2;
  const width = data.length * (barWidth + barMargin);
  const height = greatestValue(data.map((datum) => datum));

  const makeAxis = () => {
    const { data } = props
    const minY = lessestValue(data)
    const maxY = greatestValue(data)
    return (
      <g className="linechart_axis">
        <line
          x1={0}
          y1={minY}
          x2={0}
          y2={maxY}
        />
        <line
          x1={0}
          y1={maxY}
          x2={width}
          y2={maxY}
        />
        
      </g>
    )
  }

  return (
    <svg viewBox={`0 0 ${width} ${svgHeight}`}>
      {data.map((datum, index) => (
        <Bar
          key={index}
          fill={color}
          x={index * (barWidth + barMargin)}
          y={height - datum}
          width={barWidth}
          height={datum}
        />
      ))}
      {makeAxis()}
    </svg>
  );
};

export default BarChart;
