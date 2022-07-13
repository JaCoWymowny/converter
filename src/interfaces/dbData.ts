export interface ExchangeFormData {
  amount: number,
  exchangeFrom: string,
  exchangeTo: string
}

export interface HistoryRecords {
  exchangeFrom: string | undefined;
  exchangeTo: string | undefined;
  amount: number | undefined;
  conversionResult: number | null;
  date: string;
}
