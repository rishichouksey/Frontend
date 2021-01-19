import { AlertService } from './../../../app-common/services/alert.service';
import { AppManagementService } from './../../services/app-management.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from '@modules/auth/services';
import * as FileSaver from 'file-saver';

@Component({
    selector: 'sb-top-nav-user',
    //changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav-user.component.html',
    styleUrls: ['top-nav-user.component.scss'],
})
export class TopNavUserComponent implements OnInit {
    fileName: string = "DigiFAMApp.apk"
    constructor(public userService: UserService,
        private alertService: AlertService,
        private appManagementService: AppManagementService) { }
    ngOnInit() { }

    // downloadAPKFile() {
    //     this.appManagementService.downloadAPKFile$().subscribe(response => {
    //         this.downLoadFile(response, this.fileName);
    //     }, error => {
    //         this.alertService.error(JSON.stringify(error));
    //     });
    // }

    // downLoadFile(data: any, fileName: string) {
    //     // let fileName = 'Report';
    //     // if (this.reportType == 'LotMonthly') {
    //     //   fileName = 'MonthlyBatchReport';
    //     // } else if (this.reportType == 'Shutdown') {
    //     //   fileName = 'DowntimeReport';
    //     // }
    //     var blob = new Blob([data], {
    //         //type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    //         type: 'application/octet-stream'
    //     });
    //     FileSaver.saveAs(data, fileName);
    // }
}
