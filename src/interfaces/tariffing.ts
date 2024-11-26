export interface TariffDetails {
    title: string;
    cpu: string;
    ram: string;
    ssd: string;
    tariff: string;
    profit: string;
}

export interface TariffSimple {
    title: string;
    cpu: string;
    ram: string;
    ssd: string;
    tariff: string;
}

export interface TariffItem {
    tariff: TariffDetails;
    description: string;
    average: string;
    usage?: TariffSimple[]; // Ожидаем массив объектов типа TariffSimple
}
