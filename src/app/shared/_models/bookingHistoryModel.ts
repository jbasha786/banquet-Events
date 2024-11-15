export interface baseModel {
    id: number;
}
export interface bookingHistoryModel extends baseModel {
    title: string;
    desc: string;
    src: any;
    ratingSrc: any;
    rating: any;
    viewImage: any;
    cancelBooking: any;
    editBooking: any;
    viewDetails: any;
    frameImg: any;
    name: string;
    price: string;
    diamensions: string;
    bookingID: string;
    dateOfBooking: string;
    noOfGuests: any;
    checkIn: any;
    checkOut: any;
    status: Status;
    address: string;
}

interface Status {
    conformationID: number;
    name: string;
    value: string
}