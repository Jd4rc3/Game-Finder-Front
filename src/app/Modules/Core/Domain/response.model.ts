import { Game, Photo } from "./game.model";

export interface Response {
  status: string;
  items: Game[];
  items_dropped: any[];
  stats: Stats;
  spider_name: string;
}

export interface Stats {
  'downloader/request_bytes': number;
  'downloader/request_count': number;
  'downloader/request_method_count/GET': number;
  'downloader/response_bytes': number;
  'downloader/response_count': number;
  'downloader/response_status_count/200': number;
  elapsed_time_seconds: number;
  'feedexport/success_count/FileFeedStorage': number;
  finish_reason: string;
  finish_time: string;
  'httpcompression/response_bytes': number;
  'httpcompression/response_count': number;
  item_scraped_count: number;
  'log_count/DEBUG': number;
  'log_count/INFO': number;
  'memusage/max': number;
  'memusage/startup': number;
  response_received_count: number;
  'robotstxt/request_count': number;
  'robotstxt/response_count': number;
  'robotstxt/response_status_count/200': number;
  'scheduler/dequeued': number;
  'scheduler/dequeued/memory': number;
  'scheduler/enqueued': number;
  'scheduler/enqueued/memory': number;
  start_time: string;
}
