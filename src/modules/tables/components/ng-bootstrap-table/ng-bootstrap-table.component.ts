import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    QueryList,
    ViewChildren,
} from '@angular/core';
import { SBSortableHeaderDirective } from '@modules/tables/directives';
import { CountryService } from '@modules/tables/services';
// import { Asset } from '@modules/audit-reports/models';
import { Observable } from 'rxjs';
@Component({
    selector: 'sb-ng-bootstrap-table',
    //changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './ng-bootstrap-table.component.html',
    styleUrls: ['ng-bootstrap-table.component.scss'],
})
export class NgBootstrapTableComponent implements OnInit {
    @Input() pageSize = 20;
    @Input() tableHeader: string[] = [];
    @Input() tableData: string[][] = [];

    // sortedColumn!: string;
    // sortedDirection!: string; 
    // countries$!: Observable<Asset[]>;
    // total$!: Observable<number>; 
    // @ViewChildren(SBSortableHeaderDirective) headers!: QueryList<SBSortableHeaderDirective>;

    constructor(
        public countryService: CountryService,
        private changeDetectorRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
        // this.countryService.pageSize = this.pageSize;
        // this.countries$ = this.countryService.countries$;
        // this.total$ = this.countryService.total$;
    }

    // onSort({ column, direction }: SortEvent) {
    //     this.sortedColumn = column;
    //     this.sortedDirection = direction;

    // }
    // onSort(i: number, sortingCol: string) {
    //     this.sortedColumn = sortingCol;
    //     if (this.sortedDirection == null) {
    //         this.sortedDirection = 'asc';
    //     } else if (this.sortedDirection == 'asc') {
    //         this.sortedDirection = 'desc';
    //     } else {
    //         this.sortedDirection = 'asc';
    //     }
    //     this.sortData(i);
    // }
    // sortData(i: number) {
    //     let retFirst = 1;
    //     let retLast = -1;
    //     if (this.sortedDirection === 'desc') {
    //         retFirst = -1;
    //         retLast = 1;
    //     }
    //     this.tableData = this.tableData.sort((a, b) => {
    //         let element = a[i];
    //         if (this.isNumber(element)) {
    //             if (element > b[i]) {
    //                 return retFirst;
    //             } else if (element < b[i]) {
    //                 return retLast;
    //             } else {
    //                 return 0;
    //             }
    //         } else {
    //             let result = element.localeCompare(b[i]);
    //             if (result == 1) {
    //                 return retFirst;
    //             } else if (result == -1) {
    //                 return retLast;
    //             } else {
    //                 return 0;
    //             }
    //         }
    //     })
    // }

    // isNumber(element: any): boolean {
    //     if (element.match(/^-{0,1}\d+$/)) {
    //         return true;
    //     } else if (element.match(/^\d+\.\d+$/)) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // downloadCSVData() {
    //     this.downloadFile("downloaded_data");
    // }

    // convertToCSV(objArray: string[][], headerList: string[]) {
    //     //let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    //     let array = objArray;
    //     let str = '';
    //     let row = 'S.No, ';
    //     for (let index in headerList) {
    //         row += headerList[index] + ', ';
    //     }
    //     row = row.slice(0, -1);
    //     str += row + '\r\n';
    //     for (let i = 0; i < array.length; i++) {
    //         let line = (i + 1) + '';
    //         for (let index in headerList) {
    //             //let head = headerList[index];
    //             line += ',' + array[i][index];
    //         }
    //         str += line + '\r\n';
    //     }
    //     return str;
    // }

    // downloadFile(filename = 'data') {
    //     let csvData = this.convertToCSV(this.tableData, this.tableHeader);
    //     console.log(csvData)
    //     let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    //     let dwldLink = document.createElement("a");
    //     let url = URL.createObjectURL(blob);
    //     let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    //     if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
    //         dwldLink.setAttribute("target", "_blank");
    //     }
    //     dwldLink.setAttribute("href", url);
    //     dwldLink.setAttribute("download", filename + ".csv");
    //     dwldLink.style.visibility = "hidden";
    //     document.body.appendChild(dwldLink);
    //     dwldLink.click();
    //     document.body.removeChild(dwldLink);
    // }
}
