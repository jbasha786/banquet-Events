export interface baseModel {
    id: number;
}
export interface invoiceHistoryModel extends baseModel {
    date: string;
    invoiceNumber: string;
    itemDetails: string;
    type: string;
    amount: string;
    actions: Actions;
}

interface Actions {
    srcEyeAction: any;
    download: any;
}