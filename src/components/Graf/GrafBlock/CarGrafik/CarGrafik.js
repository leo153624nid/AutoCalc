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
    console.log ('rerender');
    const car = props.car;
    const idGrafik = props.idGrafik;

    // Проверка есть ли данные о заправках или о прочих расходах
    if ( car.fuelings.length === 0 && idGrafik !== 5 ) {
        return (
            <div style = {{ display: "flex", 
                        flex: 1, 
                        justifyContent: "center", 
                        alignItems: "center", 
                        }}>
                <span>Нет данных</span>
            </div>
        );
    } else if ( car.etc.length === 0 && idGrafik === 5) {
        return (
            <div style = {{ display: "flex", 
                        flex: 1, 
                        justifyContent: "center", 
                        alignItems: "center", 
                        }}>
                <span>Нет данных</span>
            </div>
        );
    }
    // Экстремальные значения РАСХОДОВ НА ТОПЛИВО для графика
    let maxCostFuel = 0;
    let averageCostFuel = 0;
    let minCostFuel = 0;

    function getCostFuelExtr (idGrafik) {
        if (idGrafik !==1) return
        
        maxCostFuel = getMaxOfArray( car.fuelings.map( item => item.cost ) );
        averageCostFuel = Math.floor( car.fuelings
            .map( item => item.cost )
            .reduce((acc, value) => acc + value) 
            / car.fuelings.length);
        minCostFuel = getMinOfArray( car.fuelings.map( item => item.cost ) );
    }
    getCostFuelExtr(idGrafik);

    // Экстремальные значения СРЕДНЕГО ПРОБЕГА для графика 
    // (НЕ ЗАБЫТЬ ПОТОМ УКОРОТИТЬ ВСЕ МАССИВЫ ДАННЫХ ДЛЯ ГРАФИКОВ ДО 12 и 6)
    let distanceArr = [];  
    let maxDistance = 0;
    let averageDistance = 0;
    let minDistance = 0;

    function getDistanceExtr (idGrafik) {
        if (idGrafik !==2 && idGrafik !==3) return
        
        distanceArr = car.fuelings.map( item => item.distance );
        distanceArr.unshift(distanceArr[0]);    
        let tempArr = distanceArr.map( (item, index, arr) => arr[index+1] - item );
        tempArr.pop();
        distanceArr = tempArr;
        
        maxDistance = getMaxOfArray(distanceArr);
        averageDistance = Math.floor(distanceArr
            .reduce( (acc, value) => acc + value ) 
            / (distanceArr.length - 1));
        minDistance = getMinOfArray(distanceArr);
    }
    getDistanceExtr (idGrafik);

    // Экстремальные значения СРЕДНЕГО РАСХОДА для графика
    let volumeArr = [];
    let maxVolumeFuel = 0;
    let averageVolumeFuel = 0;
    let minVolumeFuel = 0;

    function getVolumeFuelExtr (idGrafik) {
        if (idGrafik !==2 && idGrafik !==3) return

        volumeArr = car.fuelings
            .map( (item, index) => (Math.floor( 1000 * item.volume / distanceArr[index]) / 10 ));
        for (let i = 0; i < volumeArr.length; i++) {
            let badIndex = volumeArr.findIndex ( item => item === NaN || Infinity);
            if (badIndex !== -1) volumeArr.splice(badIndex, 1, 0)
        }
        
        maxVolumeFuel = getMaxOfArray( volumeArr );
        averageVolumeFuel = Math.floor( 10 * volumeArr
            .reduce((acc, value) => acc + value) 
            / car.fuelings.length) / 10;
        minVolumeFuel = getMinOfArray( volumeArr );
    }
    getVolumeFuelExtr (idGrafik);

    // Экстремальные значения СТОИМОСТИ ТОПЛИВА для графика
    let maxPriceFuel = 0;
    let averagePriceFuel = 0;
    let minPriceFuel = 0;

    function getPriceFuel (idGrafik) {
        if (idGrafik !==4) return

        maxPriceFuel = getMaxOfArray( car.fuelings.map( item => item.price ) );
        averagePriceFuel = Math.floor( 10 * car.fuelings
            .map( item => item.price )
            .reduce((acc, value) => acc + value) 
            / car.fuelings.length) / 10;
        minPriceFuel = getMinOfArray( car.fuelings.map( item => item.price ) );
    }
    getPriceFuel (idGrafik);

    // Экстремальные значения ОСТАЛЬНЫХ РАСХОДОВ для графика
    let maxCostEtc = 0;
    let averageCostEtc = 0;
    let minCostEtc = 0;

    function getCostEtcExtr (idGrafik) {
        if (idGrafik !==5) return

        maxCostEtc = getMaxOfArray( car.etc.map( item => item.cost ) );
        averageCostEtc = Math.floor( car.etc
            .map( item => item.cost )
            .reduce((acc, value) => acc + value) 
            / car.etc.length);
        minCostEtc = getMinOfArray( car.etc.map( item => item.cost ) );
    }
    getCostEtcExtr (idGrafik);

    // высота для графика, в родных стилях почему-то фиксированно 400px
    const heightGrafik = window.innerHeight * 0.59;

    // даты всех заправок в виде ДД.ММ
    let dateFuelings = [];
    if (car.fuelings.length !== 0) {
        dateFuelings = car.fuelings
        .map( item => `${new Date(item.date).getDate()}.${new Date(item.date).getMonth()}` );
    }

    // даты всех прочих расходов в виде ДД.ММ
    let dateEtc = [];
    if (car.etc.length !== 0) {
        dateEtc = car.etc
        .map( item => `${new Date(item.date).getDate()}.${new Date(item.date).getMonth()}` );
    }

    // значения дат заправок или прочих расходов по оси Х, пока только 12 последних
    let categories = [];
    if (idGrafik !==5) categories = [...dateFuelings];
    else categories = [...dateEtc];
    // НЕПРАВИЛЬНО, нужны последние 12 элементов массива

    // Обнуление, Массивы данных для построения графиков, наполняются взависимости от Id графика 
    let maxDataArr = [];
    let averageDataArr = [];
    let minDataArr = [];

    // наполнение массивов в зависимости от Id графика
    switch (idGrafik) {
        case 1:
            maxDataArr.push( ...categories.map( () => maxCostFuel ) ); 
            averageDataArr.push( ...categories.map( () => averageCostFuel ) );
            minDataArr.push( ...categories.map( () => minCostFuel ) );
            break
        case 2: 
            maxDataArr.push( ...categories.map( () => maxDistance ) ); 
            averageDataArr.push( ...categories.map( () => averageDistance ) );
            minDataArr.push( ...categories.map( () => minDistance ) );
            break
        case 3:
            maxDataArr.push( ...categories.map( () => maxVolumeFuel ) ); 
            averageDataArr.push( ...categories.map( () => averageVolumeFuel ) );
            minDataArr.push( ...categories.map( () => minVolumeFuel ) );
            break 
        case 4: 
            maxDataArr.push( ...categories.map( () => maxPriceFuel ) ); 
            averageDataArr.push( ...categories.map( () => averagePriceFuel ) );
            minDataArr.push( ...categories.map( () => minPriceFuel ) );
            break
        case 5:
            maxDataArr.push( ...categories.map( () => maxCostEtc ) ); 
            averageDataArr.push( ...categories.map( () => averageCostEtc ) );
            minDataArr.push( ...categories.map( () => minCostEtc ) );
            break 
    }

    // Graph data
    const linesExtr = [
        {
        name: "макс",
        data: maxDataArr,
        },
        {
        name: "среднее",
        data: averageDataArr,
        },
        {
        name: "мин",
        data: minDataArr,
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
        data: distanceArr,
        },
        {
        name: "Средний расход",
        data: volumeArr,
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
                  color={COLORS.linesExtr}
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