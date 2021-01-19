import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
    Input,
} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
    selector: 'sb-charts-area',
    //changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './charts-area.component.html',
    styleUrls: ['charts-area.component.scss'],
})
export class ChartsAreaComponent implements OnInit, AfterViewInit {
    @ViewChild('myAreaChart') myAreaChart!: ElementRef<HTMLCanvasElement>;
    chart!: Chart;
    @Input() chartLabels:string[] = [];
    @Input() dataLabel:string = '';
    @Input() chartData:number[] = [];
    @Input() xUnit:any; // should be millisecond, second, hour, day, month, quater etc.
    constructor() {}
    ngOnInit() {}

    ngAfterViewInit() {
        this.chart = new Chart(this.myAreaChart.nativeElement, {
            type: 'line',
            data: {
                labels: this.chartLabels,
                // labels: [
                //     'April',
                //     'May',
                //     'June',
                //     'July',
                //     'Aug',
                //     'Sep',
                //     'Oct',
                //     'Nov',
                //     'Dec',
                //     'Jan',
                //     'Feb',
                //     'Mar',
                // ],
                datasets: [
                    {
                        label: this.dataLabel,
                        lineTension: 0.3,
                        backgroundColor: 'rgba(2,117,216,0.2)',
                        borderColor: 'rgba(2,117,216,1)',
                        pointRadius: 5,
                        pointBackgroundColor: 'rgba(2,117,216,1)',
                        pointBorderColor: 'rgba(255,255,255,0.8)',
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(2,117,216,1)',
                        pointHitRadius: 50,
                        pointBorderWidth: 2,
                        data: this.chartData ,
                        // data: [
                        //     10000,
                        //     30162,
                        //     26263,
                        //     18394,
                        //     18287,
                        //     28682,
                        //     31274,
                        //     33259,
                        //     25849,
                        //     24159,
                        //     32651,
                        //     31984,
                        // ],
                    },
                ],
            },
            options: {
                scales: {
                    xAxes: [
                        {
                            time: {
                                unit: this.xUnit,
                            },
                            gridLines: {
                                display: false,
                            },
                            ticks: {
                                maxTicksLimit: 7,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                min: 0,
                                //max: 40000,
                                maxTicksLimit: 5,
                            },
                            gridLines: {
                                color: 'rgba(0, 0, 0, .125)',
                            },
                        },
                    ],
                },
                legend: {
                    display: false,
                },
            },
        });
    }
}
