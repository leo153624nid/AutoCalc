import React from "react";
import s from './CarGrafik.module.css';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTitle,
    ChartLegend,
  } from "@progress/kendo-react-charts";
import "hammerjs";

const COLORS = {
    green: "#059669",
    grey: "#666666",
    blue: "#6366F1",
    linesExtr: "#080707",
    red: "#ff0000",
};

const categories = ["Январь", 
                    "Февраль", 
                    "Март", 
                    "Апрель", 
                    "Май", 
                    "Июнь", 
                    "Июль", 
                    "Август", 
                    "Сентябрь", 
                    "Октябрь", 
                    "Ноябрь", 
                    "Декабрь" ];

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
  }

function CarGrafik (props) {
    const car = props.car;
    const idGrafik = props.idGrafik;

    // Экстремальные значения расходов на топливо для графика
    const maxCostFuel = getMaxOfArray( car.fuelings.map( item => item.cost ) );
    const averageCostFuel = Math.floor( car.fuelings
        .map( item => item.cost )
        .reduce((acc, value) => acc + value) 
        / car.fuelings.length);
    const minCostFuel = getMinOfArray( car.fuelings.map( item => item.cost ) );

    // высота для графика, в родных стилях почему-то фиксированно 400px
    const heightGrafik = window.innerHeight * 0.59;

    // Массивы данных для построения графиков, наполняются взависимости от Id графика
    let maxDataArr = [];
    let averageDataArr = [];
    let minDataArr = [];
    
    // наполнение массивов в зависимости от Id графика
    switch (idGrafik) {
        case 1: 
        averageDataArr.push(averageCostFuel, 
                            null, 
                            null, 
                            null, 
                            null, 
                            null, 
                            null, 
                            null, 
                            null, 
                            null, 
                            null, 
                            averageCostFuel);
        maxDataArr.push(maxCostFuel, 
                            null, 
                            null, 
                            null, 
                            null, 
                            null, 
                            null, 
                            null, 
                            null, 
                            null, 
                            null, 
                            maxCostFuel);
        minDataArr.push(minCostFuel, 
                            null, 
                            null, 
                            null, 
                            null, 
                            null, 
                            null, 
                            null, 
                            null, 
                            null, 
                            null, 
                            minCostFuel);
        case 2: break
        case 3: break
        case 4: break
        case 5: break
    }

    // Graph data
    const linesExtr = [
        {
        name: "макс",
        data: maxDataArr,
        color: COLORS.linesExtr,
        },
        {
        name: "среднее",
        data: averageDataArr,
        color: COLORS.linesExtr,
        },
        {
        name: "мин",
        data: minDataArr,
        color: COLORS.linesExtr,
        },
    ];

    const consumptions = [
        {
        name: "Расходы на топливо",
        data: [2900, 2800, 2850, 2900, 1000, 2700, 2800, 2800, 2900, 1500, 2000, 3000],
        dataExtra: [],
        color: COLORS.grey,
        },
        {
        name: "Средний пробег",
        data: [300, 400, 500, 400, 300, 400, 600, 500, 400, 450, 430, 380],
        color: COLORS.grey,
        },
        {
        name: "Средний расход",
        data: [8, 9, 8, 10, 11, 12, 10, 9, 8, 10, 11, 8],
        color: COLORS.grey,
        },
        {
        name: "Стоимость топлива",
        data: [8, 9, 8, 10, 11, 12, 10, 9, 8, 10, 11, 8],
        color: COLORS.grey,
        },
        {
        name: "Остальные расходы",
        data: [8, 9, 8, 10, 11, 12, 10, 9, 8, 10, 11, 8],
        color: COLORS.grey,
        },
    ];



   

    return (
        <Chart style = {{ display: "flex", 
                        flex: 1, 
                        justifyContent: "center", 
                        alignItems: "center", 
                        height: heightGrafik
                     }}>
            
            <ChartLegend position="top" orientation="horizontal" />
            <ChartCategoryAxis>
                <ChartCategoryAxisItem categories={categories} startAngle={45} />
            </ChartCategoryAxis>
            <ChartSeries>
              {/* Линии экстреамльных значений */}      
              {linesExtr.map((item, idx) => (
                <ChartSeriesItem
                  key={idx}
                  type="line"
                  color={item.color}
                  tooltip={{ visible: true, }}
                  data={item.data}
                //   name={item.name}
                />
              ))}
              
                <ChartSeriesItem
                  key={idGrafik}
                  type="column"
                  color={consumptions[idGrafik-1].color}
                  tooltip={{ visible: true, }}
                  data={consumptions[idGrafik-1].data}
                />
              
            </ChartSeries>
        </Chart>
    );
}

export default CarGrafik;

        // <Chart>
        //     <ChartLegend visible={true} />
        //     <ChartCategoryAxis>
        //         <ChartCategoryAxisItem categories={categories}>
        //             <ChartCategoryAxisTitle text="Months" />
        //         </ChartCategoryAxisItem>
        //     </ChartCategoryAxis>
        //     <ChartSeries>
        //         {series.map((item, idx) => (
        //             <ChartSeriesItem
        //                 key={idx}
        //                 type="bar"
        //                 gap={2}
        //                 spacing={0.25}
        //                 labels={seriesLabels}
        //                 data={item.data}
        //                 name={item.status}
        //                 color={item.color}
        //             />
        //         ))}
        //     </ChartSeries>
        // </Chart>

        // style={{ height: heghtGrafik, width: widthGrafik }}