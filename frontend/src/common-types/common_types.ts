export interface CategoryType {
   title: string;
   image: string;
   hotelCount: number;
}

export interface RestaurantMenuTypes {
   title: string;
}
export interface RestaurantTypes {
   name: string;
   image: string;
   menu: RestaurantMenuTypes[];
   logo: string;
   city: string;
   country: string;
   openTime: Date;
   closeTime: Date;
}
