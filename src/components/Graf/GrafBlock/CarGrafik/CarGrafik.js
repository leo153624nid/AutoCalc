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

// Цвета для графиков
const COLORS = {
    green: "#059669",
    grey: "#666666",
    blue: "#6366F1",
    linesExtr: "#080707",
    red: "#ff0000",
};

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

    // даты всех заправок в виде ДД.ММ
    const dateFuelings = car.fuelings
        .map( item => `${new Date(item.date).getDate()}.${new Date(item.date).getMonth()}` );

    // значения дат заправок по оси Х, пока только 12 последних
    const categories = [...dateFuelings];
    if (categories.length > 12) categories.length = 12; // НЕПРАВИЛЬНО, нужны последние 12 элементов массива

    // Массивы данных для построения графиков, наполняются взависимости от Id графика
    let maxDataArr = [];
    let averageDataArr = [];
    let minDataArr = [];
    
    // наполнение массивов в зависимости от Id графика
    switch (idGrafik) {
        case 1:
            maxDataArr.push( ...categories.map( () => maxCostFuel ) ); 
            averageDataArr.push( ...categories.map( () => averageCostFuel ) );
            minDataArr.push( ...categories.map( () => minCostFuel ) );
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

    // Graph data
    const consumptions = [
        {
        name: "Расходы на топливо",
        data: car.fuelings.map( item => item.cost ),
        },
        {
        name: "Средний пробег",
        data: [300, 400, 500, 400, 300, 400, 600, 500, 400, 450, 430, 380],
        },
        {
        name: "Средний расход",
        data: [8, 9, 8, 10, 11, 12, 10, 9, 8, 10, 11, 8],
        },
        {
        name: "Стоимость топлива",
        data: car.fuelings.map( item => item.price ),
        },
        {
        name: "Остальные расходы",
        data: car.etc.map( item => item.cost ),
        },
    ];

   

    return (
        <Chart style = {{ display: "flex", 
                        flex: 1, 
                        justifyContent: "center", 
                        alignItems: "center", 
                        height: heightGrafik
                     }}>
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
                  color={COLORS.grey}
                  tooltip={{ visible: true, }}
                  data={consumptions[idGrafik-1].data}
                />
              
            </ChartSeries>
        </Chart>
    );
}

export default CarGrafik;