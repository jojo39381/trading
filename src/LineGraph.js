import React from 'react'
import { Line, defaults } from 'react-chartjs-2'

defaults.global.tooltips.enabled = true;
defaults.global.legend.position = 'bottom';
defaults.global.legend.display = false;

const LineGraph = ({ data, graphTitle }) => {
  return (
    <div>
      {!!graphTitle && <h3 className='text-center'>{graphTitle}</h3>}
      <div>
        <Line
          data={data}
          height={400}
          width={400}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  scaleLabel: {
                    display: false
                  },
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
              xAxes: [
                {
                  scaleLabel: {
                    display: false
                  }
                }
              ]
            },
          }}
        />
      </div>
    </div>
  )
}
export default LineGraph
