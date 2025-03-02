import { ApiClient } from './api-cilent';

class CountriesService extends ApiClient {}

export default new CountriesService('/countries');
