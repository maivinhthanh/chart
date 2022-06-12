import { FC } from "react";
import "./LineChart.css";
import { Props } from "./type";

const LineChart: FC<Props> = (props) => {
  const getMinX = () => {
    return 0;
  };
  const getMinY = () => {
    const { data } = props;
    const only_y = data.map((obj) => obj);
    const min_y = Math.min.apply(null, only_y);
    return min_y;
  };
  const getMaxX = () => {
    const { data } = props;
    return data.length - 1;
  };
  const getMaxY = () => {
    const { data } = props;
    const only_y = data.map((obj) => obj);
    const max_y = Math.max.apply(null, only_y);
    return max_y;
  };
  const getSvgX = (x: number) => {
    const { svgWidth } = props;
    return (x / getMaxX()) * svgWidth;
  };
  const getSvgY = (y: number) => {
    const { svgHeight } = props;
    return svgHeight - (y / getMaxY()) * svgHeight;
  };

  const makePath = () => {
    const { data, color } = props;
    let pathD = ` M  ${getSvgX(0)} ${getSvgY(data[0])} `;

    pathD += data.map((point, i) => {
      return `L ${getSvgX(i)} ${getSvgY(point)}  `;
    });

    return (
      <path
        className="linechart_path"
        d={pathD}
        style={{ stroke: color as string }}
      />
    );
  };
  const makeAxis = () => {
    const minX = getMinX();
    const maxX = getMaxX();
    const minY = getMinY();
    const maxY = getMaxY();
    return (
      <g className="linechart_axis">
        <line
          x1={getSvgX(minX)}
          y1={getSvgY(minY)}
          x2={getSvgX(maxX)}
          y2={getSvgY(minY)}
        />
        <line
          x1={getSvgX(minX)}
          y1={getSvgY(minY)}
          x2={getSvgX(minX)}
          y2={getSvgY(maxY)}
        />
      </g>
    );
  };

  const { svgHeight, svgWidth } = props;

  return (
    <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
      {makePath()}
      {makeAxis()}
    </svg>
  );
};

export default LineChart;
