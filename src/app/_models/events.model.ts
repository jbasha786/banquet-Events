import { BaseModel } from "../shared/_models/headerModel";

export interface eventModel extends BaseModel {
    src: string;
    img_title: string;
    img_subtitle: string;
    date_time: dateTime;
    location: Location;
    card_footer: cardFooter;
}
interface dateTime{
    cal_img: string;
    period: string
}
interface Location{
    loc_img: string;
    place: string
}
interface cardFooter{
    price: string;
    booknow: string
}